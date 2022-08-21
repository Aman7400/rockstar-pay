import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rockstar Credits | We got you covered </title>
        <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"}>
        <Heading>
          Home
        </Heading>
      </Container>
    </>


  )
}

