import {useState, useRef} from 'react'
import { useCart } from '../contexts/Cart'
import Countries from '../helpers/Countries_elements'
import Districts from '../helpers/Districts_elements'
import Us_states from '../helpers/Us_states_elements'
import {currencyFormatter, ugandaShillings} from '../helpers/Currency_format'
import {getCountryZone } from '../helpers/shipping'
import axios from 'axios'

const Checkout = () => {
    const checkoutRef = useRef()
    const {total}= useCart()
    const [country, setCountry] = useState('Uganda')
    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [voucher, setVoucher] = useState('')
    const [zone, setZone] = useState(null)
    const [patasenteOption, setPatasenteOption] = useState(null)
    const [patasentePhone, setPatasentePhone] = useState(null)
    const [mtnSecretCode, setMTNSecretCode] = useState(null)
    // const vouchers = ['10% off', '20% off', '30% off']
    
    const handlePayment = () =>{
        
    }
     const vouchers = {
         xxx:{rate:10, status:'active', amount:10000},
         yyy:{rate:15, status:'expired', amount:10000},
         www:{rate:20, status:'active', amount:null},
         zzz:{rate:25, status:'active', amount:10000},
         uuu:{rate:null, status:'active', amount:null},
         vvv:{rate:null, status:'active', amount:1000}
     }

     const getVoucherInfo = (appliedVoucher) => {
         const theVoucher = vouchers[appliedVoucher]
         if (theVoucher){
             if(theVoucher['status'] !== 'expired'){
                 if(!theVoucher['rate'] && !theVoucher['amount']){
                     return {msg: 'invalid Voucher'}
                 }
                 return theVoucher['amount'] >0?{amount: theVoucher['amount']}:{rate: theVoucher['rate']}
             }
             return {msg: 'Expired Voucher'}
         }
         return {msg:'Invalid Voucher'}
     }

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
                    <Countries onChange = {(event) =>{ 
                        setCountry(event.target.value)
                        setZone(getCountryZone(event.target.value))
                        setShipping(0)
                        console.log(zone)
                        }} required id = 'country'/>
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
                       {country == 'United States' ? <div>
                            <label>State <span class="required-label">*</span></label>
                            <Us_states id="us_state" />
                        </div> :
                        <div>
                            <label>State <span className = 'required-label'>*</span></label>
                            <input type="text" required placeholder="State"/>
                        </div>}
                        <div>
                            <label>Zip code / Postal code</label>
                            <input type = 'text' placeholder = 'Postal Code'/>
                        </div>
                    </>
                }
                </fieldset>
                {zone?.error
                    ?
                    <div>{zone.error}</div>
                    :
                  <fieldset>
                    <legend>Shipping Methods</legend>
                    {zone && zone.map(theCompany =>
                            <div>
                                <h1>{theCompany.company}</h1>
                            {
                                theCompany.classes.map((companyClass,index) =>
                                    <div>
                                        <input
                                            onChange={(event) => {
                                                //setShipping(0)
                                                setShipping(Number(event.target.getAttribute('data-cost')))

                                            }}
                                            id={`${theCompany.company}_${companyClass.label}`.toLocaleLowerCase().replace(' ', '_')}
                                            type="radio" name="shipping_class" value={`${theCompany.company}_${companyClass.label}`} data-cost={companyClass.cost} />
                                        <label htmlFor={
                                            `${theCompany.company}_${companyClass.label}`.toLocaleLowerCase().replace(' ','_')
                                        }>{`${companyClass.label} ${companyClass.cost}`}
                                        </label>
                                    </div>
                            ) }
                            </div>
                    )
                    
                    }
                  </fieldset>
                
                }

                <fieldset>
                    <legend>Cart Details</legend>
                    <p>Subtotal {ugandaShillings.format(total)}</p>
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {currencyFormatter((total + shipping + tax - discount))}</p>
                </fieldset>

                <fieldset>
                    <legend>Payment</legend>
                    <div>
                        <label>Voucher code</label> 
                        <input type = 'text' placeholder='voucher code' onBlur={(event)=>{
                            const voucherInfo = getVoucherInfo(event.target.value)
                            if(voucherInfo?.msg){
                                event.target.value = voucherInfo.msg;
                            } else {
                                voucherInfo.amount?setDiscount(voucherInfo.amount) : setDiscount((voucherInfo.rate / 100) * total)
                            }
                        }
                            
                        }/>
                    </div>

                    <div>
                        <h1>Patasente</h1>
                        <select onChange={(event) => setPatasenteOption(Number(event.target.value))}>
                            <option>-Select-</option>
                            <option value="1">MTN</option>
                            <option value="2">Airtel</option>
                        </select>
                        {patasenteOption === 1 ?
                            <>
                                <p>
                                    <input onChange={event => setPatasentePhone(event.target.value)} placeholder="Phone Number" />
                                </p>
                                <button onClick={async () => {
                                    try {
                                        const data = {
                                            phone: patasentePhone,
                                            mobile_company_id: 1,
                                            username: 'davidwampamba@gmail.com'
                                        };
                                        // const URL = `${process.env.REACT_APP_PATASENTE_URL}\\${process.env.REACT_APP_PATASENTE_API_KEY}\\${process.env.REACT_APP_PATASENTE_GATEWAY_KEY}`

                                        fetch('/patasente', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify(data),
                                        })
                                        .then(response => response.json())
                                        .then(data => {
                                            if (data.result =='success'){
                                                setMTNSecretCode(true)
                                                console.log('Success:', data);
                                            }else{
                                                console.log( data);
                                            }
                                            
                                            
                                        })
                                        .catch((error) => {
                                            console.error('Error:', error);
                                        });

                                            /*  const RESULTS = await fetch(URL,
                                            {
                                                method: 'POST',
                                                headers: {
                                                    'Access-Control-Allow-Origin': '*',
                                                    'Content-Type': 'application/json',
                                                    'Accept':'application/json',
                                                    'mode':'no-cors'
                                                },
                                                body: JSON.stringify(data)
                                            })
                                        console.log( RESULTS.data )
                                        if (RESULTS.data.status === 'success') {
                                            setMTNSecretCode(RESULTS.data.token)
                                        }*/
                                    } 
                                    catch (error) {
                                        console.log(error)
                                    }
                              }}> Request Token</button>
                                {
                                    mtnSecretCode && <>
                                        <input placeholder="Secret code" />
                                        <button submit>Pay</button>
                                    </>
                                }
                            </>
                            :
                            <>
                                <p>
                                    <input placeholder="Phone number" />
                                </p>
                                <p>
                                    <input placeholder="Secret code..." />
                                </p>
                                <button type="submit">Pay</button>
                            </>
                            }
                    </div>
                    <label>MoMo/mobile Money<input type = 'radio' value ='momo'  /></label>
                    <label>Airtel<input type = 'radio' value ='airtel'  /></label>
                </fieldset>
                <button type='submit' onClick={handlePayment}>Pay Now</button>
            </form>

        </div>
    )
}

export default Checkout
