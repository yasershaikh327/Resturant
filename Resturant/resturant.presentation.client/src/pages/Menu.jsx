import MenuCard from "../components/MenuCard";
import menuData from "../data/menuData";
import "../styles/main.css";

export default function Menu() {
    return (
        <div className="menu-container">
            {menuData.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
        </div>
    );
}
