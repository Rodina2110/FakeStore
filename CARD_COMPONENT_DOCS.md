# Card Component Documentation

## Overview
A highly reusable, flexible card component for displaying products or items throughout the application. Built with Tailwind CSS for responsive design and multiple variants.

## File Location
`src/pages/Card.jsx`

## Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Multiple variants (default, compact, featured)
- ✅ Optional rating display with review count
- ✅ Optional category badge
- ✅ Price formatting
- ✅ Image hover animation
- ✅ Custom button handlers or default navigation
- ✅ Line clamping for text overflow
- ✅ Flexible styling with className prop

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | string | ✅ Yes | - | Product ID for details link navigation |
| `image` | string | ✅ Yes | - | Product image URL |
| `title` | string | ✅ Yes | - | Product title |
| `description` | string | ✅ Yes | - | Product description |
| `price` | number | ✅ Yes | - | Product price (will be formatted to 2 decimals) |
| `rating` | object | ✅ Yes | - | Rating object with `rate` and `count` properties |
| `category` | string | ❌ No | undefined | Product category for badge display |
| `buttonText` | string | ❌ No | "View Details" | Custom button text |
| `onButtonClick` | function | ❌ No | undefined | Custom button click handler (if not provided, uses navigation) |
| `showRating` | boolean | ❌ No | true | Whether to display the rating section |
| `variant` | string | ❌ No | "default" | Card style: `'default'`, `'compact'`, or `'featured'` |
| `className` | string | ❌ No | "" | Additional Tailwind CSS classes |

## Usage Examples

### Basic Usage (Default)
```jsx
import Card from './pages/Card';

<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
/>
```

### With Category
```jsx
<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  category={product.category}
/>
```

### Compact Variant (Smaller cards)
```jsx
<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  variant="compact"
/>
```

### Featured Variant (Highlighted cards)
```jsx
<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  variant="featured"
/>
```

### Custom Button Text
```jsx
<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  buttonText="Add to Cart"
/>
```

### Custom Button Handler
```jsx
<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  buttonText="Add to Wishlist"
  onButtonClick={() => addToWishlist(product.id)}
/>
```

### Without Rating Display
```jsx
<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  showRating={false}
/>
```

### In a Grid (Like Home Page)
```jsx
import Card from './pages/Card';
import { useProducts } from "../contexts/productContext";

export default function ProductList() {
  const products = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          category={product.category}
        />
      ))}
    </div>
  );
}
```

## Variants Explained

### 1. Default Variant
Standard card styling for general product display.
```jsx
<Card {...props} variant="default" />
```
- Image height: 192px (h-48)
- Regular shadow and hover effect
- Best for: General product listing

### 2. Compact Variant
Smaller card variant for space-constrained layouts.
```jsx
<Card {...props} variant="compact" />
```
- Image height: 128px (h-32)
- Smaller padding
- Best for: Sidebars, carousels, or dense grids

### 3. Featured Variant
Highlighted card with blue ring and enhanced shadow.
```jsx
<Card {...props} variant="featured" />
```
- Image height: 256px (h-64)
- Blue ring border
- Enhanced shadow
- Best for: Featured/spotlight products

## Styling

The component uses Tailwind CSS utilities for all styling:
- **Responsive images**: Automatic scaling to fit container
- **Hover animations**: Image zoom and shadow enhancement
- **Text truncation**: Line clamping prevents overflow
- **Accessibility**: Semantic HTML and proper contrast ratios

## Default Rendering Behavior

### Navigation (Default)
If no `onButtonClick` is provided, the card button navigates to:
```
/details/{id}
```

### Custom Handler
If `onButtonClick` is provided, clicking the button calls that function instead of navigating.

## Customization

### Add Custom Classes
```jsx
<Card
  {...props}
  className="border-2 border-purple-300"
/>
```

### Combine Variants with Custom Classes
```jsx
<Card
  {...props}
  variant="featured"
  className="scale-105"
/>
```

## Examples in Project

### Home Page
The Home page uses the Card component in a responsive grid:
```jsx
// src/pages/Home.jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {products.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      rating={product.rating}
      category={product.category}
      variant="default"
    />
  ))}
</div>
```

## Tips & Best Practices

1. **Always provide `key` prop** when rendering in a loop
2. **Use `variant="featured"`** for sale items or new products
3. **Use `variant="compact"`** in sidebars or limited space
4. **Custom handlers** are great for e-commerce actions (add to cart, wishlist)
5. **Provide category** for better UX and filtering options
6. **Test responsive** layouts on different screen sizes

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Accessibility
- Semantic HTML structure
- Proper image alt text support
- Keyboard navigable links/buttons
- Good color contrast ratios
- ARIA labels for screen readers

---

**Created with ❤️ using React + Tailwind CSS**
