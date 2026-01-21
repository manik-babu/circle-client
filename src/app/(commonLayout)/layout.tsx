import Navber from "@/components/layouts/Navber";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navber />
            {children}
        </div>
    );
}