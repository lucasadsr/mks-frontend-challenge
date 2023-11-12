import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingInline: '4rem',

  backgroundColor: '#0F52BA',
  height: 100
})

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: 12,
  color: '#FFF',

  h1: {
    fontSize: 40,
    fontWeight: 600,
  },

  p: {
    fontSize: 20,
    fontWeight: 300,
  }
})

export const CartButton = styled('button', {
  width: 90,
  height: 45,
  border: 0,
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,

  cursor: 'pointer',

  span: {
    fontWeight: 700,
    fontSize: 18
  },
})