import {
    Home,
    Gamepad2,
    Joystick,
    Tv2,
    Mail,
    User,
} from 'lucide-react';
import { Input } from "@/components/ui/input"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";


function Navbar() {
    return (
        <nav className="bg-[#171A21FF] max-w-7xl mx-auto p-4 my-8 flex justify-between items-center">
        <Menubar className="bg-[#171A21FF] text-white border-none">
            <MenubarMenu>
                <Link href="/">
                    <MenubarTrigger className="gap-2 text-sm hover:text-[#FF4500FF]"><Home /> Home</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="gap-2 text-sm hover:text-[#FF4500FF]"><Gamepad2 /> Categories</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem><Link href="/top-selling">Top Selling</Link></MenubarItem>
                    <MenubarItem>New Releases</MenubarItem>
                    <MenubarItem>Special Offers</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="gap-2 text-sm hover:text-[#FF4500FF]"><Joystick /> Accessories</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem><Link href="/mouse">Mouse</Link></MenubarItem>
                    <MenubarItem><Link href="/keyboard">Keyboard</Link> </MenubarItem>
                    <MenubarItem>Headphone</MenubarItem>
                    <MenubarItem>Controller</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="gap-2 text-sm hover:text-[#FF4500FF]"><Tv2 /> Console</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem><Link href="/console">Console</Link></MenubarItem>
                    <MenubarItem>Gaming PC</MenubarItem>
                    <MenubarItem>Gaming Laptop</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="gap-2 text-sm hover:text-[#FF4500FF]"><User /> About</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <Link href="/contact">
                <MenubarTrigger className="gap-2 text-sm hover:text-[#FF4500FF]"><Mail />Contact</MenubarTrigger>
                </Link>
            </MenubarMenu>
        </Menubar>
        <Input className="w-1/4" type="text" placeholder="Search" />
    </nav>


        // <nav className="bg-[#171A21FF] max-w-7xl mx-auto text-white p-4 my-8 flex justify-between items-center">
        //     <ul className="flex gap-6 text-lg">
        //         <li className="flex gap-2"><Home/> Home</li>
        //         <li className="flex gap-2"><Gamepad2 /> Categories</li>
        //         <li className="flex gap-2"><Joystick />Accessories</li>
        //         <li className="flex gap-2"><Tv2 />Console</li>
        //         <li className="flex gap-2"><User />About</li>
        //         <li className="flex gap-2"><Mail />Contact</li>
        //     </ul>
        //     <Input className="w-1/4" type="text" placeholder="Search" />
        // </nav>
    );
}

export default Navbar;