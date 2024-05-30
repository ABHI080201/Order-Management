// src/components/SearchBox.js
import React, { useState } from 'react';
import { Box, Input, List, ListItem } from '@chakra-ui/react';

const products = [
  'Product 5',
  'Stocked Product I',
  'Benoit Saint Denis',
  'Anonymous Product',
  'Stocked Tea I',
  'Stocked Tea II',
  // Add more products as needed
];

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);

    if (value) {
      const filtered = products.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <Box width="100%" position="relative">
      <Input
        placeholder="Search Products"
        value={query}
        onChange={handleChange}
      />
      {filteredProducts.length > 0 && (
        <List
          position="absolute"
          zIndex={1}
          width="100%"
          border="1px solid #ccc"
          borderRadius="md"
          bg="white"
          mt={1}
        >
          {filteredProducts.map((product, index) => (
            <ListItem key={index} padding="8px" cursor="pointer">
              {product}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBox;
