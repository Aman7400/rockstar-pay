import { Container, Heading } from "@chakra-ui/react";

export default function Account() {
    return (
        <Container maxW={"container"} p={8} pt={4} flex={1}>
            {
                [1, 2, 3, 4, 5].map((item) =>
                    <Heading mb={8} key={item}>
                        Account {item}
                    </Heading>)
            }
        </Container>
    )
}