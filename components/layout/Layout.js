import { Avatar, Box, ChakraProvider, extendTheme, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineLocalOffer, MdOutlineListAlt } from "react-icons/md";
import { AiOutlineWallet, AiOutlineShoppingCart, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import Link from 'next/link';
import { useRouter } from 'next/router';






const Layout = ({ children }) => {

    const theme = extendTheme({
        fonts: {
            body: "'Poppins', sans-serif",
            heading: "'Poppins', sans-serif",
        },
    })


    return (
        <ChakraProvider theme={theme} resetCSS>
            <Box height={"100vh"} flex={1} p={8}>
                {/* Navbar */}
                <Navbar />
                {/* Sidebar | Content */}
                <HStack alignItems={"start"}>
                    {/* Sidebar */}
                    <Sidebar />
                    {/* Content */}
                    <Box boxShadow="lg" borderRadius={"10px"} height={"80vh"} overflowX={"scroll"} bgColor={"white"} flex={1}>
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
                    <Link href="/">
                        Rockstar
                    </Link>
                </Heading>

                {/* Searchbar */}
                <NavSearchbar />
            </HStack>
            <HStack>
                {/* Notification */}
                <NotificationPopover />
                {/* Avatar */}
                <Menu>
                    <MenuButton as={Avatar} cursor={"pointer"} src='https://bit.ly/dan-abramov' size={"sm"} />
                    <MenuList>

                        <Link href="/account">
                            <MenuItem>
                                Profile
                            </MenuItem>
                        </Link>

                        <Link href="/settings">
                            <MenuItem>
                                Settings
                            </MenuItem>
                        </Link>

                        <MenuItem>Log Out</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </HStack>
    )
}

function NavSearchbar() {
    return (
        <InputGroup boxShadow="sm" w={"480px"}>
            <InputLeftElement
                pointerEvents='none'
                color='white'
                fontSize='1.2em'
            >
                <AiOutlineSearch color="purple" />
            </InputLeftElement>
            <Input variant={"filled"} _hover={{
                backgroundColor: "gray.100"
            }} bgColor="white" color="purple" placeholder='Search' />
        </InputGroup>

    )
}

function NotificationPopover() {
    return (
        <Popover placement='bottom-end'>
            <PopoverTrigger>
                <IconButton mr={2} size="sm" icon={<IoIosNotificationsOutline />} />
            </PopoverTrigger>
            <PopoverContent p={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                    <Heading size="md">
                        Notifications
                    </Heading>
                </PopoverHeader>
                <PopoverBody>Welcome Aboard!!</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

const sideBarItems = [
    { title: "Home", href: "/", icon: <AiOutlineHome />, },
    { title: "Upi", href: "/upi", icon: <AiOutlineWallet />, },
    { title: "Offers", href: "/offers", icon: <MdOutlineLocalOffer />, },
    { title: "Transactions", href: "/activities/transactions", icon: <MdOutlineListAlt />, },
    { title: "Payments", href: "/activities/payments", icon: <HiOutlineCurrencyRupee />, },
    { title: "Spends", href: "/activities/spends", icon: <AiOutlineShoppingCart />, },
    { title: "Account", href: "/account", icon: <BiUserCircle />, },
]


function Sidebar() {
    const { pathname } = useRouter()
    return (
        <VStack p={4} spacing={2}>
            {
                sideBarItems.map((item, index) =>
                    <Link href={item.href} key={index}>
                        <IconButton variant={pathname === item.href ? "solid" : "ghost"} borderRadius={100} colorScheme={"purple"} size={"lg"} icon={item.icon} />
                    </Link>)
            }
        </VStack>
    )
}


export default Layout