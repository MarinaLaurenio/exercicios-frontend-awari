import { useCallback, useMemo } from "react";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import "./SimpleDisplay.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

export default function SimpleDisplay({ products }) {
    //const context = useContext(AppContext)

    const dispatch = useDispatch();

    const handleAddToCart = useCallback(
        (product) => {
            console.log(product);
            //context.addToCart(product)
            dispatch(cartActions.add(product));
        },
        [dispatch]
    );

    const productsMap = useMemo(
        () =>
            products.map((product) => {
                return (
                    <ProductDisplay
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                );
            }),
        [products, handleAddToCart]
    );

    return <section className="simple-display-wrapper">{productsMap}</section>;
}

/*Desestruração: pegar a propriedade e colocar diretamente no parametro, ao invés de colocar props.products;
o map serviu para fazer um laço de repetição, retornando todos os produtos;



*/
