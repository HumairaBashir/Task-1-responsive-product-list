import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ProductList = ({ products }) => (
  <Grid>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Grid>
);

export default ProductList;
