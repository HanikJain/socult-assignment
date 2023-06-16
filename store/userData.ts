//data
import { UserDetails, User, Bio, Post, Comment } from "./userTypes";

const user1: UserDetails = {
    id: 1,
    name: "Hanik Jain",
    username: "hanikjain",
    profileImageUrl: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    coveredImageUrl: "https://marketplace.canva.com/EAE6i81Zo60/1/0/1600w/canva-blue-minimalist-linktree-background-4jrZHAehe7I.jpg",
    isFollowing: false
}


const user2: UserDetails = {
    id: 2,
    name: "Alex Carey",
    username: "alex",
    profileImageUrl: "https://cdn.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.webp",
    coveredImageUrl: "https://images.unsplash.com/photo-1532210317995-cc56d90177d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFollowing: true,
}

const user3: UserDetails = {
    id: 3,
    name: "John Smith",
    username: "john123",
    profileImageUrl: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    coveredImageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFollowing: true
}


const user4: UserDetails = {
    id: 4,
    name: "Rachel",
    username: "dance_with_rachel",
    profileImageUrl: "https://cdn.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.webp",
    coveredImageUrl: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFollowing: false
}


const user5: UserDetails = {
    id: 5,
    name: "Ann Ann",
    username: "annnn",
    profileImageUrl: "https://cdn.vectorstock.com/i/1000x1000/32/27/user-sign-icon-person-symbol-human-avatar-vector-12693227.webp",
    coveredImageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFollowing: false
}


const user6: UserDetails = {
    id: 6,
    name: "Uday Agarwal",
    username: "uday_agarwal",
    profileImageUrl: "https://cdn.vectorstock.com/i/1000x1000/32/09/user-sign-icon-person-symbol-human-avatar-vector-12693209.webp",
    coveredImageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFollowing: false
}

const user7: UserDetails = {
    id: 7,
    name: "Sam Altman",
    username: "sammy",
    profileImageUrl: "https://cdn.vectorstock.com/i/1000x1000/32/18/user-sign-icon-person-symbol-human-avatar-vector-12693218.webp",
    coveredImageUrl: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    isFollowing: false
}

let bio: Bio = {
    worked: ["Worked for Socult", "Summer Internship at Tesla"],
    school: "Went to A.B.C school",
    college: "Studied at University of Mumbai",
}

let bio2: Bio = {
    worked: ["Worked for Socult", "Summer Internship at facebook"],
    school: "Went to A.B school",
    college: "Studied at University of Mumbai",
}

let bio3: Bio = {
    worked: ["Worked for TCS", "Summer Internship at Google"],
    school: "Went to A.C school",
    college: "Studied at University of Delhi",
}

let bio4: Bio = {
    worked: ["Worked for Infosys", "Summer Internship at Google"],
    school: "Went to A.C.D.H school",
    college: "Studied at University of Delhi",
}

let bio5: Bio = {
    worked: ["Worked for TCS", "Summer Internship at Google"],
    school: "Went to A.C.B school",
    college: "Studied at University of Mumbai",
}

let bio6: Bio = {
    worked: ["Worked for Wipro", "Summer Internship at Amazon"],
    school: "Went to A.C school",
    college: "Studied at University of Chennai",
}

let bio7: Bio = {
    worked: ["Worked for Amazon", "Summer Internship at Google"],
    school: "Went to G.A.C. school",
    college: "Studied at IIT Delhi",
}

const comment1: Comment = {
    id: 1,
    comment: "Amazing photo!!!",
    name: user2.name,
    username: user2.username,
    profileImageUrl:  user2.profileImageUrl,
}

const comment2: Comment = {
    id: 2,
    comment: "Wow!, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    name: user2.name,
    username: user2.username,
    profileImageUrl:  user2.profileImageUrl,
}


const comment3: Comment = {
    id: 3,
    comment: "Haha, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    name: user3.name,
    username: user3.username,
    profileImageUrl:  user3.profileImageUrl,
}


const comment4: Comment = {
    id: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    name: user4.name,
    username: user4.username,
    profileImageUrl:  user4.profileImageUrl,
}


const comment5: Comment = {
    id: 5,
    comment: "Amazing, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    name: user5.name,
    username: user5.username,
    profileImageUrl:  user5.profileImageUrl,
}

let post8: Post = {
    id: 8,
    isImage: false,
    isVideo: true,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    postedDate: "Published 2 mins ago",
    description: "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
    userDetails: user1,
    likes: 110,
    dislikes: 19,
    isLiked: false,
    isDisliked: false,
    comments: [comment4]
}

let post1: Post = {
    id: 1,
    isImage: true,
    isVideo: false,
    url: "https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dW5kZXJ3YXRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    postedDate: "Published 10mins ago",
    description: "An underwater image captures the beauty and mystery of the underwater world, providing a glimpse into a realm that is often hidden from our sight. These images showcase the vibrant colors, diverse marine life, and stunning landscapes found beneath the water's surface. They offer a unique perspective on the underwater ecosystem, revealing the intricate details of coral reefs, marine creatures in their natural habitats, and the play of light and shadows in the underwater environment. Through underwater photography, we can appreciate the wonders of the deep sea, raise awareness about marine conservation, and inspire a sense of awe and respect for the underwater world.",
    userDetails: user1,
    likes: 27,
    dislikes: 3,
    isLiked: false,
    isDisliked: false,
    comments: [comment1, comment2, comment3]
}


let post2: Post = {
    id: 2,
    isImage: true,
    isVideo: false,
    url: "https://images.unsplash.com/photo-1543788303-c15e49305bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    postedDate: "Published 1 hour ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    userDetails: user2,
    likes: 11,
    dislikes: 0,
    isLiked: false,
    isDisliked: false,
    comments: [comment4, comment5, comment3]
}


let post3: Post = {
    id: 3,
    isImage: false,
    isVideo: true,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    postedDate: "Published 3 days ago",
    description: "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
    userDetails: user3,
    likes: 11,
    dislikes: 19,
    isLiked: false,
    isDisliked: false,
    comments: []
}


let post4: Post = {
    id: 4,
    isImage: false,
    isVideo: true,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    postedDate: "Published 3 mins ago",
    description: "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
    userDetails: user4,
    likes: 7,
    dislikes: 0,
    isLiked: false,
    isDisliked: false,
    comments: []
}


let post5: Post = {
    id: 5,
    isImage: false,
    isVideo: true,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    postedDate: "Published 47 mins ago",
    description: "In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
    userDetails: user5,
    likes: 0,
    dislikes: 0,
    isLiked: false,
    isDisliked: false,
    comments: []
}

let post6: Post = {
    id: 6,
    isImage: true,
    isVideo: false,
    url: "https://images.unsplash.com/photo-1685987170774-753fd741ac1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    postedDate: "Published 56mins ago",
    description: "Read Carefully, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    userDetails: user6,
    likes: 2,
    dislikes: 30,
    isLiked: false,
    isDisliked: false,
    comments: [comment1, comment2, comment3]
}


let post7: Post = {
    id: 7,
    isImage: true,
    isVideo: false,
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    postedDate: "Published 12mins ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    userDetails: user7,
    likes: 1110,
    dislikes: 39,
    isLiked: false,
    isDisliked: false,
    comments: [comment1, comment2, comment3, comment4, comment5]
}






const USERS: User[] = [
    {id: 1, userDetails: user1, posts: [post1, post8], feed:[post6, post5, post7], following : [user2, user3], recommendations: [user4, user5, user6, user7], bio: bio},
    {id: 2, userDetails: user2, posts: [post2], following : [user1, user3], bio: bio2},
    {id: 3, userDetails: user3, posts: [post3], following : [user2, user1, user4], bio: bio3},
    {id: 4, userDetails: user4, posts: [post4], following : [user3, user5, user7 ], bio: bio4},
    {id: 5, userDetails: user5, posts: [post5], following : [user3, user4, user6], bio: bio5},
    {id: 6, userDetails: user6, posts: [post6], following : [user3, user4, user6, user7],  bio: bio6},
    {id: 7, userDetails: user7, posts: [post7], following : [user3, user4, user6, user5],  bio: bio7},
]

const authUser = USERS[0];



export {USERS};
export default authUser