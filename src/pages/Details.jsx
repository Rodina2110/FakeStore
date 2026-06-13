import { useParams, Link } from "react-router-dom";
import { useProducts } from "../contexts/productContext";

export default function Details() {
  const { id } = useParams();
  const products = useProducts();
  const product = products.find((product) => product.id === +id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition">
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">⭐</span>
                <span className="text-lg font-semibold text-gray-700">
                  {product.rating?.rate || 'N/A'} / 5
                </span>
                <span className="text-gray-600">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Price Section */}
              <div className="border-t border-b border-gray-200 py-6 mb-8">
                <p className="text-gray-600 text-sm mb-2">Price</p>
                <p className="text-4xl font-bold text-blue-600">
                  ${product.price}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}