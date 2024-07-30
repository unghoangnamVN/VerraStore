import Image from "next/image";
import { X } from "lucide-react";

import useCart from "@/hooks/use-cart";
import { type CartItem } from "@/types";
import usePreviewModal from "@/hooks/use-preview-modal";

interface CartItemProps {
  data: CartItem;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();

  const onRemove = () => {
    cart.removeItem(data.uuid);
  };

  return (
    <div className="flex py-6 border-b">
      <div className="relative h-18 w-24 rounded-md overflow-hidden sm:h-36 sm:w-48">
        <Image
          fill
          src={data.image}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button
            onClick={onRemove}
            className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex flex-col justify-between">
            <p className=" text-md font-semibold text-primary">{data.name}</p>
            {"isWarm" in data.options && (
              <p className="text-sm text-secondary">
                {data.options.isWarm ? "Reheat" : "Don't reheat"}
              </p>
            )}
            {"ice" in data.options && (
              <>
                <p className="text-sm text-secondary">{`Ice: ${data.options.ice}`}</p>
                <p className="text-sm text-secondary">{`Sweetness: ${data.options.sweetness}`}</p>
              </>
            )}
            <p>{data.usdPrice * data.quantity}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
