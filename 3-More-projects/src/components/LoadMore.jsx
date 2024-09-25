import { useEffect, useState } from "react"
import "./css/loadmore.css"
export default function LoadMore({url}){
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 20);
    }
    async function getProducts(){
        try {
            setLoading(true);
            const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count}&select=title,thumbnail`);
            const dataJson = await data.json();
            if(dataJson && dataJson.products && dataJson.products.length)
            {
                setLoading(false);
                setProducts(dataJson.products);
            }
        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        if(url != "") getProducts()
        console.log(products);
    }, [count])

    if(loading)
        return (<h1>The data is Loading!! Please Wait</h1>);
    return (
        <>
            <h1>Load More Functionality</h1>
            <div id="productContainer" className="products-container">
                {
                    products && products.length > 0 ? products.map((product) => (
                        <div className="product-container" key={product.id}>
                            <img src={product.thumbnail} alt={product.thumbnail} />
                            <p>{product.title}</p>
                        </div>
                    )): null
                }
            </div>
            {count >= 99?<h1>The List is complete</h1>:null}
            <button onClick={handleCount} disabled={count >= 99?true:false}>Click for more products</button>
        </>
    )
}