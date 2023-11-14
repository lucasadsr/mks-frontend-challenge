import { IProduct } from '@/pages'
import { ReactNode, createContext, useState } from 'react'

interface CartContextType {
  cart: IProduct[]
  isCartOpen: boolean
  toggleCart: () => void
  handleAddProductToCart: (product: IProduct) => void
  handleRemoveProductFromCart: (product: IProduct) => void
  handleRemoveItem: (product: IProduct) => void
  handlePurchase: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

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

  function handleRemoveItem(product: IProduct) {
    setCart(prev => prev.filter(item => item.id !== product.id))
  }

  function toggleCart() {
    if (isCartOpen) {
      setIsCartOpen(false)
      document.body.style.overflowY = "scroll"
      document.body.style.overflowX = "hidden"
    } else {
      setIsCartOpen(true)
      window.scrollTo(0, 0)
      document.body.style.overflow = "hidden"
    }
  }

  function handlePurchase() {
    if (cart.length > 0) {
      setCart([])
      setIsCartOpen(false)
      alert("Compra realizada com sucesso!")
    } else {
      alert("Adicione pelo menos um produto no carrinho para finalizar sua compra.")
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddProductToCart,
      handleRemoveProductFromCart,
      isCartOpen,
      toggleCart,
      handleRemoveItem,
      handlePurchase,
    }}>
      {children}
    </CartContext.Provider>
  )
}


