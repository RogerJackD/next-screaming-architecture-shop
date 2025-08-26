"use client"

import { ProductCard } from "./product-card"
import type { Product } from "@/lib/features/cart/cartSlice"

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "/iphone-15-pro.png",
    description: "El último iPhone con chip A17 Pro y cámara profesional",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1199,
    image: "/macbook-air-laptop-silver.png",
    description: "Laptop ultradelgada con chip M2 y pantalla Retina",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    image: "/airpods-pro-wireless-earbuds.png",
    description: "Auriculares inalámbricos con cancelación de ruido",
  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    price: 1099,
    image: "/ipad-pro-tablet-with-apple-pencil.png",
    description: "Tablet profesional con chip M2 y pantalla Liquid Retina",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 399,
    image: "/apple-watch-series-9-smartwatch.png",
    description: "Smartwatch con GPS y monitoreo de salud avanzado",
  },
  {
    id: 6,
    name: "Magic Keyboard",
    price: 179,
    image: "/apple-magic-keyboard-wireless.png",
    description: "Teclado inalámbrico con teclas retroiluminadas",
  },
]

export function ProductCatalog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
        <p className="text-gray-600">Descubre nuestra selección de productos tecnológicos</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
