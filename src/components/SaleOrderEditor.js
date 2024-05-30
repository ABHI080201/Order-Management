import React, { useState, useEffect } from 'react';
import { FormControl, Input, Select, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const SaleOrderEditor = ({ isOpen, onClose, onSubmit, order }) => {
  const [editedOrder, setEditedOrder] = useState(order);

  useEffect(() => {
    setEditedOrder(order);
  }, [order]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder({ ...editedOrder, [name]: value });
  };

  const handleSave = () => {
    onSubmit(editedOrder);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <Input readOnly name="id" value={editedOrder.id} />
          </FormControl>
          <FormControl mb={4}>
            <Input name="customer_id" value={editedOrder.customer_id} onChange={handleInputChange} />
          </FormControl>
          <FormControl mb={4}>
            <Input name="invoice_no" value={editedOrder.invoice_no} onChange={handleInputChange} />
          </FormControl>
          <FormControl mb={4}>
            <Input type="date" name="invoice_date" value={editedOrder.invoice_date} onChange={handleInputChange} />
          </FormControl>
          <FormControl mb={4}>
            <Select name="paid" value={editedOrder.paid} onChange={handleInputChange}>
              <option value="true">True</option>
              <option value="false">False</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave}>Save</Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderEditor;
