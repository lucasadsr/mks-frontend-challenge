import { CartButton, HeaderContainer, Logo } from "./styles";
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>

      <CartButton>
        <ShoppingCart weight="bold" size={18} />
        <span>0</span>
      </CartButton>
    </HeaderContainer>
  )
}