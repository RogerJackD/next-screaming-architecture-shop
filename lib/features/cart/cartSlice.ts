import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1  
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }

      state.itemCount += 1
      state.total += action.payload.price
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)

      if (itemIndex !== -1) {
        const item = state.items[itemIndex]
        state.total -= item.price * item.quantity
        state.itemCount -= item.quantity
        state.items.splice(itemIndex, 1)
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item) {
        item.quantity += 1
        state.itemCount += 1
        state.total += item.price
      }
    },
    
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.itemCount -= 1
        state.total -= item.price
      }
    },

    clearCart: (state) => {
      state.items = []
      state.total = 0
      state.itemCount = 0
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer
