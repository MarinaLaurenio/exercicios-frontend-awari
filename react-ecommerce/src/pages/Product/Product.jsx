import { useParams } from "react-router-dom";

export default function Product() {
    const parameters = useParams();
    return (
        <div>
            <h1>Product</h1>
            <h2>{parameters.id}</h2>
        </div>
    );
}
