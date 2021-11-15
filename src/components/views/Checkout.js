import {useState, useRef} from 'react'
import { useCart } from '../contexts/Cart'
import Countries from '../helpers/Countries_elements'
import Districts from '../helpers/Districts_elements'
import Us_states from '../helpers/Us_states_elements'
import {currencyFormatter, ugandaShillings} from '../helpers/Currency_format'


const Checkout = () => {
    const checkoutRef = useRef()
    const {total}= useCart()
    const [country, setCountry] = useState('Uganda')
    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [voucher, setVoucher] = useState('')
    const vouchers = ['10% off', '20% off', '30% off']
    
    const handlePayment = () =>{
        
    }
    // const vouchers = {
    //     xxx:{rate:10, status:'active', amount:10000},
    //     yyy:{rate:15, status:'active', amount:10000},
    //     www:{rate:20, status:'active', amount:null},
    //     zzz:{rate:30, status:'active', amount:10000}
    // }

    return (
        
        <div>
            <h1>Checkout</h1>
             <form ref = {checkoutRef} method = 'post'>
                <fieldset>
                    <legend>Biling Info</legend>
                    <div>
                        <label>Name</label>
                        <input type = 'text' placeholder = 'Name'/>
                    </div>
                </fieldset>

                <fieldset>
                    <label>Shipping Info</label>
                
                <div>
                    <label>Name<span className = 'required-label'>*</span></label>
                    <input type = 'text' required placeholder='Name'/>
                </div>
                <div>
                    <label>Company (optional)</label>
                    <input type = 'text' placeholder= 'company'/>
                </div>
                <div>
                    <label>Address line 1 :<span className = 'required-label'>*</span></label>
                    <input type = 'text' required placeholder='Ex. Suite no. Apt No., plot No., Rd.'/>
                </div>
                <div>
                    <label>Address line 2:</label>
                    <input type = 'text' placeholder= 'state, zip code, town'/>
                </div>
                <div>
                    <label>Country<span className ='required-label'>*</span></label>
                    <Countries onChange = {(event) => setCountry(event.target.value)} required id = 'country'/>
                </div>

                {country == 'Uganda'?
                    <>
                        <div>
                            <label>District <span className= 'required-label'>*</span></label>
                            <Districts id = 'district'/>
                        </div>
                        <div>
                            <label>Town/Village</label>
                            <input type = 'text' placeholder= 'Town/Village'/>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <label>State <span className = 'required-label'>*</span></label>
                            <Us_states id = 'us_state'/>
                        </div>
                        <div>
                            <label>Zip code / Postal code</label>
                            <input type = 'text' placeholder = 'Postal Code'/>
                        </div>
                    </>
                }
                </fieldset>
                <fieldset>
                    <legend>Cart Details</legend>
                    <p>Subtotal {ugandaShillings.format(total)}</p>
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {currencyFormatter((total + shipping + tax - discount), 'UGX', 'en-US')}</p>
                </fieldset>

                <fieldset>
                    <legend>Payment</legend>
                    <div>
                        <label>Voucher code</label> 
                        <input type = 'text' placeholder='voucher code'/>
                    </div>
                    <label>MoMo/mobile Money<input type = 'radio' value ='momo' ref ='momo' /></label>
                    <label>Airtel<input type = 'radio' value ='airtel' ref ='airtel' /></label>
                </fieldset>
                <button type='submit' onClick={handlePayment}>Pay Now</button>
            </form>

        </div>
    )
}

export default Checkout
