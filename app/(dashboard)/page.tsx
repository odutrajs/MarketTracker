"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      // Aqui você pode adicionar lógica para enviar o arquivo para a API, se necessário.
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Importar imagem
          </CardTitle>
          <div className="flex items-center justify-center mt-8">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer">
              <Button size="sm" as="span">
                <Plus className="size-4 mr-2" />
                Importar imagem
              </Button>
            </label>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
