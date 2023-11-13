import { api } from "@/lib/axios"
import { GetServerSideProps } from "next"
import { ProductsContainer } from "./styles"
import { ProductCard } from "../ProductCard"
import { IProduct } from "@/pages"

interface ProductsProps {
  products: IProduct[]
}

export function Products({ products }: ProductsProps) {

  return (
    <ProductsContainer>
      {products.map(product => {
        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
    </ProductsContainer>
  )
}