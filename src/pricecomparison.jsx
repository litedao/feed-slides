import React from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem,
  Appear
} from 'spectacle'

const PriceComparison = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderItem></TableHeaderItem>
          <TableHeaderItem>ETH/USD</TableHeaderItem>
          <TableHeaderItem>DAI/USD</TableHeaderItem>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableItem>Dec 17, 2017</TableItem>
          <TableItem>717.71</TableItem>
          <TableItem>1</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>Jan 1, 2018</TableItem>
          <TableItem>756.2</TableItem>
          <TableItem>1</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>Jan 13, 2018</TableItem>
          <TableItem>1385.02</TableItem>
          <TableItem>1</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>April 6, 2018</TableItem>
          <TableItem>370.35</TableItem>
          <TableItem>1</TableItem>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default PriceComparison
