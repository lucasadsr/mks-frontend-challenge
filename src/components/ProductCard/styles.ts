import { styled } from "@/styles";

export const ProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 218,
  height: 285,
  borderRadius: 8,

  boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
  backgroundColor: '#fff'
})

export const ImageContainer = styled('div', {
  maxHeight: 140,
  paddingTop: 18,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ProductNameAndPrice = styled('div', {
  height: 38,
  display: 'flex',
  justifyContent: 'space-between',
  paddingInline: 12,
  marginTop: 14,
})

export const ProductName = styled('p', {
  fontSize: 16,
})

export const Price = styled('span', {
  borderRadius: 5,
  backgroundColor: '#373737',
  color: '#FFF',
  fontWeight: 700,
  fontSize: 15,
  padding: 6,
  display: 'inline-block',
  height: 'fit-content',
})

export const ProductDescription = styled('p', {
  fontSize: 10,
  fontWeight: 300,
  marginTop: 8,
  paddingInline: 12,
  lineHeight: '12px',
})

export const BuyButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 14,

  backgroundColor: '#0F52BA',

  width: 218,
  height: 32,

  borderRadius: '0px 0px 8px 8px',
  border: 0,
  cursor: 'pointer',

  p: {
    fontWeight: 600,
    fontSize: 14,
    color: '#FFF'
  }
})