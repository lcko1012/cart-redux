import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import PropTypes from "prop-types";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as actions from "../actions/index"

class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)} {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            item={item}
            key={index}
            index={index}
            onDelete={this.props.onDelete}
            onChangeMessage={this.props.onChangeMessage}
            onUpdate={this.props.onUpdate}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  //isRequired: bat buoc phai co
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired
  ),
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return{
    onDelete: (product) => {
      dispatch(actions.actDeleteProductInCart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actions.actChangeMessage(message))
    },
    onUpdate : (item, plusOrminus) => {
      dispatch(actions.actUpdateProductInCart(item, plusOrminus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
