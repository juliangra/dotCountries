import { Icon, useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box boxShadow="base" px="7" py="3" position="relative">
        <Flex alignItems="center">
          <Box>
            <Link href={"/"}>
              <a>
                <Flex>
                  <Logo />
                </Flex>
              </a>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Button onClick={toggleColorMode}>
              <Icon
                as={colorMode == "light" ? SunIcon : MoonIcon}
                color={colorMode == "light" ? "gray.700" : "teal.100"}
              />
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
