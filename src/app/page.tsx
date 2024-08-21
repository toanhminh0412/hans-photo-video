import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <WhoWeAre />
            <Footer />
        </>
    );
}
