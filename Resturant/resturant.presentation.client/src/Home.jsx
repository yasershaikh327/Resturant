import RecommendationSection from "../components/RecommendationSection";

export default function Home() {
    return (
        <div className="p-10">
            <div className="bg-black text-white p-20 rounded-3xl text-center">
                <h1 className="text-5xl font-bold text-yellow-400">
                    Order Smart. Eat Smart.
                </h1>
                <p className="mt-4 text-lg">
                    AI powered restaurant recommendations just for you.
                </p>
            </div>

            <RecommendationSection />
        </div>
    );
}
