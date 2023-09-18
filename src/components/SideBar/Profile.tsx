import { LogOut, User2 } from "lucide-react";

export function Profile() {
    return(
        <div className="flex flex-row items-center gap-3">
            <User2 className="h-8 w-8 rounded-full"/>
            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-50"> Vitoria Hillary Alarcon </span>
                <span className="text-sm text-zinc-100 truncate"> vitoriahalarcon@learnhub.com </span>
            </div>
            <button type="button" className="group ml-auto p-2 hover:bg-indigo-700 rounded-md">
                <LogOut className="w-5 h-5 text-zinc-500 group-hover:text-zinc-100"/>
            </button>
        </div>
    )
}