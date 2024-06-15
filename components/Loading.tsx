import { Loader2 } from "lucide-react";
import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <Loader2 className="w-16 h-16 text-white animate-spin" />
        <p className="text-white mt-4">Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
