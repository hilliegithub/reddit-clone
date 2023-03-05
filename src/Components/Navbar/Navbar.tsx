import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => (
  <Flex bg="white" height="44px" padding="6px 12px">
    <Flex align="center">
      <Image src="/images/redditFace.svg" height="30px" />
      <Image
        src="/images/redditText.svg"
        height="46px"
        display={{ base: "none", md: "unset" }}
      />
    </Flex>
    <SearchInput />
    {/* <Directory /> */}
    <RightContent />
    {console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)}
  </Flex>
);
export default Navbar;