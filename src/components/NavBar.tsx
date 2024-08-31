import React from "react";
import logo from "../assets/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
