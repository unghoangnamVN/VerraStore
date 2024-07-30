"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import { Dialog, DialogContent } from "../ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { primary } from "@/lib/fonts";
import { Separator } from "../ui/separator";
import FoodForm from "./food-form";
import DrinkForm from "./drink-form";

export const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Dialog open={previewModal.isOpen} onOpenChange={previewModal.onClose}>
      <DialogContent>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                alt={product.name}
                src={product.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="sm:col-span-8 lg:col-span-7 space-y-4">
            <div className="flex flex-col">
              <h3
                className={cn(
                  "font-medium text-primary text-xl",
                  primary.className
                )}
              >
                {product.name}
              </h3>
              <p className="text-xs text-black">{product.description}</p>
              <h3 className={cn("font-medium text-primary", primary.className)}>
                {product.vndPrice}K / ${product.usdPrice}
              </h3>
            </div>
            <Separator />
            {previewModal.type === "food" && <FoodForm />}
            {previewModal.type === "drink" && <DrinkForm />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
