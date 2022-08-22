import { Box, Container, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { AiOutlineClockCircle } from "react-icons/ai"

export default function Offers() {
    return (
        <>
            <Head>
                <title> Offers  </title>
                <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"container.xl"} p={8} pt={4}>
                <Powerups />
                <SpecialOffers />
            </Container>
        </>
    )
}

const powerups = [
    {companyName: "Pizza Hut", logo:"/ph-logo.png",},
    {companyName: "Urban Company", logo:"/uc-logo.png"},
    {companyName: "Burger King", logo:"/bk-logo.png"},
    {companyName: "Starbucks", logo:"/sb-logo.png"},
]

function Powerups() {
    return (
        <>
            <Heading size="lg">
                Daily Powerups
            </Heading>
            <HStack my={8} gap={4}>
                {
                    powerups.map((item, i) =>
                        <Box cursor="pointer" key={i} p={4} borderRadius="8" boxShadow="md">
                            {/* Company Name */}
                            <Heading size="md">
                                {item.companyName}
                            </Heading>
                            {/* Powerup Name */}
                            <Text my={4} fontSize="2xl">
                                Get {5 * (i+1)}% cashback
                            </Text>
                            <HStack justifyContent="space-between">
                                {/* time left */}
                                <HStack>
                                    <AiOutlineClockCircle />   <Text> {i+1} days left</Text>
                                </HStack>
                                {/* Company logo */}
                                <img src={item.logo} width={48} height={48} alt={`Brand ${item.companyName}`} />
                            </HStack>

                        </Box>)
                }
            </HStack>
        </>
    )
}

const topOffers = [
    { title: "Vijay Sales", offer: "Get 12% instant cashback on electronics", colorScheme: "gray" },
    { title: "Zomato", offer: "Get flat 100Rs off on your orders", colorScheme: "red" },
    { title: "Swiggy Instmart", offer: "get flat 75Rs off on groceries instantly", colorScheme: "pink" },
    { title: "Make My Trip", offer: "Get upto 15% off on your travel plans", colorScheme: "yellow" },

]

function SpecialOffers() {
    return (
        <>
            <Heading size="lg">
                Top Offers
            </Heading>
            <Text color={"gray.400"} size="sm">
                Shop from your favourite brands
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" my={4} gap={4}>
                {
                   topOffers.map((item, i) =>

                        <GridItem key={i} colSpan={1}>
                            <Box bgColor={item.colorScheme} cursor="pointer" p={8} borderRadius="8" boxShadow="md">
                                {/* Company Name */}
                                <Heading size="md">
                                     {item.title}
                                </Heading>
                                {/* Powerup Name */}
                                <Text my={4} fontSize="2xl">
                                    {item.offer}
                                </Text>
                            </Box>
                        </GridItem>
                    )
                }
            </Grid>
        </>
    )
}