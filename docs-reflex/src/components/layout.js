import React from "react";
import { chakra, Box, Button, Flex, HStack, useColorMode, useColorModeValue } from "@chakra-ui/core";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"
import { Link } from 'gatsby'
import Logo from "./logo";
import NavLink from "./header-nav-link"

function Layout(props) {
    const { toggleColorMode } = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    const bg = useColorModeValue("white", "gray.800")
    return (
        <Box>
            <chakra.header
                top="0"
                zIndex="1"
                bg={bg}
                left="0"
                right="0"
                borderBottomWidth="1px"
                width="full"
                {...props}
            >
                <chakra.div height="4.5rem" mx="auto" maxW="1200px">
                <Flex
                    w="100%"
                    h="100%"
                    py={3}
                    px={5}
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <HStack
                            as="nav"
                            spacing="4"
                            ml="24px"
                            display={{ base: "none", md: "flex" }}
                        >
                            <NavLink href="/docs/quick-start/">Docs</NavLink>
                            <NavLink href="/community">Community</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                            <NavLink href="/extensions">Extensions</NavLink>
                        </HStack>
                    </Flex>
                    <Flex maxW="720px" align="center" color="gray.400">
                        <HStack spacing="5">
                            <Button>
                                <FaGithub />
                            </Button>
                            <Button onClick={toggleColorMode}>
                                <SwitchIcon />
                            </Button>
                        </HStack>
                    </Flex>
                    </Flex>
                </chakra.div>
            </chakra.header>
            <Box
                as="main"
            >
                {props.children}
            </Box>
        </Box>
    );
}

export default Layout;

