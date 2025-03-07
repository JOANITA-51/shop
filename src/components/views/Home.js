import { useCart } from '../contexts/Cart'
import {useAuth} from '../contexts/Auth'
import {Link} from 'react-router-dom'

const Home = () => {
    const {currentUser} = useAuth()
    const {itemsInCart, setItemsInCart} = useCart()

    let formatter = new Intl.NumberFormat ('en-US', {
        style : 'currency',
        currency:'UGX',
    });

    const inventoryItems =[
        {
            _id:'we12',
            name: "Phone",
            category: "Samsung",
            price: 50000
        },
        {
            _id:'we13',
            name: "Blue shirt",
            category: "All",
            price: 35000
        },
        {
            _id:'we14',
            name: "Black Shoes",
            category: "Men",
            price: 5000  
        },
        {
            _id:'we15',
            name: "red dress",
            category: "Women",
            price: 15000  
        }
    ]

    // const addItemToCart = ItemID =>{
    //     setItemsInCart([...itemsIncart, inventoryItems[ItemNumber]])
    // }
    //to prevent duplicates
    const addItemToCart = itemID =>{
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
        let [selectItem] = inventoryItems.filter(theInventoryItem => theInventoryItem._id===itemID)
        selectItem['qty'] = 1
        selectItem['subTotal'] = selectItem['price']
        setItemsInCart([...filteredCartItems, selectItem])
    }

    const isItemInCart = (itemID) => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id === itemID)
        return (filteredCartItems?.length>0) ? true: false
    }
  
    return (
        <div>
            <div className = "header">
               <h1>
                   <link to ></link>ONLINE SHOPPING </h1>
               <div>
                   <h3>
                   <Link to = "/cart"> BASKET  <button>{itemsInCart?.length}</button> </Link>
                   </h3>
                   

                   
               </div>
            </div>
           

            <ul className = "item-list">
                {
                    inventoryItems.map((inventoryItem, index) =>{
                        return(
                            <li key = {index.toString()} className= "item">
                                
                                <div>
                                {inventoryItem.name}
                                </div >
                                 
                                <div>
                                {inventoryItem.category}
                                </div>
                                 
                                <div>
                                {inventoryItem.price}
                                </div>

                                <div className= "cta" >
                                    <button><span>Wishlist</span></button>
                                    <button><span>Rate</span></button>
                                    {isItemInCart (inventoryItem._id)? <Link to = "/cart">View Cart</Link>:
                                     <button onClick = {()=>addItemToCart(inventoryItem._id)} > <span>Cart</span></button>}
                                    <button><span>Buy Now</span></button>
                                </div>


                            </li>
                        )
                    })
                }
            </ul> <br/>
            {/* <button className='btn' style = {{backgroundColor:'green'}} onClick={onClick}>
                Add <br/>
                +
            </button>
            <button className='btn' style = {{backgroundColor:'red'}} onClick={onClick}>
                Remove<br/>
                -
            </button> */}

        </div>

    )
}

export default Home
