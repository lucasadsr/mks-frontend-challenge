import Image from "next/image";
import { ImageContainer, Price, ProductContainer, ProductNameAndPrice, ProductName, ProductDescription, BuyButton } from "./styles";
import { ShoppingBagOpen } from "phosphor-react";
import { IProduct } from "@/pages";
import { useContext } from 'react'
import { CartContext } from "@/contexts/Cart";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProductCard {
  product: IProduct
}

export function ProductCard(props: IProductCard) {
  const { handleAddProductToCart } = useContext(CartContext)
  const { name, description, photo, price } = props.product
  const formatedPrice = price.slice(0, -3)

  const notify = () => toast.success('Item adicionado ao carrinho', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  function handleAddPoduct() {
    handleAddProductToCart(props.product)
    notify()
  }

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
      <BuyButton onClick={handleAddPoduct}>
        <ShoppingBagOpen color="#FFF" width={16} height={16} />
        <p>COMPRAR</p>
      </BuyButton>
    </ProductContainer>
  )
}