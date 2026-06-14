# Project Component Structure

## Directory Layout
```
src/
├── pages/
│   ├── Card.jsx              ← Reusable Card Component
│   ├── Home.jsx              ← Home page using Card component
│   ├── Details.jsx           ← Product details page
│   ├── Counter.jsx           ← Counter page
│   └── Navbar.jsx            ← Navigation bar
├── contexts/
│   └── productContext.jsx    ← Product data context
├── App.js                     ← Main App component
├── App.css                    ← App-level styles
├── index.css                  ← Global styles with Tailwind
└── index.js                   ← React entry point
```

## Component Hierarchy
```
App
├── Navbar
│   └── Links (Home, Counter)
└── Routes
    ├── Home (/)
    │   └── Card × N (Grid Layout)
    ├── Details (/details/:id)
    ├── Counter (/counter)
```

## Reusable Card Component

### Card Component (`src/pages/Card.jsx`)
```
Card
├── Product Image (with hover zoom)
├── Category Badge (optional)
├── Title (line clamped)
├── Description (line clamped)
├── Price & Rating Container
│   ├── Price Display
│   └── Rating Stars (optional)
└── Action Button
    ├── Default: Navigation Link to Details
    └── Optional: Custom Click Handler
```

### Props Flow
```
Home Component
    ↓
    ├── Fetches products from ProductContext
    ├── Maps over products array
    └── Passes each product as props to Card
         ├── id → for navigation
         ├── image → product image
         ├── title → product name
         ├── description → product details
         ├── price → product cost
         ├── rating → user ratings
         ├── category → product category
         └── variant → display style
```

## Data Flow

### Product Data Flow
```
API (fakestoreapi.com)
    ↓
ProductContext Provider
    ├── Stores products state
    ├── Handles loading state
    └── Handles error state
    ↓
useProducts() Hook
    ↓
Home Component
    ↓
Card Component (Rendered N times)
```

### Navigation Flow
```
Card Component (Default Behavior)
    ↓
Link to /details/:id
    ↓
Details Component
    ↓
Fetch product by ID
    ↓
Display full product details
```

### Custom Handler Flow
```
Card Component (with onButtonClick)
    ↓
Button Click Event
    ↓
Custom Handler Function
    ├── Add to Cart
    ├── Add to Wishlist
    ├── Show Notification
    └── Update State
```

## Component Features Matrix

| Component | Responsive | Reusable | Variants | Custom Props | State |
|-----------|-----------|----------|----------|--------------|-------|
| Card | ✅ | ✅✅✅ | 3 | Many | ❌ |
| Home | ✅ | ❌ | 1 | Few | Reads context |
| Details | ✅ | ❌ | 1 | None | Reads context |
| Counter | ✅ | ❌ | 1 | None | useReducer |
| Navbar | ✅ | ❌ | 1 | None | useState |

## State Management

### Global State (Context)
- **ProductContext**: All product data
  - `products[]` - Array of products
  - `loading` - Loading state
  - `error` - Error message

### Local State (Hooks)
- **Navbar**: Mobile menu toggle
  - `isOpen` - Mobile menu visibility

- **Counter**: Counter value
  - `count` - Current counter value (useReducer)

## Styling Strategy

### Tailwind CSS Approach
- **Base**: `src/index.css` - Global Tailwind directives
- **Components**: Utility classes in JSX
- **Customization**: Inline className props
- **Variants**: Different class combinations

### Breakpoints Used
- `sm`: 640px (Tablet)
- `md`: 768px (Small Desktop)
- `lg`: 1024px (Desktop)
- `xl`: 1280px (Large Desktop)

## Card Component Variants

### Default
```
Image (h-48)
Title
Description
Price + Rating
Button
```

### Compact
```
Image (h-32) — Smaller
Title
Description
Price + Rating
Button
— Reduced padding
```

### Featured
```
Image (h-64) — Larger
Title
Description
Price + Rating
Button
— Blue ring border
— Enhanced shadow
```

## Rendering Patterns

### Map Pattern (Home.jsx)
```jsx
{products.map((product) => (
  <Card
    key={product.id}
    {...propsObject}
  />
))}
```

### Grid Layout Pattern
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Cards here */}
</div>
```

### Conditional Rendering Pattern
```jsx
{products.length > 0 ? (
  <Grid>{products}</Grid>
) : (
  <LoadingState />
)}
```

## Performance Optimizations

1. **Memoization Ready**: Card component is pure and can be memoized
   ```jsx
   export default memo(Card);
   ```

2. **Context Optimization**: useProducts only subscribes to products
   ```jsx
   const products = useProducts(); // Only re-renders on product change
   ```

3. **Event Handler Optimization**: Reducers instead of setState
   ```jsx
   const [count, dispatch] = useReducer(reducer, 0); // Optimized for multiple actions
   ```

4. **Image Optimization**: Lazy loading ready
   ```jsx
   <img loading="lazy" src={image} alt={title} />
   ```

## Accessibility Features

- ✅ Semantic HTML (`<nav>`, `<main>`, `<img>`)
- ✅ Alt text for images
- ✅ ARIA labels for buttons
- ✅ Proper heading hierarchy (h1 → h3)
- ✅ Color contrast meets WCAG AA
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## Extensibility Points

### Easy to Add
1. **Search/Filter**: Add to Home component
   ```jsx
   const [filter, setFilter] = useState('');
   const filtered = products.filter(p => p.title.includes(filter));
   ```

2. **Favorites/Wishlist**: Add callback to Card
   ```jsx
   onButtonClick={() => addToWishlist(product.id)}
   ```

3. **Compare Products**: Multiple cards with different handlers
4. **Quick View Modal**: onButtonClick opens modal instead of navigating
5. **Reviews Section**: Add to Details component
6. **Related Products**: Show similar items on Details page

## Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product search
- [ ] Add product filters (price, category, rating)
- [ ] Wishlist feature
- [ ] Product reviews and comments
- [ ] User authentication
- [ ] Payment integration
- [ ] Order history
- [ ] Product recommendations
- [ ] Image gallery with zoom

---

**Component Design Principles:**
1. ✅ Single Responsibility - Each component has one job
2. ✅ Reusability - Card works across the entire app
3. ✅ Maintainability - Clear structure and documentation
4. ✅ Scalability - Easy to extend with new features
5. ✅ Performance - Optimized rendering and state management
6. ✅ Accessibility - Inclusive design for all users
