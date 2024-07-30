"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { primary } from "@/lib/fonts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  address: z.string().min(1, {
    message: "Address is required",
  }),
  isPaid: z.boolean().refine((val) => val === true, {
    message: "Please confirm your payment before placing order.",
  }),
});

type formValues = z.infer<typeof formSchema>;

const Summary = () => {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      isPaid: false,
    },
  });

  const totalPrice = items.reduce((total, item) => {
    return total + item.usdPrice * item.quantity;
  }, 0);

  const onCheckout = async (values: z.infer<typeof formSchema>) => {
    const details = {
      ...values,
      items,
      price: totalPrice,
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      details
    );

    removeAll();
    form.reset();

    toast.success("Order placed successfully!");
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onCheckout)}
          className="w-full space-y-4"
        >
          <h2
            className={cn(
              "text-xl font-medium cursor-pointer transition text-primary",
              primary.className
            )}
          >
            Order details and payment
          </h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone:</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="+1 234 567 8989"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="johndoe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address:</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="127B Trieu Viet Vuong, Hanoi City, Vietnam"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-sm">
            Please check your infomation carefully before continue.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="text-base font-medium text-gray-900">Total</div>
              <p>{totalPrice}</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-medium text-gray-900">
                Please transfer the total balance to this bank account
              </p>
              <p className="text-sm">MB Bank</p>
              <p className="text-sm">Vuong Hong Anh</p>
              <p className="text-sm">123456789</p>
              <p className="text-sm">
                Content: Receiver Adress Ex - 123 Hang Bong Str
              </p>
            </div>
          </div>
          <FormField
            control={form.control}
            name="isPaid"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Confirm your payment</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={items.length === 0}
            className="w-full mt-6 text-white rounded-full"
          >
            Place order
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Summary;
