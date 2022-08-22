import { Box, Button, Container, Grid, GridItem, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
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
    { companyName: "Pizza Hut", logo: "/ph-logo.png", },
    { companyName: "Urban Company", logo: "/uc-logo.png" },
    { companyName: "Burger King", logo: "/bk-logo.png" },
    { companyName: "Starbucks", logo: "/sb-logo.png" },
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
                                Get {5 * (i + 1)}% cashback
                            </Text>
                            <HStack justifyContent="space-between">
                                {/* time left */}
                                <HStack>
                                    <AiOutlineClockCircle />   <Text> {i + 1} days left</Text>
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
    { title: "Paytm Flights", offer: "Get upto 15% off on flight bookings ", colorScheme: "blue.100", img: '/flights.webp' },
    { title: "Zomato", offer: "Get flat 100Rs off on your orders", colorScheme: "red.300", img: '/zomato.jpeg' },
    { title: "Swiggy Instmart", offer: "Get flat 75Rs off on groceries instantly", colorScheme: "pink.300", img: '/swiggy.webp' },
    { title: "Make My Trip", offer: "Get upto 15% off on your travel plans", colorScheme: "teal.200", img: '/mmt.webp' },

]

function SpecialOffers() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalItem, setModalItem] = React.useState({
        title: "",
        offer: "",
        colorScheme: "",
        img: ''
    })
    return (
        <>
            <Heading size="lg">
                Top Offers
            </Heading>
            <Text color={"gray.400"} size="sm">
                Shop from your favourite brands
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" my={4} gap={6}>
                {
                    topOffers.map((item, i) =>

                        <GridItem onClick={() => {
                            setModalItem(topOffers[i])
                            onOpen()
                        }} cursor="pointer" borderRadius="8" boxShadow="md" bgColor={item.colorScheme} key={i} colSpan={1}>

                            <HStack height={240} alignItems="center" p={6} >

                                <Box boxShadow="sm" borderRadius="4" bgPosition="center" flex={.4} bgImg={item.img} bgSize="cover" bgRepeat="no-repeat" height="180px" />

                                <Box flex={.6} p={2} >
                                    {/* Company Name */}
                                    <Heading size="md">
                                        {item.title}
                                    </Heading>
                                    {/* Powerup Name */}
                                    <Text my={4} fontSize="2xl">
                                        {item.offer}
                                    </Text>
                                </Box>
                            </HStack>


                        </GridItem>
                    )
                }
            </Grid>
            <OfferModal isOpen={isOpen} onClose={onClose} modalItem={modalItem} />
        </>
    )
}

function OfferModal({isOpen,onClose,modalItem}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalItem.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody  >
                    <VStack p={8} alignItems="center">
                        <Text align="center" fontSize="xl">
                            {modalItem.offer}
                        </Text>
                        <HStack my={8}>
                            <AiOutlineClockCircle />   <Text color={modalItem.colorScheme}> {new Date().getHours()} days left</Text>
                        </HStack>
                        <CouponCode color={modalItem.colorScheme} code={modalItem.title} />
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

function CouponCode({ code, color }) {
    return (
        <VStack justifyContent="center" >
            <Text fontWeight="bold" fontSize="x-small">
                Copy Code
            </Text>
            <Text fontWeight="bold" cursor="pointer" bgColor={color} borderRadius="8" p={2} px={4} letterSpacing={4} textTransform="uppercase" color="white" fontSize="xl">
                {code}
            </Text>
        </VStack>
    )
}