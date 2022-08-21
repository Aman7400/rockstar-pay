import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Upi() {
    return (
        <>
            <Head>
                <title>Blazing Fast UPI payments </title>
                <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"container.xl"}>
                <Heading>
                    UPI
                </Heading>
            </Container>
        </>
    )
}