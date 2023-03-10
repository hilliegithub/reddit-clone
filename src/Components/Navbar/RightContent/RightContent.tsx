import AuthModal from "@/Components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <>
            <Icons />
          </>
        ) : (
          // <Button onClick={() => signOut(auth)}>Sign Out</Button>
          <AuthButtons />
        )}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
