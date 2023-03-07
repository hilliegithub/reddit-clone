import PageContent from "@/Components/Layouts/PageContent";
import NewPostForm from "@/Components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SubmitPostPage: React.FC = () => {
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        <NewPostForm />
      </>
      <></>
    </PageContent>
  );
};
export default SubmitPostPage;
