import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from '@chakra-ui/react';

const CustomerTable = ({ customers }) => {
  return (
    <Box>
      <Text fontSize="xl" mb="4">Customers</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Pincode</Th>
            <Th>Location</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.customer_profile.name}</Td>
              <Td>{customer.customer_profile.email}</Td>
              <Td>{customer.customer_profile.pincode}</Td>
              <Td>{customer.customer_profile.location_name}</Td>
              <Td>{customer.customer_profile.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerTable;
