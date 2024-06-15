"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeMessagePage = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Bem vindo{isLoaded ? ", " : ""}
        {user?.firstName} 👋🏻
      </h2>
      <p className="text-sm lg:text-base text-green-200">
        Aqui está seu aplicativo de monitoramente de compras.
      </p>
    </div>
  );
};

export default WelcomeMessagePage;
