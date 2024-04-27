import React, { useState } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  VStack,
  HStack,
  Icon,
  Input,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const profiles = [
  {
    products: ['product A', 'product B'],
    domain: 'randi.com',
    gstNo: '12345',
    email: '@.com',
    phone: '+917369960439',
    address: 'jugsalai,India',
  },
];

function Dashboard() {
  const [newProposal, setNewProposal] = useState({
    products: [],
    domain: '',
    gstNo: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProposal({ ...newProposal, [name]: value });
  };

  const handleNewProposal = () => {
    console.log('New proposal:', newProposal);
    setNewProposal({
      products: [],
      domain: '',
      gstNo: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <div>

    <Box p={4}>
      <Heading as="h2" size="lg">
        Dashboard
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Products</Th>
            <Th>Domain</Th>
            <Th>GST No.</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>

        <Tbody>
          {profiles.map((profile) => (
              <Tr key={profile.email}>
              <Td>
                {profile.products.join(', ')}
              </Td>
              <Td>{profile.domain}</Td>
              <Td>{profile.gstNo}</Td>
              <Td>{profile.email}</Td>
              <Td>{profile.phone}</Td>
              <Td>{profile.address}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <VStack mt={4}>
        <HStack spacing={4}>
          {['products', 'domain','email', 'description'].map(
              (field) => (
                  <Input key={field} name={field} value={newProposal[field]} onChange={handleInputChange} placeholder="Enter" />
                )
            )}
        </HStack>
        <Button mt={4} colorScheme="blue" rightIcon={<Icon as={AddIcon} />} onClick={handleNewProposal}>
          New Proposal
        </Button>
      </VStack>
    </Box>
</div>
  );
}

export default Dashboard;