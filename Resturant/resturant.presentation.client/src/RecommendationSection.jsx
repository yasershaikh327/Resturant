export default function RecommendationSection() {
    return (
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-3">AI Recommendations</h2>
            <p className="text-gray-700">
                Based on your previous orders, you might like:
            </p>

            <div className="mt-4 flex space-x-4">
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-semibold">Paneer Butter Masala</h3>
                    <p className="text-sm text-gray-500">Perfect with Butter Naan</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-semibold">Chicken Tikka</h3>
                    <p className="text-sm text-gray-500">Spicy & Popular Choice</p>
                </div>
            </div>
        </div>
    );
}
