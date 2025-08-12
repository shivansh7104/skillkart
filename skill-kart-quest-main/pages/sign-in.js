// pages/sign-in.js
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome Back to SkillKart</h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
}
