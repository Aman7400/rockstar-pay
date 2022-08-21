/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Button, Container, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";


export default function Account() {
    return (
        <>
            <Head>
                <title>Account Details </title>
                <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"container.xl"} p={8}>

                <HStack alignItems="start" justifyContent="space-between">
                    <RockStarCard />
                    <ProfileCard />
                </HStack>
            </Container>
        </>
    )
}

function ProfileCard() {
    return (
        <Box width="50%" p={4}>
            <Heading size="xl" mb={4}>Account Details</Heading>

            <Avatar mb={4} cursor={"pointer"} src='https://bit.ly/dan-abramov' size={"2xl"} />

            <Input size="lg" value={"Aman Shukla"} disabled mb="4" variant={"filled"} placeholder="Full Name" />
            <Input size="lg" value={"ak@gmail.com"} disabled mb="4" variant={"filled"} placeholder="Email" />
            <Input size="lg" value="amanks@rockstarpay" disabled mb="4" variant={"filled"} placeholder="UPI ID" />

            <Heading size="lg" mb={2}>Bank Details</Heading>
            <Box width="240px" cursor="pointer" borderRadius="8" boxShadow="md" p={4}>
                <Heading size={"md"}>
                    HDFC Bank
                </Heading>
                <Text fontSize="sm">123456789</Text>
                <Text fontSize="sm">HDFC2345</Text>
            </Box>

            {/* <HStack justifyContent="end">
                <Button disabled size="lg" my={8} colorScheme={"purple"}>
                    Save
                </Button>
            </HStack> */}




        </Box>
    )
}

function RockStarCard() {
    return (
        <VStack width="50%" pt={8} justifyContent="center" alignItems={"center"}>
            <VStack justifyContent="space-between" alignItems="start" cursor="pointer" height="240" borderRadius={16} boxShadow={"lg"} width="420px" bgColor="purple.300" p={8} >
                <Heading size="md" color="white">
                    4562 3456 32456 2345
                </Heading>
                <HStack width="100%" justifyContent={"space-between"}>
                    <Box>
                        <Text fontSize="xs">Card Holder Name</Text>
                        <Text fontSize="md" fontWeight={"bold"}>Aman Kumar Shukla</Text>
                    </Box>
                    <Box>
                        <img height="60" width="60" src={"/master-card.png"} alt="Master Card" />
                    </Box>
                </HStack>
            </VStack>
        </VStack>
    )
}