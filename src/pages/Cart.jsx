import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { toast } from 'react-toastify'

function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem('cart')) || []

    setCartItems(savedCart)
  }, [])

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id)

    setCartItems(updatedCart)

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    )

    toast.info('Item removed from cart!')
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  )

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="container">

          <div className="cart-header">
            <h1>🛒 My Cart</h1>
            <p>{cartItems.length} items in your cart</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Add some products to continue</p>
            </div>
          ) : (
            <div className="cart-layout">

              <div className="cart-items">

                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>

                    <img
                      src={item.img}
                      alt={item.title}
                      className="cart-item-img"
                    />

                    <div className="cart-item-info">
                      <h4>{item.title}</h4>
                      <p>{item.category}</p>
                    </div>

                    <div className="cart-item-price">
                      ${item.price}
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      🗑 Remove
                    </button>

                  </div>
                ))}

              </div>

              <div className="cart-summary">

                <h3>Order Summary</h3>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>

                <div className="summary-row">
                  <span>Tax</span>
                  <span>$5</span>
                </div>

                <div className="summary-row total">
                  <span>Total</span>
                  <span>${subtotal + 5}</span>
                </div>

                <button className="checkout-btn">
                  Proceed to Checkout
                </button>

              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Cart