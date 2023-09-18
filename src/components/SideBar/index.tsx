import { ChevronDown, Home, Search } from "lucide-react";
import { MainNavigation } from "./Navigate";
import { Profile } from "./Profile";

export default function SideBar() {
    return (
        <div className="flex flex-col w-80 h-screen bg-zinc-800 border-r border-zinc-100 overflow-y-auto">
            <div className="px-6 pt-8">
                <div className="flex items-center justify-between">
                    <img src="/logo.png" alt="logo" className="w-16 h-16 rounded-full mb-3" />
                    <div className="flex flex-col">
                        <strong className="text-center font-extrabold ml-2 text-4xl mb-2"> Creche </strong>
                        <a className="font-medium text-sm">Nossa Senhora da Conceição</a>
                    </div>
                </div>
                <div className="flex mt-5 mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700">
                    <Search className="text-zinc-100 w-5 h-5" />
                    <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" placeholder='Digite aqui..' />
                </div>
                <div className="mt-5">
                    <MainNavigation />
                </div>
                <div className="mt-56">
                    <div className="h-px bg-zinc-200 mb-6" />
                    <Profile />
                </div>
            </div>
        </div>
    )
}