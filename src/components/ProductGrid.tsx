import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Pop Art Explosion T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Comic Boom Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: "Retro Pop Art Poster",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 203,
    isNew: false,
    isSale: true
  },
  {
    id: 4,
    name: "Street Art Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isSale: false
  },
  {
    id: 5,
    name: "Pop Culture Backpack",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 78,
    isNew: false,
    isSale: true
  },
  {
    id: 6,
    name: "Comic Book Cap",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 92,
    isNew: true,
    isSale: false
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dots-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="font-pop font-bold text-5xl lg:text-6xl text-black relative">
              TRENDING
              <span className="text-pop-orange"> NOW!</span>
              {/* Comic book style speech bubble */}
              <div className="absolute -top-4 -right-8 bg-pop-yellow border-3 border-black rounded-lg p-2 shadow-[4px_4px_0px_black] transform rotate-12">
                <span className="font-handwritten text-sm font-semibold">HOT!</span>
              </div>
            </h2>
          </div>
          <p className="font-handwritten text-2xl text-gray-600 max-w-2xl mx-auto">
            Check out our most popular items that are making waves in the pop art community! 🔥
          </p>
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-16">
          <button className="btn-pop-pink px-8 py-4 text-xl">
            🎨 VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;