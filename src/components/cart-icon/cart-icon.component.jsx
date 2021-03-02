import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className='cart-icon' onClick={ toggleCartHidden }>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{ itemCount }</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = ({ cart:  { cartItems }}) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
//         0
//         )
// })

// // memoized to help with performance of not re-rendering again
// const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// })

// memoized to help with performance of not re-rendering again
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);