import React from 'react'

const Home = ({onClick}) => {
    const invetoryItems =[
        {
            name: "Phone",
            category: "Samsung",
            price: 50000
        },
        {
            name: "Blue shirt",
            category: "All",
            price: 35000
        },
        {
            name: "Black Shoes",
            category: "Men",
            price: 5000  
        },
        {
            name: "red dress",
            category: "Women",
            price: 15000  
        }
    ]

    return (
        <div>
            <h1>ONLINE SHOPPING </h1>

            <ul>
                {
                    invetoryItems.map((invetoryItem, index) =>{
                        return(
                            <li key = {index.toString()}>
                                {invetoryItem.name}
                                <div>
                                    
                                </div>
                                 {invetoryItem.category}
                                <div>
                                    
                                </div>
                                 {invetoryItem.price}
                                <div>
                                   
                                </div>
                            </li>
                        )
                    })
                }
            </ul> <br/>
            <button className='btn' style = {{backgroundColor:'green'}} onClick={onClick}>
                Add <br/>
                +
            </button>
            <button className='btn' style = {{backgroundColor:'red'}} onClick={onClick}>
                Remove<br/>
                -
            </button>

        </div>

    )
}

export default Home
