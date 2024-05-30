import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from '@chakra-ui/react';

const ProductTable = ({ products }) => {
  return (
    <Box mt="8">
      <Text fontSize="xl" mb="4">Products</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Characteristics</Th>
            <Th>Brand</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.characteristics}</Td>
              <Td>{product.brand}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductTable;
