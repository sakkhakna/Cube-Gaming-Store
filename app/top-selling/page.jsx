import UserLayout from "@/app/UserLayout";

function TopSellingPage() {
    return (
        <UserLayout>
            <h1 className="text-3xl text-white font-extrabold mb-4">Top Selling</h1>
            <div className="bg-[#171A21FF] max-w-7xl h-[550px]">
                <div className="grid grid-cols-3 gap-6 p-10 h-full">
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                </div>
            </div>
            <div className="bg-[#171A21FF] max-w-7x my-8 p-10">
                <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                </div>
                <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                </div>
                <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                </div>
            </div>
            <div className="flex my-8 w-full">
                <div className="bg-white w-[350px] h-[450px] relative">
                    <div className="bg-[#171A21FF] w-[300px] text-white font-bold text-4xl absolute right-0 top-[90px] p-3">Top Selling on PlayStation</div>
                </div>
                <div className="grid grid-cols-3 gap-3 py-10 px-4 w-full">
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                    <div className="bg-white">Hello</div>
                </div>
            </div>
        </UserLayout>
    )


}

export default TopSellingPage;