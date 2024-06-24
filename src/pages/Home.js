import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    description: "This is product 1 description",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    description: "This is product 2 description",
    price: 39.99,
  },
  // Add more products as needed
];

const Container = styled.div`
  padding: 0 2rem;
`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Container>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductList products={filteredProducts} />
      </Container>
    </div>
  );
};

export default Home;
