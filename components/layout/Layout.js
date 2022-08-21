import { Avatar, Box, ChakraProvider, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineLocalOffer, MdOutlineListAlt } from "react-icons/md";
import { AiOutlineWallet, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"
import Link from 'next/link';
import { useRouter } from 'next/router';




const Layout = ({ children }) => {
    return (
        <ChakraProvider>
            <Box bgColor={"gray.200"} height={"100vh"} flex={1} p={8}>
                {/* Navbar */}
                <Navbar />
                {/* Sidebar | Content */}
                <HStack alignItems={"start"}>
                    {/* Sidebar */}
                    <Sidebar />
                    {/* Content */}
                    <Box borderRadius={"10px"} height={"80vh"} overflowX={"scroll"} bgColor={"white"} flex={1}>
                        {children}
                    </Box>
                </HStack>


            </Box>
        </ChakraProvider>
    )
}



function Navbar() {
    return (
        <HStack justifyContent={"space-between"} mb={8} alignItems={"center"}>
            <HStack>
                {/* Logo */}
                <Heading mr={8}>
                    Rockstar
                </Heading>
                {/* Searchbar */}
                <NavSearchbar />
            </HStack>
            <HStack>
                {/* Notification */}
                <IconButton mr={2} size="sm" icon={<IoIosNotificationsOutline />} />
                {/* Avatar */}
                <Avatar src='https://bit.ly/dan-abramov' size={"sm"} />
            </HStack>
        </HStack>
    )
}

function NavSearchbar() {
    return (
        <InputGroup w={"480px"}>
            <InputLeftElement
                pointerEvents='none'
                color='white'
                fontSize='1.2em'
            >
                <AiOutlineSearch />
            </InputLeftElement>
            <Input variant={"filled"} placeholder='Search' />
        </InputGroup>

    )
}


const sideBarItems = [
    { title: "Home", href: "/", icon: <AiOutlineHome />, },
    { title: "Upi", href: "/upi", icon: <AiOutlineWallet />, },
    { title: "Offers", href: "/offers", icon: <MdOutlineLocalOffer />, },
    { title: "Activity", href: "/activities", icon: <MdOutlineListAlt />, },
    { title: "Account", href: "/account", icon: <BiUserCircle />, },
]


function Sidebar() {
    const { pathname } = useRouter()
    return (
        <VStack p={4} spacing={2}>
            {
                sideBarItems.map((item, index) =>
                    <Link href={item.href} key={index}>
                        <IconButton colorScheme={pathname === item.href ? "purple" : "gray"} size={"lg"} icon={item.icon} />
                    </Link>)
            }
        </VStack>
    )
}


export default Layout