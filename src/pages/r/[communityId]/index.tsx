import { Community, communityState } from "@/atoms/communitiesAtom";
import About from "@/Components/Community/About";
import CommunityNotFound from "@/Components/Community/CommunityNotFound";
import Header from "@/Components/Community/Header";
import PageContent from "@/Components/Layouts/PageContent";
import CreatePostLink from "@/Components/Modal/CreateCommunity/CreatePostLink";
import Posts from "@/Components/Posts/Posts";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import safeJsonStringy from "safe-json-stringify";

type CoummunityPageProps = {
  communityData: Community;
};

const CoummunityPage: React.FC<CoummunityPageProps> = ({ communityData }) => {
  // console.log("Data", communityData);
  const [isCommunityNotFound, setIsCommunityNotFound] = useState(false);
  const setCommunityStateValue = useSetRecoilState(communityState);
  // if (!communityData) {
  //   return <CommunityNotFound />;
  // }

  // useEffect(() => {
  //   setCommunityStateValue((prev) => ({
  //     ...prev,
  //     currentCommunity: communityData,
  //   }));
  // }, [communityData]);

  useEffect(() => {
    if (!communityData) {
      setIsCommunityNotFound(true);
      return;
    }
    setIsCommunityNotFound(false);
    setCommunityStateValue((prev) => ({
      ...prev,
      currentCommunity: communityData,
    }));
  }, [communityData, setCommunityStateValue]);
  return (
    <>
      {isCommunityNotFound ? (
        <CommunityNotFound />
      ) : (
        <>
          <Header communityData={communityData} />
          <PageContent>
            <>
              <CreatePostLink />
              <Posts communityData={communityData} />
            </>
            <>
              <About communityData={communityData} />
            </>
          </PageContent>
        </>
      )}
    </>
  );
};
export default CoummunityPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );

    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringy({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
  }
}
