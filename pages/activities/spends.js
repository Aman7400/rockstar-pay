import { Container, Heading, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Spends() {

    return (
        <>
        <Head>
        <title>Rockstar Credits | Monthly Spends </title>
        </Head>

            <Container maxW={"container.xl"} p={8}>
                <HStack mb={4} alignItems="center" justifyContent="space-between">
                    <Heading size={"xl"}>
                        Monthly spends
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
            </Container>

        </>

    )

}