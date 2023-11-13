import { CartContext } from "@/contexts/Cart";
import { CartButton, HeaderContainer, Logo } from "./styles";
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

export function Header() {
  const { cart, toggleCart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>

      <CartButton onClick={toggleCart}>
        <ShoppingCart weight="bold" size={18} />
        <span>{cart.length}</span>
      </CartButton>
    </HeaderContainer>
  )
}