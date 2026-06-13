import { useProducts } from "../contexts/productContext";
import { Link } from "react-router-dom";

export default function Home() {
  const products = useProducts();

  if (!products.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600">Browse our collection of quality products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/details/${product.id}`} key={product.id}>
            <div className="group h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              {/* Image Container */}
              <div className="relative bg-gray-100 h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-4 flex flex-col">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600">
                  {product.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 mb-4 flex-1">
                  {product.description}
                </p>

                {/* Price and Rating */}
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">${product.price}</span>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      ⭐ {product.rating?.rate || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="m-4 w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
