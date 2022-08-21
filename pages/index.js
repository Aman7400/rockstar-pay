import { Box, Button, Container, Grid, GridItem, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

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
          <CurrentMonthSpends />
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
          <Link href="/activities">
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

function CurrentMonthSpends() {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();

  return (

    <Box mb={8} >
      <HStack justifyContent="space-between">
        <Heading size={"lg"}>
          {monthNames[d.getMonth()]} Spends
        </Heading>
        <Heading size="xs" color="purple.500">
          <Link href="/activities">
            See All
          </Link>
        </Heading>
      </HStack>
      <Heading size="2xl" color="purple.500" my={2}>
        &#8377; 22,360
      </Heading>
    </Box>

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
          <Link href="/activities">
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
                { amount: 500, paidTo: "Zomato.com", paidOn: new Date().toDateString() },
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
