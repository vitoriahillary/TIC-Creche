import { Archive, Book, FileEdit, Folders, Home, Landmark, SquareStack, Truck, Users } from "lucide-react";
import { NavItem } from "./Navitem";

export function MainNavigation() {
    return(
        <nav className="space-y-0.5">
            <NavItem title="Inicio" icon={Home}/>
            <NavItem title="Patrimonios" icon={Landmark}/>
            <NavItem title="Estoque" icon={Archive}/>
            <NavItem title="Fornecedor" icon={Truck}/>
            <NavItem title="Usuarios" icon={Users}/>
        </nav>
    )
}