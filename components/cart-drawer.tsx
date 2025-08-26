"use client"

import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from "@/lib/features/cart/cartSlice"
import Image from "next/image"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, total, itemCount } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              Carrito de Compras
              {itemCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {itemCount}
                </Badge>
              )}
            </h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={150}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-600 text-xs">${item.price} c/u</p>
                      <p className="text-green-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => dispatch(incrementQuantity(item.id))}>
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  Proceder al Pago
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => dispatch(clearCart())}>
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
