import { Minus, Plus, X } from "phosphor-react";
import { CartContainer, CartItem, CartItemsContainer, CloseCartButton, Header, ItemName, ItemPrice, PurchaseButton, QtdAndPrice, QuantityManager, QuantityManagerContainer, RemoveItemButton, Title, TotalPrice, Wrapper } from "./styles";
import { useContext } from 'react'
import { CartContext } from "@/contexts/Cart";
import Image from "next/image";

export function Cart() {
  const {
    cart,
    isCartOpen,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    toggleCart,
    handleRemoveItem,
    handlePurchase
  } = useContext(CartContext)
  const totalPrice = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0)

  return (
    <CartContainer isCartOpen={isCartOpen} >
      <Wrapper>
        <div>
          <Header>
            <Title>Carrinho de compras</Title>
            <CloseCartButton>
              <X width={16} color="#FFF" weight="bold" onClick={toggleCart} />
            </CloseCartButton>
          </Header>
          <CartItemsContainer>
            {cart.map(item => {
              return (
                <CartItem key={item.id}>
                  <RemoveItemButton onClick={() => handleRemoveItem(item)}>
                    <X size={24} />
                  </RemoveItemButton>
                  <Image src={item.photo} width={60} height={70} alt={item.name} />
                  <ItemName>{item.name}</ItemName>
                  <QtdAndPrice>
                    <QuantityManagerContainer>
                      <span>Qtd:</span>
                      <QuantityManager>
                        <button onClick={() => handleRemoveProductFromCart(item)}>
                          <Minus width={5} color="#000" weight="bold" />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleAddProductToCart(item)}>
                          <Plus width={5} color="#000" weight="bold" />
                        </button>
                      </QuantityManager>
                    </QuantityManagerContainer>
                    <ItemPrice>R${item.price.slice(0, -3)}</ItemPrice>
                  </QtdAndPrice>
                </CartItem>
              )
            })}
          </CartItemsContainer>
        </div>
        <TotalPrice>
          Total: <span>R${totalPrice}</span>
        </TotalPrice>
      </Wrapper>
      <PurchaseButton onClick={handlePurchase}>
        Finalizar Compra
      </PurchaseButton>
    </CartContainer>
  )
}