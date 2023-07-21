import "./Card.css";

export default function Card({
    text = "Card",
    onClick,
    backgroundColor = "white",
}) {
    return (
        <div
            className="card-wrapper"
            data-testid="card"
            style={{ backgroundColor }}
        >
            <p>{text}</p>
            <p>{backgroundColor}</p>
            <button onClick={onClick}>Click</button>
        </div>
    );
}
