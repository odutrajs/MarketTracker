import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type List = {
  code: string;
  description: string;
  quantity: string;
  totalPrice: string;
  unitPrice: string;
};

type ModalProps = {
  data: List[];
  store: string;
  total: string;
};

export function Modal({ data, store, total }: ModalProps) {
  return (
    <Card className="w-full mt-5">
      <CardHeader>
        <CardTitle>Confirme suas compras</CardTitle>
        <CardDescription>Revise, modifique e cadastre.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nameMarket">Mercado</Label>
              <Input
                id="nameMarket"
                placeholder="Nome do mercado"
                defaultValue={store}
              />
            </div>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex space-x-4 items-center border-b py-2"
              >
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor={`code-${index}`}>Código</Label>
                  <Input
                    id={`code-${index}`}
                    placeholder="Código do produto"
                    defaultValue={item.code}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor={`description-${index}`}>Descrição</Label>
                  <Input
                    id={`description-${index}`}
                    placeholder="Descrição do produto"
                    defaultValue={item.description}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor={`quantity-${index}`}>Quantidade</Label>
                  <Input
                    id={`quantity-${index}`}
                    placeholder="Quantidade"
                    defaultValue={item.quantity}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor={`unityPrice-${index}`}>Preço unitário</Label>
                  <Input
                    id={`unityPrice-${index}`}
                    placeholder="Preço unitário"
                    defaultValue={item.unitPrice}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor={`totalPrice-${index}`}>Preço total</Label>
                  <Input
                    id={`totalPrice-${index}`}
                    placeholder="Preço total"
                    defaultValue={item.totalPrice}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-1.5 mt-4">
            <Label htmlFor="total">Valor total</Label>
            <Input id="total" placeholder="Total" defaultValue={total} />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Enviar</Button>
      </CardFooter>
    </Card>
  );
}
