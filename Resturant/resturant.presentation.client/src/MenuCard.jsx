export default function MenuCard({ item, addToCart }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition">
            <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-lg">₹{item.price}</span>
                <button
                    onClick={() => addToCart(item)}
                    className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
                >
                    Add
                </button>
            </div>
        </div>
    );
}
