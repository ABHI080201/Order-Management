import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
} from '@chakra-ui/react';
import MultiSelectSearch from './MultiSelectSearch';
import ProductDropdown from './ProductDropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const skus = [
  {
    id: 248,
    selling_price: 54,
    max_retail_price: 44,
    amount: 33,
    unit: 'kg',
    quantity_in_inventory: 0,
    product: 'testing_2',
  },
  {
    id: 247,
    selling_price: 32,
    max_retail_price: 32,
    amount: 33,
    unit: 'kg',
    quantity_in_inventory: 0,
    product: 'testint_tomato_seed_1',
  },
  {
    id: 246,
    selling_price: 23,
    max_retail_price: 21,
    amount: 22,
    unit: 'kg',
    quantity_in_inventory: 1,
    product: 'some_fertilizer1',
  },
];

const SaleOrderForm = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});
  const [selectedProducts, setSelectedProducts] = useState(initialData.products || []);
  const [isPaid, setIsPaid] = useState(initialData.paid === 'true');

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setSelectedProducts(initialData.products || []);
      setIsPaid(initialData.paid === 'true');
    }
  }, [initialData]);

  const productOptions = [
    { value: 'testing_2', label: 'testing 2' },
    { value: 'testint_tomato_seed_1', label: 'testint tomato seed 1' },
    { value: 'some_fertilizer1', label: 'Some fertilizer1' },
    { value: 'test_product', label: 'test product' },
    { value: 'sadfg', label: 'sadfg' },
    { value: 'testing_delete', label: 'testing_delete' },
    { value: 'testing_12', label: 'Testing 12' },
    { value: 'name', label: 'name' },
    { value: 'hbzxihgbx', label: 'hbzxihgbx' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    const formattedDate = date instanceof Date ? date.toISOString().split('T')[0] : null;
    setFormData({ ...formData, invoice_date: formattedDate });
  };
  

  const handleSelectChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions);
  };

  const handleProductSelect = (productId, skuId) => {
    // Additional logic can be added here to handle the selected SKU
  };

  const handlePaidChange = (e) => {
    setIsPaid(e.target.checked);
  };

  const handleSubmit = () => {
    const dataToSubmit = {
      ...formData,
      products: selectedProducts,
      paid: isPaid ? 'true' : 'false',
    };
    onSubmit(dataToSubmit);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sale Order Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4">
            <HStack width="100%" spacing="4">
              <FormControl isRequired>
                <FormLabel>Invoice Number</FormLabel>
                <Input
                  name="invoice_no"
                  value={formData.invoice_no || ''}
                  onChange={handleInputChange}
                  placeholder="Enter Invoice Number"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Invoice Date</FormLabel>
                <DatePicker
                  selected={formData.invoice_date || null}
                  onChange={handleDateChange}
                  customInput={<Input placeholder="Select a date" />}
                />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Customer ID</FormLabel>
              <Input
                name="customer_id"
                value={formData.customer_id || ''}
                onChange={handleInputChange}
                placeholder="Enter Customer ID"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>All Products</FormLabel>
              <MultiSelectSearch
                options={productOptions}
                selectedOptions={selectedProducts}
                handleSelectChange={handleSelectChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Selected Products</FormLabel>
              <ProductDropdown
                selectedProducts={selectedProducts}
                products={productOptions}
                onSelectProduct={handleProductSelect}
                skus={skus}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <HStack width="100%" justifyContent="space-between">
            <Checkbox
              isChecked={isPaid}
              onChange={handlePaidChange}
            >
              Paid
            </Checkbox>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Save
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;
