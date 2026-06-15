import { Link } from 'react-router-dom';

export default function Card({
  id,
  image,
  title,
  description,
  price,
  rating,
  category,
  buttonText = 'View Details',
  onButtonClick,
  showRating = true,
  variant = 'default',
  className = '',
}) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }

  };

  // Base card styles
  const baseStyles = 'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full';

  // Variant-specific styles
  const variantStyles = {
    default: 'p-0',
    compact: 'p-2',
    featured: 'p-0 ring-2 ring-blue-500 shadow-xl',
  };

  // Image height based on variant
  const imageHeights = {
    default: 'h-48',
    compact: 'h-32',
    featured: 'h-64',
  };

  const imageHeight = imageHeights[variant] || imageHeights.default;

  return (
    <div className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {/* Product Image */}
      <div className={`${imageHeight} bg-gray-100 flex items-center justify-center overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="h-full w-auto object-contain p-2 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Badge */}
        {category && (
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold capitalize">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        {/* Price & Rating Container */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          {/* Price */}
          <span className="text-lg font-bold text-blue-600">
            ${price.toFixed(2)}
          </span>

          {/* Rating */}
          {showRating && rating && (
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-sm text-gray-700 font-medium">
                {rating.rate}
              </span>
              <span className="text-xs text-gray-500">
                ({rating.count})
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        {onButtonClick ? (
          <button
            onClick={handleButtonClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {buttonText}
          </button>
        ) : (
          <Link
            to={`/details/${id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
