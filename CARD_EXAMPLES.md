# Card Component - Usage Examples

## Quick Reference

### 1. Basic Product Card (Most Common)
```jsx
<Card
  id={1}
  image="https://via.placeholder.com/300"
  title="Amazing Product"
  description="A great product with amazing features"
  price={29.99}
  rating={{ rate: 4.5, count: 128 }}
/>
```
**Output**: Standard product card with default styling, price, rating, and "View Details" button.

---

### 2. With Category Badge
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  category="Electronics"
/>
```
**Output**: Adds a blue category badge above the title.

---

### 3. Compact Version (Sidebar/Carousel)
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  variant="compact"
/>
```
**Output**: Smaller card with reduced height and padding, perfect for space-limited areas.

---

### 4. Featured Version (Sale/New Products)
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  variant="featured"
/>
```
**Output**: Larger card with blue ring border and enhanced shadow to highlight special products.

---

### 5. Custom Button Text
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  buttonText="Buy Now"
/>
```
**Output**: Changes button text from "View Details" to "Buy Now".

---

### 6. Add to Wishlist Button
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  buttonText="♥ Add to Wishlist"
  onButtonClick={() => addToWishlist(product.id)}
/>
```
**Output**: Custom button with heart icon that calls addToWishlist function instead of navigating.

---

### 7. Add to Cart Button
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  buttonText="🛒 Add to Cart"
  onButtonClick={() => {
    dispatch(addToCart(product));
    showNotification('Added to cart!');
  }}
/>
```
**Output**: Add to cart with cart emoji and custom handler with notification.

---

### 8. Without Rating Display
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  showRating={false}
/>
```
**Output**: Hides the star rating and review count section.

---

### 9. In a Responsive Grid (Like Home Page)
```jsx
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
```
**Output**: Responsive grid that adapts to screen size:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Large Desktop: 4 columns

---

### 10. Featured Products Carousel
```jsx
<div className="flex overflow-x-auto gap-4 pb-4">
  {featuredProducts.map((product) => (
    <div key={product.id} className="flex-shrink-0 w-64">
      <Card
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        rating={product.rating}
        variant="featured"
        buttonText="✨ Featured - Shop Now"
      />
    </div>
  ))}
</div>
```
**Output**: Horizontal carousel of featured products with large cards.

---

### 11. Product Variants Comparison
```jsx
// Default
<Card {...defaultProduct} variant="default" />

// Compact (sidebar)
<Card {...sidebarProduct} variant="compact" />

// Featured (sale item)
<Card {...saleProduct} variant="featured" />
```

---

### 12. With Custom Styling
```jsx
<Card
  id={1}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  className="border-2 border-purple-300 shadow-purple-200"
  variant="featured"
/>
```
**Output**: Featured card with custom purple border and shadow.

---

### 13. Search Results Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {searchResults.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      rating={product.rating}
      showRating={true}
    />
  ))}
</div>
```
**Output**: Grid layout for search results.

---

### 14. Category Filter with Multiple Variants
```jsx
{/* Category Header */}
<h2 className="text-2xl font-bold mb-6">Electronics</h2>

{/* Featured Item */}
<div className="mb-8">
  <h3 className="text-lg font-semibold mb-4">⭐ Featured</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card
      {...featuredProduct}
      variant="featured"
    />
  </div>
</div>

{/* Regular Items */}
<h3 className="text-lg font-semibold mb-4">Other Products</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {regularProducts.map((product) => (
    <Card key={product.id} {...product} />
  ))}
</div>
```
**Output**: Category page with featured product highlighted and regular products in grid.

---

### 15. Dynamic Button Handler with State
```jsx
const [wishlist, setWishlist] = useState([]);

const toggleWishlist = (productId) => {
  setWishlist(prev => 
    prev.includes(productId)
      ? prev.filter(id => id !== productId)
      : [...prev, productId]
  );
};

<Card
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  buttonText={wishlist.includes(product.id) ? "❤️ In Wishlist" : "🤍 Add to Wishlist"}
  onButtonClick={() => toggleWishlist(product.id)}
/>
```
**Output**: Card with wishlist toggle that changes button color/text based on state.

---

## Real-World Scenarios

### Scenario 1: E-commerce Product Listing
```jsx
// Products listed by category with featured items
function ProductCategory() {
  return (
    <div>
      <h2>Best Sellers</h2>
      <div className="grid gap-6 grid-cols-4">
        {bestSellers.map(p => <Card key={p.id} {...p} variant="featured" />)}
      </div>

      <h2 className="mt-8">All Products</h2>
      <div className="grid gap-6 grid-cols-4">
        {allProducts.map(p => <Card key={p.id} {...p} />)}
      </div>
    </div>
  );
}
```

### Scenario 2: Shopping Cart Integration
```jsx
<Card
  {...product}
  buttonText="Remove from Cart"
  onButtonClick={() => removeFromCart(product.id)}
  showRating={false}
/>
```

### Scenario 3: Wishlist Page
```jsx
<Card
  {...product}
  buttonText="Move to Cart"
  onButtonClick={() => {
    removeFromWishlist(product.id);
    addToCart(product);
  }}
/>
```

### Scenario 4: Admin/Store Manager Dashboard
```jsx
<Card
  {...product}
  buttonText="Edit"
  onButtonClick={() => navigate(`/admin/products/${product.id}/edit`)}
  category={product.category}
/>
```

---

## Props Combinations Cheat Sheet

| Use Case | Props |
|----------|-------|
| Basic listing | id, image, title, description, price, rating |
| With category | + category |
| Compact layout | + variant="compact" |
| Featured/Sale | + variant="featured" |
| Custom button | + buttonText, onButtonClick |
| Hide rating | + showRating={false} |
| Add to cart | + buttonText="Add to Cart", onButtonClick |
| Wishlist | + buttonText="Add to Wishlist", onButtonClick |
| Custom style | + className |

---

**Pro Tips:**
- 🎯 Always use `key` prop when mapping
- 📱 Test on mobile and desktop
- ♿ Ensure sufficient color contrast
- 🚀 Use variants for visual hierarchy
- 💡 Keep descriptions concise (auto-clamps at 3 lines)
- 📦 Reuse across the entire app!
