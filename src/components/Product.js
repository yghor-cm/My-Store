import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleProductClick = (product) => { 
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="products-container">
      {loading && <h1>Carregando...</h1>}
      {data.map((product) => (
        <div key={product.id} className="card" onClick={() => handleProductClick(product)}>
          <div>
            <img src={product.image} alt="#" className="product-image" />
          </div>
          <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Preço: ${product.price}`}</h6>
            <h6>{`Descrição: ${product.description}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
