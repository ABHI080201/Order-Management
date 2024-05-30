// SkuCard.js
import React from 'react';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

const SkuCard = ({ sku }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
      <Box fontWeight="bold" mb="2">
        SKU {sku.id} ({sku.amount} {sku.unit})
      </Box>
      <FormControl mb="4">
        <FormLabel>Selling Rate</FormLabel>
        <Input value={sku.selling_price} readOnly />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Total Items</FormLabel>
        <Input defaultValue="100" />
      </FormControl>
      <Box>
        Net SKU Price: ₹{sku.selling_price * 100}
      </Box>
    </Box>
  );
};

export default SkuCard;
