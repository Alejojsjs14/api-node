import React from 'react';
import './ProductCard.css'; // Puedes agregar estilos personalizados aquí

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.images.large} alt={product.name} />
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-brand">Marca: {product.brand}</p>
        <p className="product-category">Categoría: {product.category}</p>
        <p className="product-sku">SKU: {product.sku}</p>
        <p className="product-variant">Variante: {product.variant}</p>
        <p className="product-barcode">Código de Barras: {product.externalBarcode}</p>
        <p className="product-code">Código Interno: {product.internalCode}</p>
        <p className="product-status">
          {product.active ? "Disponible" : "No disponible"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;