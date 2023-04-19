import reducer, { ICartState, clearCart, minusFromCart, plusToCart, removeFromCart, selectCartTotalCost } from "../src/store/slices/cartSlice";
import { RootState } from "../src/store/store";

describe('Cart slice', () => {
  describe('Cart reducer', () => {
    let state: ICartState;
    beforeEach(() => {
      state = {
        productsIds: {
          '1': 2,
          '2': 2
        },
        totalCount: 4
      }
    });

    it('plusToCart', () => {
      state = reducer(state, plusToCart('1'));
      expect(state.productsIds['1']).toBe(3);
      expect(state.totalCount).toBe(5);

      state = reducer(state, plusToCart('4'));
      expect(state.productsIds['4']).toBe(1);
      expect(state.totalCount).toBe(6);
    });

    it('minusFromCart', () => {
      state = reducer(state, minusFromCart('1'));
      expect(state.productsIds['1']).toBe(1);
      expect(state.totalCount).toBe(3);

      state = reducer(state, minusFromCart('4'));
      expect(state.productsIds['4']).toBeFalsy();
      expect(state.totalCount).toBe(3);
    });

    it('removeFromCart', () => {
      state = reducer(state, removeFromCart('1'));
      expect(state.productsIds['1']).toBeFalsy();
      expect(state.totalCount).toBe(2);
    });

    it('clearCart', () => {
      state = reducer(state, clearCart());
      expect(state.productsIds).toEqual({});
      expect(state.totalCount).toBe(0);
    });
  });

  describe('selectCartTotalCost', () => {
    it('should properly calc total cost', () => {
      const state = {
        products: {
          data: [
            { id: '1', price: 2 },
            { id: '2', price: 20 },
            { id: '3', price: 200 },
          ]
        },
        cart: {
          productsIds: {
            '1': 3,
            '3': 2
          }
        }
      } as any as RootState;
      const totalCost = selectCartTotalCost(state);
      expect(totalCost).toBe(406);
    })
  });
});