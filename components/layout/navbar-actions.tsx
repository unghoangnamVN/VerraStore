"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push("/cart")} variant="ghost">
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium">
          {cart.countItems().toString()}
        </span>
      </Button>
    </div>
  );
};
