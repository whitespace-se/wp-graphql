import React from 'react'
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/core'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Container from "../components/container";
import queryPosts from '../img/query-posts.png'

const Home = () => {
    return (
        <Layout>
            <Box width={`100%`} background={`gray.50`} borderBottomWidth="1px">
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center" justify="space-between">
                        <Box maxW="900px" mt={`30`}>
                            <Heading as={`h1`} m="0" mb="3" size="4xl">
                                GraphQL API for
                            </Heading>
                            <Heading as={`h1`} m="0" mb="3" size="4xl">
                                WordPress
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                WPGraphQL is a free, open-source WordPress plugin that provides an extendable GraphQL schema and API for any WordPress site.
                            </Text>
                            <Link to="/docs/">
                                <Button as="span"  colorScheme="blue" variant="solid" maxW={`300px`} m={`10`} mb={`20`}>
                                    Get started
                                </Button>
                            </Link>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box width={`100%`} background={`gray.100`} borderBottomWidth="1px">
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center" justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`20`}>
                            <Heading as={`h2`} m="0" mb="3" size="2xl">
                                Query what you need. Get exactly that.
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                With GraphQL, the client makes declarative queries, asking for the exact data needed, and in exactly what was asked for is given in response, nothing more. This allows the client have control over their application, and allows the GraphQL server to perform more efficiently by only fetching the resources requested.
                            </Text>
                        </Box>
                    </Flex>
                    <Image
                        src={queryPosts}
                        h="40|56|80"
                        mt="12|14|16"
                        roundedTop="xl"
                        overflow="hidden"
                        boxShadow="0px -10px 8px 0px rgba(0, 0, 0, .125)"
                    />
                </Container>
            </Box>
            <Box width={`100%`} background={`gray.50`} borderBottomWidth="1px">
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center" justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`20`}>
                            <Heading as={`h2`} m="0" mb="3" size="2xl">
                                Query what you need. Get exactly that.
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                With GraphQL, the client makes declarative queries, asking for the exact data needed, and in exactly what was asked for is given in response, nothing more. This allows the client have control over their application, and allows the GraphQL server to perform more efficiently by only fetching the resources requested.
                            </Text>
                        </Box>
                    </Flex>
                    <Image
                        src={queryPosts}
                        h="40|56|80"
                        mt="12|14|16"
                        roundedTop="xl"
                        overflow="hidden"
                        boxShadow="0px -10px 8px 0px rgba(0, 0, 0, .125)"
                    />
                </Container>
            </Box>
        </Layout>
    );
}

export default Home;
