import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link ,useNavigate} from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import auth from "../assets/auth.jpg";
import axios from "axios";
import { toast } from 'sonner'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);


  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);

  setIsSubmitting(true); // ✅ add

  try {
    const response = await axios.post(
      `http://localhost:8000/api/v1/user/register`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      navigate("/login");
      
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || error.message);
  } finally {
    setIsSubmitting(false); // ✅ add
  }
};

  

  return (
    <div className="flex h-screen md:pt-14 md:h-[760px]">
      {/* Image */}
      <div className="hidden md:block">
        <img src={auth} alt="auth" className="h-[700px]" />
      </div>

      {/* Form */}
      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              Create an account
            </CardTitle>
            <p className="mt-2 text-sm text-center text-muted-foreground">
              Enter your details below
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Names */}
              <div className="flex gap-3">
                <div className="w-full">
                  <Label>First Name</Label>
                  <Input
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>

                <div className="w-full">
                  <Label>Last Name</Label>
                  <Input
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="pr-12"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[24px] text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
