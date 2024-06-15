import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">Bem vindo!</h1>
          <p className="text-base text-[#7E8CA0]">
            Faça login ou crie uma conta.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-gradient-to-b from-green-700 to-green-500 hidden lg:flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <h1 className="p-5 text-3xl lg:text-5xl text-white font-extrabold tracking-widest logo-text">
          Market Tracker
        </h1>
      </div>
    </div>
  );
}
