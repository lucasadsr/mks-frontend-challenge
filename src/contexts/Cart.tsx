import { IProduct } from '@/pages'
import { ReactNode, createContext, useState } from 'react'

interface CartContextType {
  cart: IProduct[]
  handleAddProductToCart: (product: IProduct) => void
  handleRemoveProductFromCart: (product: IProduct) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([])

  function handleAddProductToCart(product: IProduct) {
    const productAlreadyInCart = cart.find(item => item.id === product.id)

    if (productAlreadyInCart) {
      setCart(prev => prev.map(item => {
        return (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }))
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }])
    }
  }

  function handleRemoveProductFromCart(product: IProduct) {
    const item = cart.find(item => item.id === product.id)

    if (!item) {
      return
    }

    if (item.quantity > 1) {
      setCart(prev => prev.map(item => {
        return (
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      }))
    } else {
      setCart(prev => prev.filter(item => item.id !== product.id))
    }
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{
      cart,
      handleAddProductToCart,
      handleRemoveProductFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}


