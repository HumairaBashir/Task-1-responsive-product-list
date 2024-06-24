import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #000;
`;

const ProductCard = ({ product }) => (
  <Card>
    <ProductImage src={product.image} alt={product.name} />
    <ProductName>{product.name}</ProductName>
    <ProductDescription>{product.description}</ProductDescription>
    <ProductPrice>${product.price}</ProductPrice>
  </Card>
);

export default ProductCard;
