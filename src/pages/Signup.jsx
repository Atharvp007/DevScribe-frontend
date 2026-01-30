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
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import auth from "../assets/auth.jpg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen md:pt-14 md:h-[760px]">
      {/* Image Section */}
      <div className="hidden md:block">
        <img src={auth} alt="auth" className="h-[700px]" />
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">
              Create an account
            </CardTitle>
            <p className="mt-2 text-sm text-center dark:text-gray-300">
              Enter your details below to create your account
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              {/* First & Last Name */}
              <div className="flex gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    placeholder="First Name"
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  autoComplete="off"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1 relative">
                <Label>Password</Label>

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a Password"
                  name="password_signup"
                  autoComplete="off"
                  data-lpignore="true"
                  className="pr-12"
                />

                {/* Eye Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[28px] text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                Sign Up
              </Button>

              {/* Login */}
              <p className="text-center text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline hover:text-gray-800 dark:hover:text-gray-100"
                >
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