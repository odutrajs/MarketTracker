"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import LoadingOverlay from "@/components/Loading";
import { useProcessImage } from "../api/processImage";
import { Modal } from "@/components/modal";

export default function Home() {
  const [imageFile, setImageFile] = useState(null);

  const { data, error, isLoading } = useProcessImage(imageFile);

  const onDrop = useCallback((acceptedFiles: any) => {
    setImageFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      {isLoading && <LoadingOverlay />}
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Importar imagem
          </CardTitle>
          <div
            {...getRootProps()}
            className="flex items-center justify-center mt-8 cursor-pointer"
          >
            <input {...getInputProps()} />
            <Button size="sm">
              <Plus className="size-4 mr-2" />
              Importar imagem
            </Button>
          </div>
        </CardHeader>
        {error && <p>Erro: {error.message}</p>}
      </Card>
      {data && (
        <Modal data={data.products} store={data.store} total={data.total} />
      )}
    </div>
  );
}
