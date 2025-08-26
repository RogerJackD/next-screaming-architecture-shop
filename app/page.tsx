import { Navbar } from "@/components/navbar"
import { ProductCatalog } from "@/components/product-catalog"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <ProductCatalog />
      </main>
    </div>
  )
}
