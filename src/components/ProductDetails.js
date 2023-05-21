import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <h1>Carregando...</h1>;
  }
  const { rate, count } = product.rating;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt="#" className="product-image" />
      <p>{`Item: ${product.title}`}</p>
      <p>{`Categoria: ${product.category}`}</p>
      <p>{`Preço: ${product.price}`}</p>
      <p>{`Descrição: ${product.description}`}</p>
      <p>{`Avaliações: ${rate} (${count} avaliações)`}</p>
    </div>
  );
};

export default ProductDetails;
