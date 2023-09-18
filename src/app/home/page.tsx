import SideBar from "@/components/SideBar";

export default function Home() {
    return (
        <>
            <div className="flex-col bg-zinc-800">
                <SideBar />
            <div className="flex flex-col">
                <h1 className="text-zinc-100 text-right">Bem-Vindo </h1>
            </div>
            </div>
        </>
    )
}