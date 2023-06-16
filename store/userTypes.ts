// type

export type UserDetails = {
    id: number,
    name: string,
    username: string,
    profileImageUrl: string,
    coveredImageUrl: string,
    isFollowing: boolean | null
}

export interface Comment {
    id: number,
    comment: string,
    name: string,
    username: string,
    profileImageUrl: string,
    
}

export type Post = {
    id: number,
    isImage: boolean,
    isVideo: boolean,
    url: string,
    postedDate: string,
    description: string,
    userDetails: UserDetails,
    likes: number,
    dislikes: number,
    isLiked: boolean,
    isDisliked: boolean,
    comments: Comment[],
}

export type Bio = {
    worked?: string,
    school?: string,
    college?: string,
    location?: string,
    formerLocation?: string,
    followers?: number
}

export type User = {
    id: number,
    userDetails: UserDetails,
    posts: Post[],
    feed?: Post[],
    following?: UserDetails[],
    recommendations?: UserDetails[],
    bio: Bio,
}







