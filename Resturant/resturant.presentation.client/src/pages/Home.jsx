import "../styles/main.css";

export default function Home() {
    return (
        <>
            <div className="hero">
                <h1>Order Smart. Eat Smart.</h1>
                <p>AI powered restaurant recommendations just for you.</p>
            </div>

            <div className="recommendation">
                <h2>AI Recommendations</h2>
                <p>Based on your previous orders, you might like:</p>

                <div className="recommendation-items">
                    <div className="recommendation-card">
                        <h3>Paneer Butter Masala</h3>
                        <p>Perfect with Butter Naan</p>
                    </div>

                    <div className="recommendation-card">
                        <h3>Chicken Tikka</h3>
                        <p>Spicy & Popular Choice</p>
                    </div>
                </div>
            </div>
        </>
    );
}
