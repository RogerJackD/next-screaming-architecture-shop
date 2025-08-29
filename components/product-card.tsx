"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAppDispatch } from "@/lib/hooks"
import { addToCart, type Product } from "@/lib/features/cart/cartSlice"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={120}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600">${product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carritoo
        </Button>
      </CardFooter>
    </Card>
  )
}
