import React from 'react';
import { Table, Th, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return( <Table>
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <Td>{item.type}</Td>
          <Td>{item.amount}</Td>
          <Td>{item.currency}</Td>
        </tr>
      ))}
    </tbody>
  </Table>)
}