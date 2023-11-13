import Image from "next/image";
import { ImageContainer, Price, ProductContainer, ProductNameAndPrice, ProductName, ProductDescription, BuyButton } from "./styles";
import { ShoppingBagOpen } from "phosphor-react";
import { IProduct } from "@/pages";

interface IProductCard {
  product: IProduct
}

export function ProductCard(props: IProductCard) {
  const { name, description, photo, price } = props.product
  const formatedPrice = price.slice(0, -3)

  return (
    <ProductContainer>
      <>
        <ImageContainer>
          <Image src={photo} alt={name} width={140}
            height={138} />
        </ImageContainer>
        <ProductNameAndPrice>
          <ProductName>{name}</ProductName>
          <Price>R${formatedPrice}</Price>
        </ProductNameAndPrice>
        <ProductDescription>
          {description}
        </ProductDescription>
      </>
      <BuyButton>
        <ShoppingBagOpen color="#FFF" width={16} height={16} />
        <p>COMPRAR</p>
      </BuyButton>
    </ProductContainer>
  )
}