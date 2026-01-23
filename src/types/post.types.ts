export type Post = {
    id: string;
    caption: string;
    attachment: string | null;
    authorId: string;
    status: "PRIVATE" | "PUBLIC";
    createdAt: string;
    updatedAt: string;
    author: {
        id: string;
        name: string;
        image: string;
    },
    _count: {
        likes: number;
        comments: number;
    }
}