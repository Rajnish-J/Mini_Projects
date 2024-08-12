import './Header.css'

function Header(){

    return(
        <>
            <div class = 'h_outer'>
            
            <div class = 'h_div1'>
                <div class = 'closet'>
                    <p>laura's closet</p>
                </div>
                
                <div class = 'search'>
                    <input type="text" name="" id="" placeholder='Search for an item'/>
                </div>
                
                <div class = 'h_list'>
                    <ul>
                        <button>Store</button>
                        <button>Account</button>
                        <button>Wishlist</button>
                        <button>Basket</button>
                    </ul>
                </div>
            </div>
            
            <div class = 'h_div2'>

                <button>new Arrivals</button>
                
                <button>#Fresh</button>
                
                <button>Dress</button>
                
                <button>Tops</button>
                
                <button>jackets</button>
                
                <button>Lingerie & Lounge Wear</button>
                
                <button>Beach wear</button>
                
                <button>Blouse</button>
                
                <button>Denim</button>
                
                <button>Vintage</button>
                
                <button>Shoes</button>
                
                <button>Sandals</button>
                
                <button>Bags</button>
                
                <button>Jewleries</button>
            </div>
        </div>
        </>
    )
}

export default Header;