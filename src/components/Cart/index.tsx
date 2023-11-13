import { Minus, Plus, X } from "phosphor-react";
import { CartContainer, CartItem, CartItemsContainer, CloseCartButton, Header, PurchaseButton, QuantityManager, QuantityManagerContainer, Title, TotalPrice, Wrapper } from "./styles";
import { useContext } from 'react'
import { CartContext } from "@/contexts/Cart";
import Image from "next/image";

export function Cart() {
  const { cart, handleAddProductToCart, handleRemoveProductFromCart } = useContext(CartContext)
  const totalPrice = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0)

  return (
    <CartContainer>
      <Wrapper>
        <div>
          <Header>
            <Title>Carrinho de compras</Title>
            <CloseCartButton>
              <X width={16} color="#FFF" weight="bold" />
            </CloseCartButton>
          </Header>
          <CartItemsContainer>
            {cart.map(item => {
              return (
                <CartItem key={item.id}>
                  <Image src={item.photo} width={60} height={70} alt={item.name} />
                  <p>{item.name}</p>
                  <QuantityManagerContainer>
                    <span>Qtd:</span>
                    <QuantityManager>
                      <button onClick={() => handleRemoveProductFromCart(item)}>
                        <Minus width={5} color="#000" />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAddProductToCart(item)}>
                        <Plus width={5} color="#000" />
                      </button>
                    </QuantityManager>
                  </QuantityManagerContainer>
                  <span>R${item.price.slice(0, -3)}</span>
                </CartItem>
              )
            })}
          </CartItemsContainer>
        </div>
        <TotalPrice>
          Total: <span>R${totalPrice}</span>
        </TotalPrice>
      </Wrapper>
      <PurchaseButton>
        Finalizar Compra
      </PurchaseButton>
    </CartContainer>
  )
}