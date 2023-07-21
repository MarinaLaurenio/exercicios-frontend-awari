import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SimpleDisplay from "../../components/SimpleDisplay";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

export default function Home() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem("cart");
        if (localData) {
            const parsed = JSON.parse(localData);
            dispatch(cartActions.init(parsed));
        }
    }, [dispatch]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=5")
            .then((response) => response.json())
            .then((data) => {
                const { products } = data;
                console.log(products);
                setProducts(products);
            });
    }, []);

    /*
    const products = [
        {
            title: "Produto 1",
            price: 100,
            image: "https://d2j6dbq0eux0bg.cloudfront.net/images/79993751/3464669962.jpg"
        },
        {
            title: "Produto 2",
            price: 100,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIyud2ZDhHkj38uO19ZrmtPjJH5QSQOxjv872N2q3hqUifmDsycplDKQhLN-LwpzZGY8y6q62VWYpGsrbiEpVkDrN0zHsy0lZjkzYav6j2L1-hoaLCSd7YjA&usqp=CAE"
        },
        {
            title: "Produto 3",
            price: 100,
            image: "https://media.thebodyshop.com/i/thebodyshop/04-2022-Q1-WELLNESS-SLEEP-BETTER-2-MOBILE?fmt=auto"
        },
]*/
    return (
        <div>
            <Header />
            <div className="container">
                <SimpleDisplay products={products} />
            </div>
        </div>
    );
}
/*
colocando o limit, pode limitar a quantidade de objetos buscados na requisição
   ("https://dummyjson.com/products?limit=10")

*/
