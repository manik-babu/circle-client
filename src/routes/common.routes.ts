import { Route } from "@/types";

export const commonRoutes: Route = {
    title: "Main app route that visible for every one",
    items: [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Friends",
            url: '/friends'
        },
        {
            title: "Messenger",
            url: '/messenger'
        },
        {
            title: "Notifications",
            url: '/notifications'
        },
        {
            title: "Profile",
            url: '/profile'
        }
    ]
}