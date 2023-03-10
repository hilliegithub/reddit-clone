import { Community } from "@/atoms/communitiesAtom";
import CommunityNotFound from "@/Components/Community/CommunityNotFound";
import Header from "@/Components/Community/Header";
import PageContent from "@/Components/Layouts/PageContent";
import CreatePostLink from "@/Components/Modal/CreateCommunity/CreatePostLink";
import Posts from "@/Components/Posts/Posts";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safeJsonStringy from "safe-json-stringify";

type CoummunityPageProps = {
  communityData: Community;
};

const CoummunityPage: React.FC<CoummunityPageProps> = ({ communityData }) => {
  // console.log("Data", communityData);
  if (!communityData) {
    return <CommunityNotFound />;
  }
  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={communityData} />
        </>
        <>
          <div>RHS</div>
        </>
      </PageContent>
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
