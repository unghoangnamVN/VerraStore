"use client";

import { Container } from "@/components/layout/container";
import React, { useEffect, useState } from "react";
import CartItem from "./_components/cart-item";
import useCart from "@/hooks/use-cart";
import Summary from "./_components/summary";
import { cn } from "@/lib/utils";
import { primary } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1
          className={cn(
            "text-3xl font-medium cursor-pointer transition text-primary",
            primary.className
          )}
        >
          Review Order
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <div className="flex items-center">
                <p className="text-neutral-500 text-sm">
                  No items added to cart.
                </p>
                <Button variant="link" onClick={() => router.push("/menu")}>
                  Add an item?
                </Button>
              </div>
            )}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
