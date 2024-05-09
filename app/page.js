import UserLayout from "@/app/UserLayout";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Image from 'next/image'

export default function Home() {
  return (
      <UserLayout>
          <section>
              <div className="flex flex-col gap-4 md:gap-10">
                  <div>
                  <h1 className="text-3xl text-white font-extrabold mb-4">FEATURED & RECOMMENDED</h1>
                  <div className="bg-white max-w-7xl h-[550px]"></div>
                  </div>
              </div>
          </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 my-8">
                    <div className="flex flex-col">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-3xl text-white font-extrabold">Top Selling</h1>
                            <Button variant="outline" className="bg-black text-white hover:bg-[#f5f5f5]">View
                                More</Button>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-3xl text-white font-extrabold">New Release</h1>
                            <Button variant="outline" className="bg-black text-white hover:bg-[#f5f5f5]">View
                                More</Button>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-3xl text-white font-extrabold">Promotion</h1>
                            <Button variant="outline" className="bg-black text-white hover:bg-[#f5f5f5]">View
                                More</Button>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-lg hover:bg-[#171A21FF] ">
                            <div className="w-20 h-28 bg-[#f5f5f5] mx-4"></div>
                            <div className="text-white">
                                <p>Spider-Man 2</p>
                                <p>$69.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          <section>
              {/*<div className="bg-[#171A21FF] max-w-7xl h-[500px] rounded-lg"></div>*/}
              <div className="max-w-7xl grid grid-cols-4 gap-10 text-white mb-10">
                  <div className="col-span-4 bg-[#171A21FF] max-w-7xl h-[600px] rounded-lg flex justify-between items-center p-[175px]">
                      <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-bold text-[#FF4500FF]">Best</h1>
                            <h1 className="text-6xl font-bold text-[#FF4500FF]">Gaming</h1>
                            <h1 className="text-8xl font-bold">Console</h1>
                            <Button className="bg-[#FF4500FF] text-white">View More</Button>
                      </div>
                      <Image src="/next.svg" alt="Image" width={400} height={400}/>
                  </div>
                  <div className="col-span-2 bg-[#171A21FF] w-full h-[400px] rounded-lg">
                      <h1 className="text-xl font-bold text-[#FF4500FF]">Best</h1>
                      <h1 className="text-4xl font-bold text-[#FF4500FF]">Gaming</h1>
                      <h1 className="text-6xl font-bold">Console</h1>
                      <Button className="bg-[#FF4500FF] text-white">View More</Button></div>
                  <div className="col-span-2 bg-[#171A21FF] w-full h-[400px] rounded-lg">
                      <h1 className="text-xl font-bold text-[#FF4500FF]">Best</h1>
                      <h1 className="text-4xl font-bold text-[#FF4500FF]">Gaming</h1>
                      <h1 className="text-6xl font-bold">Console</h1>
                      <Button className="bg-[#FF4500FF] text-white">View More</Button>
                  </div>
                  <div className="bg-[#171A21FF] w-full h-[250px] rounded-lg">Hello</div>
                  <div className="bg-[#171A21FF] w-full h-[250px] rounded-lg">Hello</div>
                  <div className="bg-[#171A21FF] w-full h-[250px] rounded-lg">Hello</div>
                  <div className="bg-[#171A21FF] w-full h-[250px] rounded-lg">Hello</div>
              </div>
          </section>

      </UserLayout>
  );
}
