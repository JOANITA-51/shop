import React from 'react'
import { useCart } from '../contexts/Cart'

const Checkout = () => {
    const formRef = useRef('Checkout')
    const {total}= useCart()
    const handlePayment = () =>{
        console.log (1)
    }
    return (
        
        <div>
            <form ref = 'checkout' method = 'post'>
                <fieldset>
                    <legend>Biling Info</legend>
                    <div>
                        <label>First name</label>
                        <input type = 'text' placeholder = 'firstname' ref= 'first_name'/>
                    </div>
                </fieldset>

                <fieldset>
                    <label>Shipping Info</label>
                </fieldset>

                <fieldset>
                    <label>Payment</label>
                    <p>Subtotal {total}</p>
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {total + shipping + tax - discount}</p>
                </fieldset>
                <h1>Shipping info</h1>
                <h1>Payment</h1>
                <div>
                    
                        <label>MoMo/mobile Money<input type = 'radio' value ='momo' ref ='momo' /></label>
                        <label>Airtel<input type = 'radio' value ='airtel' ref ='airtel' /></label>
                    
                </div>
                <button type='submit' onClick={handlePayment}>Pay Now</button>
            </form>
            Checkout
        </div>
    )
}

export default Checkout
