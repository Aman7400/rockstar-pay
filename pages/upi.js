import { Button, Container, Heading, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Stack, useToast, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { BiRupee } from "react-icons/bi";
import { BsPencilSquare, BsFillTelephoneFill, BsBank } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

export default function Upi() {
    return (
        <>
            <Head>
                <title>Blazing Fast UPI payments </title>
                <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"container.xl"} p={8}>

                <Heading align="center" mb={8}>
                    Make blazing fast payments
                </Heading>
                <UpiPayment />
            </Container>
        </>
    )
}

function UpiPayment() {

    const toast = useToast()

    const [mode, setMode] = React.useState("upi");

    const [loading, setLoading] = React.useState(false)
    const [amount, setAmount] = React.useState(0)
    const [note, setNote] = React.useState("")
    const [customerUpiId, setCustomerUpiId] = React.useState("")
    const [customerPhone, setCustomerPhone] = React.useState("")
    const [customerAccount, setCustomerAccount] = React.useState({
        accountNo: "",
        ifsc: ""
    })


    const handleMakeUpiPayment = () => {
        setLoading(true)
        setTimeout(() => {
            toast({
                title: `Rs ${amount} Payed Successfully`,
                status: 'success',
                isClosable: true,
            });
            setAmount(0)
            setNote("")
            setLoading(false)
        }, 3000)
    }


    function getModeWiseInput(mode) {
        let allModes = {
            "upi":
                <InputGroup size="lg">
                    <InputLeftElement
                        pointerEvents='none'
                        fontSize='1.2em'
                        color={"gray"}
                    >
                        <IoPersonOutline />
                    </InputLeftElement>
                    <Input value={customerUpiId} onChange={(e) => setCustomerUpiId(e.target.value)} placeholder="Enter UPI ID" />
                </InputGroup>,
            "phoneNo":
                <InputGroup size="lg">
                    <InputLeftElement
                        pointerEvents='none'
                        fontSize='1.2em'
                        color={"gray"}
                    >
                        <BsFillTelephoneFill />
                    </InputLeftElement>
                    <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} type="number" placeholder="Enter Phone Number" />
                </InputGroup>,
            "account":
                <>
                    <InputGroup size="lg">
                        <InputLeftElement
                            pointerEvents='none'
                            fontSize='1.2em'
                            color={"gray"}
                        >
                            <BsBank />
                        </InputLeftElement>
                        <Input value={customerAccount.accountNo} onChange={(e) => setCustomerAccount(prev => ({ ...prev, accountNo: e.target.value }))} type="number" placeholder="Enter Account No" />
                    </InputGroup>
                    <InputGroup size="lg">
                        <InputLeftElement
                            pointerEvents='none'
                            fontSize='1.2em'
                            color={"gray"}
                        >
                            <IoPersonOutline />
                        </InputLeftElement>
                        <Input value={customerAccount.ifsc} onChange={(e) => setCustomerAccount(prev => ({ ...prev, ifsc: e.target.value }))} placeholder="Enter IFSC Code" />
                    </InputGroup>
                </>

        }

        return allModes[mode];
    }

    return (
        <VStack mx="auto" width={"480px"} boxShadow="md" p={8}>
            <RadioGroup mb={4} onChange={setMode} value={mode}>
                <Stack direction='row' spacing="4">
                    <Radio value='upi'>UPI ID</Radio>
                    <Radio value='phoneNo'>Phone Number</Radio>
                    <Radio value='account'>Account Details</Radio>
                </Stack>
            </RadioGroup>
            {getModeWiseInput(mode)}
            <InputGroup size="lg">
                <InputLeftElement
                    pointerEvents='none'
                    fontSize='1.2em'
                    color={"gray"}
                >
                    <BiRupee />
                </InputLeftElement>
                <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="0.00" />
            </InputGroup>
            <InputGroup size="md">
                <InputLeftElement
                    pointerEvents='none'
                    fontSize='1.2em'
                    color={"gray"}
                >
                    <BsPencilSquare />
                </InputLeftElement>
                <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add Note" />
            </InputGroup>
            <Button disabled={amount <= 0} isLoading={loading} onClick={handleMakeUpiPayment} size="lg" colorScheme="purple">
                Send &#8377;{amount || 0}
            </Button>
        </VStack>
    )

}

