import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function Home() {
    const [products, setProducts] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/products?' + searchParams)
            .then(res => res.json())
            .then(res => setProducts(res.products))
    }, [searchParams])

    return <Fragment >
        <div id="home">
            <h1 id="products_heading">Latest Products</h1>
            {products != null ? <section id="products" className="container mt-5">
                <div className="row">
                    {products.map(product => <ProductCard product={product} />)}
                </div>
            </section> : <Loading />}</div>

    </Fragment>
}