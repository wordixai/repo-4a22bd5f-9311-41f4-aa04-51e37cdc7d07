import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import PopButton from './PopButton';
import PopCard from './PopCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <PopCard 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay with dots pattern */}
        <div className="absolute inset-0 dots-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-pop-green text-white px-3 py-1 border-2 border-black rounded-lg font-handwritten font-semibold shadow-[3px_3px_0px_black]">
              NEW!
            </span>
          )}
          {product.isSale && (
            <span className="bg-pop-red text-white px-3 py-1 border-2 border-black rounded-lg font-handwritten font-semibold shadow-[3px_3px_0px_black]">
              SALE!
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 border-3 border-black rounded-lg shadow-[3px_3px_0px_black] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] ${
              isLiked ? 'bg-pop-pink text-white' : 'bg-white text-black'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        {/* Quick add button - appears on hover */}
        <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <PopButton variant="orange" className="w-full">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </PopButton>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 bg-white">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-pop-yellow fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="font-handwritten text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>
        
        {/* Product name */}
        <h3 className="font-pop font-semibold text-lg text-black mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-handwritten font-bold text-2xl text-pop-orange">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-handwritten text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        {/* Add to cart button */}
        <PopButton variant="pink" className="w-full">
          Add to Cart
        </PopButton>
      </div>
    </PopCard>
  );
};

export default ProductCard;