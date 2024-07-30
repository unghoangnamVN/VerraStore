'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from '../ui/form'
import { Checkbox } from '../ui/checkbox'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import useCart from '@/hooks/use-cart'
import usePreviewModal from '@/hooks/use-preview-modal'
import { CartItem } from '@/types'

interface FoodFormProps {
    initialData?: CartItem
}

const formSchema = z.object({
    isWarm: z.boolean().default(false),
    quantity: z.coerce.number().min(1),
})

type FoodFormValues = z.infer<typeof formSchema>

const FoodForm = ({ initialData }: FoodFormProps) => {
    const cart = useCart()
    const previewModal = usePreviewModal()
    const product = usePreviewModal((state) => state.data)

    if (!product) {
        return null
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<FoodFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
            ? initialData
            : {
                  isWarm: false,
                  quantity: 1,
              },
    })

    const onSubmit = (values: FoodFormValues) => {
        const options = { isWarm: values.isWarm }
        cart.addItem(product, options, values.quantity)
        previewModal.onClose()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="isWarm"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Reheat</FormLabel>
                                <FormDescription>
                                    Let us warm it up for you!
                                </FormDescription>
                            </div>
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
                                        onClick={() =>
                                            field.onChange(field.value - 1)
                                        }
                                        disabled={field.value === 1}
                                        className={cn(
                                            field.value === 1
                                                ? 'text-slate-300'
                                                : 'text-primary'
                                        )}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <p className="text-xs text-primary">
                                        {field.value}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            field.onChange(field.value + 1)
                                        }
                                        className="text-primary"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full mt-6 text-white rounded-full"
                >
                    Add to cart
                </Button>
            </form>
        </Form>
    )
}

export default FoodForm
