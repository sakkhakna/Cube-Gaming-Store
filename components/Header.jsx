import { Box } from 'lucide-react';
import Link from 'next/link';

function Header() {
    return (
        <Link href="/">
        <header className="bg-[#171A21FF] w-full h-40 flex text-6xl font-bold justify-center items-center gap-5 ">
            <div className="flex text-[#FF4500FF] gap-5">
                <Box className="h-16 w-16"/>
                <h1>CUBE</h1>
            </div>
            <div className="text-white flex gap-5">
                <h1>GAMING</h1>
                <h1>STORE</h1>
            </div>
        </header>
        </Link>
    )
}

export default Header;