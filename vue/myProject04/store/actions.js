import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
	console.log(product)
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
