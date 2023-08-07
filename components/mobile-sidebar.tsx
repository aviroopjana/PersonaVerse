import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu/>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-32 pt-10 p-0 bg-secondary" >
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}