import { communityState } from "@/atoms/communitiesAtom";
import CreateCommunityModal from "@/Components/Modal/CreateCommunity/CreateCommunityModal";
import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaReddit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import MenuListItem from "./MenuListItem";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const mySnippets = useRecoilValue(communityState).mySnippets;
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={4}>
        <Text pl={3} mb={4} color="gray.500" fontSize="7pt" fontWeight={500}>
          MODERATING
        </Text>

        {mySnippets
          .filter((snippet) => snippet.isModerator)
          .map((snippet) => (
            <MenuListItem
              key={snippet.communityId}
              icon={FaReddit}
              displayText={`r/${snippet.communityId}`}
              link={`/r/${snippet.communityId}`}
              iconColor="brand.100"
              imageURL={snippet.imageURL}
            />
          ))}
      </Box>
      <Box mt={3} mb={4}>
        <Text pl={3} mb={4} color="gray.500" fontSize="7pt" fontWeight={500}>
          MY COMMUNITIES
        </Text>
        <MenuItem
          width="100%"
          fontSize="10pt"
          _hover={{ bg: "gray.100" }}
          onClick={() => setOpen(true)}
        >
          <Flex align="center">
            <Icon as={GrAdd} fontSize={20} mr={2} />
            Create Community
          </Flex>
        </MenuItem>
        {mySnippets.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor="blue.500"
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
    </>
  );
};
export default Communities;
