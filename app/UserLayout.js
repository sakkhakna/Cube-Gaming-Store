import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
        <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
}