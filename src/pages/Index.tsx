import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { IconEyeOff, IconEye, IconBrandGoogle } from "@tabler/icons-react";

const BootstrapLogo = () => (
  <div className="relative w-12 h-12">
    <svg
      width="48"
      height="39"
      viewBox="0 0 48 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-[38px]"
    >
      <path
        d="M5.29509 4.99875C5.20453 2.39812 7.23075 0 9.96956 0H38.0339C40.7727 0 42.7989 2.39812 42.7084 4.99875C42.6214 7.49691 42.7343 10.733 43.5487 13.3716C44.3658 16.0183 45.7435 17.6913 48 17.9062V20.3438C45.7435 20.5587 44.3658 22.2317 43.5487 24.8784C42.7343 27.517 42.6214 30.7531 42.7084 33.2513C42.7989 35.8519 40.7727 38.25 38.0339 38.25H9.96956C7.23075 38.25 5.20453 35.8519 5.29519 33.2513C5.38209 30.7531 5.26912 27.517 4.45462 24.8784C3.63769 22.2317 2.25656 20.5587 0 20.3438V17.9062C2.25647 17.6913 3.63769 16.0183 4.45462 13.3716C5.26912 10.733 5.38209 7.49691 5.29509 4.99875V4.99875Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="7.13241"
          y1="1.01231"
          x2="49.0762"
          y2="34.3073"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9013FE" />
          <stop offset="1" stopColor="#6610F2" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      width="32"
      height="26"
      viewBox="0 0 32 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-5"
      style={{
        filter: "drop-shadow(0px 4px 16px rgba(0,0,0,0.15))",
      }}
    >
      <path
        d="M16.0409 20.2928C20.475 20.2928 23.147 18.1218 23.147 14.5408C23.147 11.834 21.2405 9.8743 18.4096 9.5641V9.4513C20.4894 9.113 22.1215 7.1815 22.1215 5.0245C22.1215 1.9511 19.6951 -0.0509 15.9976 -0.0509H7.6782V20.2928H16.0409ZM10.9135 2.5291H15.2177C17.5575 2.5291 18.8862 3.5723 18.8862 5.4615C18.8862 7.4776 17.3408 8.6054 14.5388 8.6054H10.9135V2.5291V2.5291ZM10.9135 17.7129V11.0163H15.1887C18.2507 11.0163 19.8395 12.1441 19.8395 14.3435C19.8395 16.5428 18.2941 17.7129 15.3765 17.7129H10.9135V17.7129Z"
        fill="url(#paint0_linear_b)"
        stroke="white"
        strokeWidth="0.1"
      />
      <defs>
        <linearGradient
          id="paint0_linear_b"
          x1="9.1414"
          y1="1.2881"
          x2="18.5169"
          y2="17.1443"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F1E5FC" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 md:py-16">
      <div className="w-full max-w-[360px] space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center space-y-6">
          <BootstrapLogo />
          <div className="text-center space-y-3">
            <h1 className="text-[32px] font-medium text-[#212529] leading-[120%]">
              Log in to your account
            </h1>
            <p className="text-base text-[#6c757d] leading-[150%]">
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-base font-normal text-[#212529] leading-[150%]"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-auto py-[6px] px-3 text-base border-[#ced4da] rounded focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] placeholder:text-[#6c757d]"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-base font-normal text-[#212529] leading-[150%]"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-auto py-[6px] px-3 pr-10 text-base border-[#ced4da] rounded focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] placeholder:text-[#6c757d]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] hover:text-[#212529] transition-colors"
              >
                {showPassword ? (
                  <IconEye size={14} />
                ) : (
                  <IconEyeOff size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-2 pb-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="h-4 w-4 border-[#dee2e6] data-[state=checked]:bg-[#0d6efd] data-[state=checked]:border-[#0d6efd]"
              />
              <Label
                htmlFor="remember"
                className="text-base font-normal text-[#212529] leading-[150%] cursor-pointer"
              >
                Remember me
              </Label>
            </div>
            <a
              href="#"
              className="text-base font-normal text-[#0d6efd] leading-[150%] underline hover:no-underline"
            >
              Forgot password
            </a>
          </div>

          {/* Buttons */}
          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full h-auto py-[6px] px-3 text-base font-normal bg-[#0d6efd] hover:bg-[#0b5ed7] border border-[#0d6efd] rounded-md"
            >
              Sign in
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full h-auto py-[7px] px-[13px] text-base font-normal text-[#0d6efd] border-[#0d6efd] hover:bg-[#0d6efd] hover:text-white rounded"
            >
              <IconBrandGoogle size={16} className="mr-2" />
              Sign in with Google
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="flex justify-center items-center space-x-1 pt-4">
            <span className="text-base font-normal text-[#6c757d] leading-[150%]">
              Don't have an account?
            </span>
            <a
              href="#"
              className="text-base font-normal text-[#0d6efd] leading-[150%] underline hover:no-underline"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
