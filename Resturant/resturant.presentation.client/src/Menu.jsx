import MenuCard from "../components/MenuCard";
import menuData from "../data/menuData";

export default function Menu() {
    const addToCart = (item) => {
        console.log("Added:", item);
    };

    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuData.map((item) => (
                <MenuCard key={item.id} item={item} addToCart={addToCart} />
            ))}
        </div>
    );
}
