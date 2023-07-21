import "./ProductDisplay.css";

export default function ProductDisplay({ product, onAddToCart }) {
    const {  brand, title, price, images } = product;
    const firstImage = images[0]

    return (
        <div className="product-display-wrapper">
            <div className="product-display-container">
                <img className="product-display-image"
                 src={firstImage} alt={title} />
            </div>
            <p> {brand} </p>
            <p> {title} </p>
            <p> R$ {price},00 </p>
            <button onClick={() => onAddToCart(product)} >Adicionar ao carrinho</button>
        </div>
    );
}
