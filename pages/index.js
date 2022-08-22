import { Box, Button, Container, Grid, GridItem, Heading, HStack, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Tooltip } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rockstar Credits | We got you covered </title>
        <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateColumns='repeat(3, 1fr)' gap={8} maxW={"container.xl"} p={8}>
        <GridItem colSpan={2}>
          <HStack justifyContent="space-evenly" mb={8} spacing={8}>
            <AvailableCreditLimit />
            <CurrentMonthSpends />
          </HStack>
          <RecentTransactionTable />
        </GridItem>
        <GridItem colSpan={1}>
          <UpcomingPayments />
        </GridItem>
      </Grid>
    </>


  )
}

function UpcomingPayments() {


  return (

    <Box >
      <HStack justifyContent="space-between">
        <Heading size={"md"}>
          Upcoming payments
        </Heading>
        <Heading size="xs" color="purple.500">
          <Link href="/activities/payments">
            See All
          </Link>
        </Heading>
      </HStack>
      <VStack p={4}>
        {
          [1, 2, 3, 4].map((payment) =>
            <Box cursor={"pointer"} w={"100%"} boxShadow={"md"} borderRadius={8} p={4} key={payment}>
              <Heading size="sm">
                Payment {payment}
              </Heading>
              <HStack justifyContent="space-between">
                <Heading size="sm" color="purple.500">
                  &#8377; 22,360
                </Heading>
                <Button size="sm" variant="solid" colorScheme="purple">
                  Pay Now
                </Button>
              </HStack>

            </Box>
          )
        }
      </VStack>
    </Box>

  )

}



function AvailableCreditLimit() {
  return (
    <Box boxShadow={"md"} flex={1} p={8} >
      <HStack justifyContent="space-between">
        <Heading size="lg">
          Purchase Power
        </Heading>
        <Popover placement='bottom-end'>
          <PopoverTrigger >
            <IconButton variant="ghost" colorScheme="purple" icon={<AiOutlineInfoCircle />} />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              There is no predefined credit limit when you get approved. Instead, you can see the <strong>
                purchase power
              </strong> in the app. It&apos;s the estimate amount you may qualify to borrow from Rockstar Pay.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <Heading size="2xl" color="purple.500" my={2}>
        &#8377; 2,20,360
      </Heading>
    </Box>
  )
}

function CurrentMonthSpends() {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();

  return (
    <Link href="/activities/spends">
      <Box flex={1} cursor="pointer" boxShadow={"md"} p={8}  >
        <HStack justifyContent="space-between">
          <Heading size={"lg"}>
            {monthNames[d.getMonth()]} Spends
          </Heading>
        </HStack>
        <Heading size="2xl" color="purple.500" my={2}>
          &#8377; 22,360
        </Heading>
      </Box>
    </Link >

  )
}


function RecentTransactionTable() {

  return (
    <Box >
      <HStack mb={4} alignItems="center" justifyContent="space-between">
        <Heading size={"md"}>
          Recent Transactions
        </Heading>
        <Heading size="xs" color="purple.500">
          <Link href="/activities/transactions">
            See All
          </Link>
        </Heading>
      </HStack>
      <TableContainer boxShadow="lg" p={5}>
        <Table variant='striped' colorScheme='purple'>
          <Thead>
            <Tr>
              <Th >Paid to</Th>
              <Th isNumeric >Amount</Th>
              <Th isNumeric >Paid on</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              [
                { amount: 100, paidTo: "Amazon.com", paidOn: new Date().toDateString() },
                { amount: 200, paidTo: "Flipkart.com", paidOn: new Date().toDateString() },
                { amount: 300, paidTo: "Grofers.com", paidOn: new Date().toDateString() },
                { amount: 400, paidTo: "Swiggy.com", paidOn: new Date().toDateString() },
              ]
                .map((transaction, i) =>
                  <Tr key={i}>
                    <Td><Heading size="sm">{transaction.paidTo}</Heading></Td>
                    <Td isNumeric> &#8377; {transaction.amount * (i + 1)}</Td>
                    <Td isNumeric>{transaction.paidOn}</Td>
                  </Tr>
                )
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>

  )

}
