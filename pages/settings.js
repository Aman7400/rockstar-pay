import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Settings() {
    return (
        <>
            <Head>
                <title> Settings  </title>
                <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"container.xl"} p={8}>
                <Heading>
                    Settings
                </Heading>
            </Container>
        </>
    )
}