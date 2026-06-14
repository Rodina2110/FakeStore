# Card Component - Quick Start Guide

## 🎯 The Simplest Example

```jsx
import Card from './pages/Card';

<Card
  id={1}
  image="https://..."
  title="Product Name"
  description="Product description here"
  price={29.99}
  rating={{ rate: 4.5, count: 128 }}
/>
```

That's it! The card displays and clicking "View Details" navigates to the product page.

---

## 📦 What You Get

```
┌─────────────────────────┐
│   Product Image         │
├─────────────────────────┤
│ 📌 Category Badge       │
│                         │
│ Product Title           │
│                         │
│ Product description... │
│ (auto-truncated)        │
│                         │
│ $29.99  ⭐ 4.5 (128)   │
│                         │
│  [View Details Button]  │
└─────────────────────────┘
```

---

## 🚀 Common Use Cases

### Home Page (Like You Have Now)
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {products.map((product) => (
    <Card key={product.id} {...product} />
  ))}
</div>
```

### With Category
```jsx
<Card {...product} category="Electronics" />
```

### Add to Cart Button
```jsx
<Card
  {...product}
  buttonText="🛒 Add to Cart"
  onButtonClick={() => addToCart(product.id)}
/>
```

### Featured (Sale Items)
```jsx
<Card {...product} variant="featured" />
```

### Compact (Sidebars)
```jsx
<Card {...product} variant="compact" />
```

---

## 📋 All Props (Cheat Sheet)

```jsx
<Card
  // REQUIRED
  id={product.id}
  image={product.image}
  title={product.title}
  description={product.description}
  price={product.price}
  rating={product.rating}
  
  // OPTIONAL
  category="Electronics"           // Shows badge
  buttonText="Buy Now"            // Default: "View Details"
  onButtonClick={() => {...}}     // Custom action
  showRating={true}               // Default: true
  variant="default"               // Options: default|compact|featured
  className="border-2 border-red" // Extra styling
/>
```

---

## 🎨 Variants at a Glance

| Variant | Image Height | Use Case |
|---------|--------------|----------|
| `default` | Medium (h-48) | Normal product grid |
| `compact` | Small (h-32) | Sidebars, carousels |
| `featured` | Large (h-64) | Sales, new products |

---

## ✨ Real Examples

### Search Results Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {searchResults.map(p => (
    <Card key={p.id} {...p} />
  ))}
</div>
```

### Wishlist Page
```jsx
<Card
  {...product}
  buttonText="❤️ In Wishlist"
  onButtonClick={() => moveToCart(product.id)}
/>
```

### Admin Dashboard
```jsx
<Card
  {...product}
  buttonText="✏️ Edit"
  onButtonClick={() => editProduct(product.id)}
/>
```

### Category Sidebar
```jsx
<div className="space-y-3">
  {relatedProducts.map(p => (
    <Card key={p.id} {...p} variant="compact" />
  ))}
</div>
```

### Featured Carousel
```jsx
<div className="flex overflow-x-auto gap-4">
  {featured.map(p => (
    <div key={p.id} className="flex-shrink-0 w-80">
      <Card {...p} variant="featured" />
    </div>
  ))}
</div>
```

---

## 🔄 How It Works

### Navigation (Default)
```jsx
<Card {...product} />
// Clicking button → navigates to /details/{id}
```

### Custom Action
```jsx
<Card
  {...product}
  onButtonClick={() => dispatch(addToCart(product))}
/>
// Clicking button → calls your function
```

---

## 💡 Pro Tips

1. **Always use `key`** when mapping
   ```jsx
   {products.map(p => <Card key={p.id} {...p} />)}
   ```

2. **Use variants** for different sections
   ```jsx
   {/* Featured */}
   <Card {...p} variant="featured" />
   
   {/* Regular */}
   <Card {...p} variant="default" />
   
   {/* Sidebar */}
   <Card {...p} variant="compact" />
   ```

3. **Combine with custom action**
   ```jsx
   <Card {...p} buttonText="🛒 Add" onButtonClick={addCart} />
   ```

4. **Hide rating if not needed**
   ```jsx
   <Card {...p} showRating={false} />
   ```

---

## 📱 Responsive Behavior

The Card component automatically adapts:
- **Mobile**: Full width
- **Tablet**: 2 cards per row
- **Desktop**: 3-4 cards per row
- **Images**: Scale to fit container

---

## ❌ Common Mistakes (Avoid)

```jsx
// ❌ WRONG: Missing required props
<Card />

// ❌ WRONG: Forgot key in map
{products.map(p => <Card {...p} />)}

// ❌ WRONG: Price not a number
<Card price="29.99" />

// ❌ WRONG: Rating without structure
<Card rating={4.5} />

// ✅ RIGHT: All props provided
<Card
  key={p.id}
  {...p}
  rating={{ rate: 4.5, count: 128 }}
/>
```

---

## 🎯 Where to Use

✅ Product listing  
✅ Search results  
✅ Category pages  
✅ Related products  
✅ Wishlist  
✅ Recommendations  
✅ Best sellers  
✅ New arrivals  
✅ Admin dashboard  
✅ Anywhere products display!

---

## 📚 More Info

- **Full Docs**: See `CARD_COMPONENT_DOCS.md`
- **Examples**: See `CARD_EXAMPLES.md`
- **Architecture**: See `COMPONENT_STRUCTURE.md`

---

## 🚀 You're Ready!

The Card component is:
- ✅ Imported in Home
- ✅ Production-ready
- ✅ Fully documented
- ✅ Easy to customize

Start using it everywhere! 🎉
