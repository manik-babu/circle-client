import { commonRoutes } from "@/routes/common.routes";
import Link from "next/link";


export default function Navber() {
    const { items: routes } = commonRoutes;
    return (
        <div className="fixed bottom-4 flex justify-center items-center w-screen h-16">
            <ul className="relative flex w-xl justify-around items-center bg-gray-800 h-full rounded-md">
                {routes.map((route, index) => (
                    <li key={index}><Link href={route.url}>{route.title}</Link></li>
                ))}
            </ul>

        </div>
    );
}