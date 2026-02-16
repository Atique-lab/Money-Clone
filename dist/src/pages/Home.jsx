import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Products";
import EmiCalculator from "../components/EmiCalculator";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LoanCard from "../components/LoanCard";
import Partners from "../components/Partners";
import Eligibility from "../components/Eligibility";
import Testimonials from "../components/Testimonials";





function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <EmiCalculator />
            <Eligibility />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}

export default Home;
