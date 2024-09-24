import PropTypes from 'prop-types'
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

// Validar las props usando PropTypes
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    variant: PropTypes.string,
    externalBarcode: PropTypes.string,
    internalCode: PropTypes.string,
    active: PropTypes.bool.isRequired,
    images: PropTypes.shape({
      large: PropTypes.string.isRequired,
      medium: PropTypes.string,
      small: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;