import UserLayout from "@/app/UserLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";


function ConsolePage() {
    return (
        <UserLayout>
            <h1 className="text-3xl text-white font-extrabold mb-4">CONSOLE</h1>
            <div className="bg-white max-w-7xl h-[550px]"></div>
            <div className="grid grid-cols-3 gap-4 my-10">
                <Card>
                    <CardHeader className="bg-[#171A21FF] text-white rounded-lg border border-none">
                        <Image src="/next.svg" alt="Image" className="mx-auto m-4" width={200} height={200}/>
                        <CardTitle>Sony PlayStation 5 Digital Edition Console</CardTitle>
                        <CardDescription>$399</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="bg-[#171A21FF] text-white rounded-lg border border-none">
                        <Image src="/next.svg" alt="Image" className="mx-auto m-4" width={200} height={200}/>
                        <CardTitle>Sony PlayStation 5 Digital Edition Console</CardTitle>
                        <CardDescription>$399</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="bg-[#171A21FF] text-white rounded-lg border border-none">
                        <Image src="/next.svg" alt="Image" className="mx-auto m-4" width={200} height={200}/>
                        <CardTitle>Sony PlayStation 5 Digital Edition Console</CardTitle>
                        <CardDescription>$399</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="bg-[#171A21FF] text-white rounded-lg border border-none">
                        <Image src="/next.svg" alt="Image" className="mx-auto m-4" width={200} height={200}/>
                        <CardTitle>Sony PlayStation 5 Digital Edition Console</CardTitle>
                        <CardDescription>$399</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="bg-[#171A21FF] text-white rounded-lg border border-none">
                        <Image src="/next.svg" alt="Image" className="mx-auto m-4" width={200} height={200}/>
                        <CardTitle>Sony PlayStation 5 Digital Edition Console</CardTitle>
                        <CardDescription>$399</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="bg-[#171A21FF] text-white rounded-lg border border-none">
                        <Image src="/next.svg" alt="Image" className="mx-auto m-4" width={200} height={200}/>
                        <CardTitle>Sony PlayStation 5 Digital Edition Console</CardTitle>
                        <CardDescription>$399</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </UserLayout>
    );
}

export default ConsolePage;