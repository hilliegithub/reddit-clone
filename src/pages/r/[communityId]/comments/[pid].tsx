import PageContent from "@/Components/Layouts/PageContent";
import PostItem from "@/Components/Posts/PostItem";
import { auth } from "@/firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const PostPage: React.FC = () => {
  const { postStateValue, setPostStateValue, onVote, onDeletePost } =
    usePosts();

  const [user] = useAuthState(auth);
  return (
    <PageContent>
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            userIsCreator={user?.uid === postStateValue.selectedPost?.creatorId}
            userVoteValue={
              postStateValue.postVotes?.find(
                (vote) => vote.postId === postStateValue.selectedPost?.id
              )?.voteValue
            }
            onVote={onVote}
            onDeletePost={onDeletePost}
          />
        )}
      </>
      <></>
    </PageContent>
  );
};
export default PostPage;
