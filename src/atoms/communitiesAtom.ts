import { Timestamp } from "firebase/firestore";
import { atom } from "recoil"

export interface Community{
    id: string;
    creatorId: string;
    numberOfMembers: number;
    privacyType: 'public' | 'restricted' | 'private';
    createdAt?: Timestamp;
    imageURL?: string;
}
//Define the type
export interface CommunitySnippet{
    communityId: string;
    isModerator?: boolean;
    imageURL?: string;
}

//Define CommunityState type which contains a custom type CommunitySnippet
interface CommunityState{
    mySnippets: CommunitySnippet[];
    currentCommunity?: Community;
}

const defaultCommunityState: CommunityState = {
    mySnippets: []
}

//Global accessible atom, communityState
export const communityState = atom<CommunityState>({
    key: 'communityState',
    default: defaultCommunityState
})