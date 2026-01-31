import MainLayout from "@/components/layout/main-layout";

export default function OtherLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}