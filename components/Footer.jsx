import {
    Phone,
    Mail,
    Facebook,
    Send,
} from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#171A21FF] w-full h-48 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 items-center space-y-4">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Address</h1>
                    <p>Russian Federation Boulevard, Toul Kork, Phnom Penh, Cambodia</p>
                </div>
                <div></div>
                <div></div>
                <div className="space-y-4">
                    <h1 className=" text-2xl font-bold">Contact</h1>
                    <div className="space-y-2">
                        <p className="flex gap-2"><Phone/> +855 12 345 678</p>
                        <p className="flex gap-2"><Mail/> sousodara@gmail.com</p>
                        <div className="flex gap-2">
                            <Facebook/>
                            <Send/>
                        </div>
                    </div>

                </div>
            </div>
            <p className="flex justify-center">&copy; Copyright by Cube Gaming Store</p>
        </footer>
    );
}

export default Footer;