import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  useColorMode,
  Switch,
  Flex,
  Text
} from '@chakra-ui/react';
import SearchBox from '../components/SearchBox';
import SaleOrderForm from '../components/SaleOrderForm';
import ThreeDotsMenu from '../components/ThreeDotsMenu';
import SaleOrderEditor from '../components/SaleOrderEditor';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" marginBottom="3" marginTop="4" marginLeft="3">
      <Text marginRight="2">{colorMode === 'light' ? 'Light' : 'Dark'} Mode</Text>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </Flex>
  );
};

const SaleOrdersPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState('active');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditorOpen1, setEditorOpen1] = useState(false);
  const [selectedOrder1, setSelectedOrder1] = useState(null);
  const [orders, setOrders] = useState([
    { id: 1, customer_id: '1001', invoice_no: 'INV-001', invoice_date: '2023-05-01', paid: 'false', status: 'active' },
    { id: 2, customer_id: '1002', invoice_no: 'INV-002', invoice_date: '2023-05-02', paid: 'true', status: 'completed' },
    { id: 3, customer_id: '1003', invoice_no: 'INV-003', invoice_date: '2023-05-03', paid: 'false', status: 'active' },
    { id: 4, customer_id: '1004', invoice_no: 'INV-004', invoice_date: '2023-05-04', paid: 'true', status: 'completed' },
  ]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    setFilteredOrders(orders.filter(o => o.status === activeTab));
  }, [orders, activeTab]);

  // const handleEditClick = (order) => {
  //   setSelectedOrder(order);
  //   onOpen();
  // };

  const handleNewOrderClick = () => {
    setSelectedOrder(null);
    onOpen();
  };

  const saveOrder = (order) => {
    if (order.id) {
      setOrders(prevOrders => prevOrders.map(o => o.id === order.id ? order : o));
    } else {
      const newOrder = { ...order, id: orders.length + 1, status: 'active' };
      setOrders(prevOrders => [...prevOrders, newOrder]);
    }
    onClose();
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = orders.filter(order =>
        order.customer_id.toLowerCase().includes(query.toLowerCase()) ||
        order.invoice_no.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders.filter(o => o.status === activeTab));
    }
  };

  const handleEditClick1 = (order) => {
    setSelectedOrder1(order);
    setEditorOpen1(true);
  };

  return (
    <Box p="5">
      <ThemeToggle />
      <Box display="flex" alignItems="center" marginBottom="4">
        <Button
          marginRight="4"
          onClick={() => setActiveTab('active')}
          colorScheme={activeTab === 'active' ? 'blue' : 'gray'}
        >
          Active Sale Orders
        </Button>
        <Button
          marginRight="4"
          onClick={() => setActiveTab('completed')}
          colorScheme={activeTab === 'completed' ? 'blue' : 'gray'}
        >
          Completed Sale Orders
        </Button>
        <Box flex="1" marginLeft="4" marginRight="4">
          <SearchBox onSearch={handleSearch} />
        </Box>
        <Button onClick={handleNewOrderClick}>
          + Sale Order
        </Button>
      </Box>
      <Box marginBottom="4">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Customer ID</Th>
              <Th>Invoice No</Th>
              <Th>Invoice Date</Th>
              <Th>Paid</Th>
              <Th>Edit/View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredOrders.map(order => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customer_id}</Td>
                <Td>{order.invoice_no}</Td>
                <Td>{order.invoice_date}</Td>
                <Td>{order.paid}</Td>
                <Td>
                  <ThreeDotsMenu onEdit={() => handleEditClick1(order)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      {isOpen && (
        <SaleOrderForm
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={saveOrder}
          initialData={selectedOrder || {}}
        />
      )}
      {isEditorOpen1 && (
        <SaleOrderEditor
          isOpen={isEditorOpen1}
          onClose={() => setEditorOpen1(false)}
          onSubmit={saveOrder}
          order={selectedOrder1 || {}} // Provide a default empty object if selectedOrder is null
        />
      )}
    </Box>
  );
};

export default SaleOrdersPage;
