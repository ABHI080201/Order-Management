// ProductDropdown.js
import React, { useState } from 'react';
import { Box, Select, VStack, Text, Button, Collapse, HStack } from '@chakra-ui/react'; // Ensure HStack is imported
import SkuCard from './SkuCard';

const ProductDropdown = ({ selectedProducts, products, onSelectProduct, skus }) => {
  const [isOpen, setIsOpen] = useState({});

  const toggleCollapse = (productId) => {
    setIsOpen(prevState => ({ ...prevState, [productId]: !prevState[productId] }));
  };

  return (
    <VStack spacing="4" width="100%">
      {selectedProducts.map(productId => {
        const product = products.find(p => p.value === productId);

        if (!product) {
          console.error(`Product with ID ${productId} not found in product options`);
          return (
            <Box key={productId} width="100%">
              <Text color="red.500">Error: Product not found</Text>
            </Box>
          );
        }

        const productSkus = skus.filter(sku => sku.product === productId);

        return (
          <Box key={productId} width="100%">
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">{product.label}</Text>
              <Button size="sm" onClick={() => toggleCollapse(productId)}>
                {isOpen[productId] ? 'Minimize' : 'Expand'}
              </Button>
            </HStack>
            <Collapse in={isOpen[productId]} animateOpacity>
              <Box mt="4">
                <Select placeholder="Select SKU" onChange={e => onSelectProduct(productId, e.target.value)}>
                  {productSkus.map(sku => (
                    <option key={sku.id} value={sku.id}>
                      SKU {sku.id}
                    </option>
                  ))}
                </Select>
                <VStack spacing="2" mt="4">
                  {productSkus.map(sku => (
                    <SkuCard key={sku.id} sku={sku} />
                  ))}
                </VStack>
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </VStack>
  );
};

export default ProductDropdown;
