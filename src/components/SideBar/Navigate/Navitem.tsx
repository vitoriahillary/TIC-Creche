import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

type NavItemProps ={
    title: string,
    icon: ElementType
}

export function NavItem ({title, icon: Icon}: NavItemProps){
    return(
        <a href="" className="group flex items-center gap-3 rounded px-3 py-2 border border-transparent bg-zinc-700 hover:bg-indigo-600 hover:border hover:border-white">
            <Icon className="h-5 w-5 text-zinc-50"/>
            <span className="font-medium text-zinc-50 group-hover:text-voilet-200">
                {title}
            </span>
            <ChevronDown className="ml-auto h-5 w-5 text-zinc-50 group-hover:text-zinc-300"/>
        </a>
    )
}