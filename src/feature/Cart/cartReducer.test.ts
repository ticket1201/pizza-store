import {addToCart, cartReducer, cartStateType} from './cartReducer';

let startState:cartStateType

beforeEach(() => {
    startState = {
        products: [],
        totalPrice: 0
    }
})

test('correct item should be added to cart', () => {
    const endState = cartReducer(startState, addToCart({
        id: 1,
        description: 'description',
        name: 'name',
        photo: 'url',
        price: 23
    }))
    expect(endState.products.length).toBe(1)
    expect(startState.products.length).toBe(0)
    expect(endState.products[0].id).toBe(1)
    expect(endState.products[0].name).toBe('name')
});