import { Community } from "@/atoms/communitiesAtom";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safeJsonStringy from "safe-json-stringify";

type CoummunityPageProps = {
  communityData: Community;
};

const CoummunityPage: React.FC<CoummunityPageProps> = ({ communityData }) => {
  console.log("Data", communityData);
  return <div>Welcome to {communityData.id}</div>;
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
        communityData: JSON.parse(
          safeJsonStringy({ id: communityDoc.id, ...communityDoc.data() })
        ),
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
  }
}
