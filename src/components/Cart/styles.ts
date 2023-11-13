import { styled } from "@/styles";

export const CartContainer = styled('div', {
  position: 'absolute',
  right: -10,
  top: 0,
  height: '100vh',
  width: 486,
  backgroundColor: '#0F52BA',
  boxShadow: '-5px 0px 6px 0px rgba(0, 0, 0, 0.13)',
  transition: 'all 0.3s',

  variants: {
    isCartOpen: {
      true: {
        transform: 'translateX((100vw - 100%))',
      },
      false: {
        transform: 'translateX(100%)',
      }
    }
  }
})

export const Wrapper = styled('div', {
  paddingInline: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100% - 140px)',
  overflowY: 'scroll'
})

export const Header = styled('header', {
  marginTop: 36,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Title = styled('p', {
  color: '#FFF',
  fontSize: 27,
  fontWeight: 700,
  width: 180,
})

export const CloseCartButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 0,
  backgroundColor: '#000',
  padding: 8,
  borderRadius: 999,

  cursor: 'pointer'
})

export const CartItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  marginTop: 64,
})

export const CartItem = styled('div', {
  width: '100%',
  height: 95,
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '-2px 2px 10px 0px rgba(0, 0, 0, 0.05)',

  display: 'flex',
  alignItems: 'center',
  paddingInline: 24,

  P: {
    fontSize: 13,
    width: 113,
    margin: '0 9px 0 19px',
  },

  span: {
    marginLeft: 40,
    fontWeight: 700,
    fontSize: 14,
    color: '#000',
  },
})

export const QuantityManagerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginTop: -9,

  span: {
    fontSize: 5,
    color: '#000',
    textAlign: 'left',
    marginLeft: 0,
  },
})

export const QuantityManager = styled('div', {
  width: 56,
  height: 22,
  borderRadius: 4,
  border: '0.3px solid #BFBFBF',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    color: '#000',
    fontSize: 8,
    borderInline: '0.2px solid #BFBFBF',
    paddingInline: 6,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    width: '100%',
    paddingInline: 4,
  }
})

export const TotalPrice = styled('p', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#FFF',
  fontWeight: 700,
  fontSize: 28,
  marginTop: 16,
})

export const PurchaseButton = styled('button', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '100%',
  height: 100,
  backgroundColor: '#000',

  border: 'none',

  color: '#FFF',
  fontWeight: 700,
  fontSize: 28,
  cursor: 'pointer',
})