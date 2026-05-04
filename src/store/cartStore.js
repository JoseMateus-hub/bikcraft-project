import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (bike) => {
        const items = get().items;
        const existing = items.find((i) => i.id === bike.id);

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === bike.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...items, { ...bike, quantity: 1 }] });
        }

        set({ isOpen: true });
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;

        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () =>
        get().items.reduce((sum, item) => sum + item.priceNum * item.quantity, 0),
    }),
    {
      name: "bikcraft-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);