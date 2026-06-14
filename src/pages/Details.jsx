import { useParams, Link } from "react-router-dom";
import { useProducts } from "../contexts/productContext";

export default function Details() {
    const { id } = useParams();
    const { products } = useProducts(); // safer common pattern

    const productId = Number(id);

    const product = Array.isArray(products)
        ? products.find((p) => Number(p.id) === productId)
        : null;

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Product Not Found
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Sorry, we couldn't find the product you're looking for.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const ratingRate = product.rating?.rate ?? 0;
    const ratingCount = product.rating?.count ?? 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition"
                >
                    ← Back to Products
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">

                        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-96 w-auto object-contain"
                            />
                        </div>

                        <div className="flex flex-col justify-between">

                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                {product.category}
                            </span>

                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                {product.title}
                            </h1>

                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-2xl ${
                                                i < Math.round(ratingRate)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                <span className="text-lg font-semibold text-gray-700">
                                    {ratingRate} ({ratingCount} reviews)
                                </span>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {product.description}
                            </p>

                            <div className="mb-8">
                                <span className="text-5xl font-bold text-blue-600">
                                    ${Number(product.price || 0).toFixed(2)}
                                </span>
                                <span className="text-gray-500 text-lg ml-2">USD</span>
                            </div>

                            <div className="flex gap-4 mb-6">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                                    Add to Cart
                                </button>
                                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg">
                                    Save for Later
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-green-600 font-semibold">
                                ✔ In Stock
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}