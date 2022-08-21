import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Activity() {
  const {query} = useRouter()

  const {activity} = query

    return (
        <>
            <Head>
                <title> {activity}  </title>
                <meta name="description" content="A one-stop payment solution for all your spends. Earn up to 2% cashback with rockstar super card." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"container.xl"}>
                <Heading>
                    All {activity}
                </Heading>
            </Container>
        </>
    )
}