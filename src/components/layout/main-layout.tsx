import Navbar from "@/components/layout/navbar/index";
import Footer from "@/components/layout/footer/index";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}