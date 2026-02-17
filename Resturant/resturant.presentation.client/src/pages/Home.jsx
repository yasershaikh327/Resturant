import "../styles/main.css";
import $ from "jquery"; 
import apiConfig from "../config/apiConfig";
import API from "../config/apiConfig";

function Test(message) {
    // Example usage: just log for now
    console.log("Test called with:", message);

    // Example AJAX call using jQuery
    $.ajax({
        url:  API.POST,
        method: "POST",
        data: { value: message },
        success: (res) => console.log("Response:", res),
        error: (err) => console.error(err)
    });
}
export default function Home() {
    const handleClick = () => {
        Test("Hello from Home!");
    };

    return (
        <>
            <div className="hero">
                <h1>Order Smart. Eat Smart.</h1>
                <p>AI powered restaurant recommendations just for you.</p>
                <button onClick={handleClick}>Run Test</button>
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
