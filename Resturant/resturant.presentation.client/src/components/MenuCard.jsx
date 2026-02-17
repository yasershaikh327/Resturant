import "../styles/main.css";

export default function MenuCard({ item }) {
    return (
        <div className="card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <div className="card-bottom">
                <span>₹{item.price}</span>
                <button>Add</button>
            </div>
        </div>
    );
}
