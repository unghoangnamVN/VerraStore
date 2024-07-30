"use client";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { primary } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ItemProps {
  data: Product;
  type: "food" | "drink";
}

export const Item = ({ data, type }: ItemProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();

  return (
    <div className="flex flex-col gap-1">
      <div className="relative aspect-[4/3] w-full">
        <Image
          alt={data.name}
          src={data.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="w-[140px] h-12">
        <h3 className={cn("font-medium text-primary", primary.className)}>
          {data.name}
        </h3>
      </div>
      <p className="text-xs text-black">{data.description}</p>
      <div className="flex items-center justify-between">
        <h3 className={cn("font-medium text-primary", primary.className)}>
          {data.vndPrice}K / ${data.usdPrice}
        </h3>
        <button
          onClick={() => previewModal.onOpen(type, data)}
          className="border rounded-full shadow-sm h-5 w-5 border-primary-foreground items-center flex justify-center"
        >
          {cart.items.some((product) => product.id === data.id) ? (
            <p className="text-xs text-primary">
              {cart.countItemsById(data.id)}
            </p>
          ) : (
            <Plus className="h-4 w-4 text-primary" />
          )}
        </button>
      </div>
    </div>
  );
};
