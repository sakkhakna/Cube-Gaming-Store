import UserLayout from "@/app/UserLayout";
import {
    MapPin,
    Phone,
    Mail,
} from 'lucide-react';

function ContactPage() {
    return (
        <UserLayout>
            <div className="w-1/3 bg-[#171A21FF] p-8 ">
                <h1 className="text-[#FF4500FF] text-4xl font-bold">Contact</h1>
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                    <div className="text-[#FF4500FF] flex text-lg gap-2 font-bold items-center">
                        <Phone className="w-6"/> Phone Number:
                    </div>
                    <p>(+855) 12 345 678</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                    <div className="text-[#FF4500FF] flex text-lg gap-2 font-bold items-center">
                        <Mail className="w-6"/> Email:
                    </div>
                    <p>cube_gaming_store_168@gmail.com</p>
                </div>
            </div>
        </UserLayout>
    )
}

export default ContactPage;