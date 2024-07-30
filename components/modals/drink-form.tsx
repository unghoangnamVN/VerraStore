"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";

interface DrinkFormProps {
  initialData?: DrinkItem;
}

const formSchema = z.object({
  ice: z.enum(["Normal Ice", "Less Ice", "No Ice"]),
  sugar: z.enum([
    "100% Sugar",
    "75% Sugar",
    "50% Sugar",
    "25% Sugar",
    "No Sugar",
  ]),
  quantity: z.coerce.number().min(1),
});

type DrinkFormValues = z.infer<typeof formSchema>;

const DrinkForm = ({ initialData }: DrinkFormProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  const form = useForm<DrinkFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          ice: "Normal Ice",
          sugar: "100% Sugar",
          quantity: 1,
        },
  });

  const onSubmit = (values: DrinkFormValues) => {
    const options = { ice: values.ice, sweetness: values.sugar };
    cart.addItem(product, options, values.quantity);
    previewModal.onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="ice"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Ice Level</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Normal Ice" />
                    </FormControl>
                    <FormLabel className="font-normal">Normal Ice</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Less Ice" />
                    </FormControl>
                    <FormLabel className="font-normal">Less Ice</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="No Ice" />
                    </FormControl>
                    <FormLabel className="font-normal">No Ice</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="sugar"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Sweetness</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="100% Sugar" />
                    </FormControl>
                    <FormLabel className="font-normal">100% Sugar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="75% Sugar" />
                    </FormControl>
                    <FormLabel className="font-normal">75% Sugar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="50% Sugar" />
                    </FormControl>
                    <FormLabel className="font-normal">50% Sugar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="25% Sugar" />
                    </FormControl>
                    <FormLabel className="font-normal">25% Sugar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="No Sugar" />
                    </FormControl>
                    <FormLabel className="font-normal">No Sugar</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex justify-between items-center px-2 border rounded-full w-[100px] h-[30px]">
                  <button
                    type="button"
                    onClick={() => field.onChange(field.value - 1)}
                    disabled={field.value === 1}
                    className={cn(
                      field.value === 1 ? "text-slate-300" : "text-primary"
                    )}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-primary">{field.value}</p>
                  <button
                    type="button"
                    onClick={() => field.onChange(field.value + 1)}
                    className="text-primary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-6 text-white rounded-full">
          Add to cart
        </Button>
      </form>
    </Form>
  );
};

export default DrinkForm;
