import { Box, Text, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderList = ({ status, orders, setOrders }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  const handleFormSubmit = (updatedOrder) => {
    // Implement API call for updating order here
    // Assume we have a function updateOrderAPI
    // updateOrderAPI(updatedOrder).then(() => refetchOrders());
    // Mock update logic:
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
    onClose();
  };

  return (
    <Box>
      {orders.filter(order => order.status === status).map(order => (
        <Box key={order.id} borderWidth="1px" borderRadius="lg" p="4" mb="2">
          <Text>Customer ID: {order.customer_id}</Text>
          <Text>Invoice No: {order.invoice_no}</Text>
          <Text>Invoice Date: {order.invoice_date}</Text>
          <Text>Paid: {order.paid.toString()}</Text>
          <Button onClick={() => handleEdit(order)}>Edit</Button>
        </Box>
      ))}
      {selectedOrder && (
        <SaleOrderForm isOpen={isOpen} onClose={onClose} onSubmit={handleFormSubmit} initialData={selectedOrder} />
      )}
    </Box>
  );
};

export default SaleOrderList;


