import React from "react";
import logo from "../assets/logo.webp";
import { Button, HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
