import LoanCard from "../components/LoanCard";

const products = [
    { title: "Personal Loan", desc: "Up to ₹25 Lakhs" },
    { title: "Business Loan", desc: "Grow your business" },
    { title: "PayOff", desc: "Debt consolidation" },
];

import ProductCard from "./ProductCard";
import Reveal from "./Reveal";



function Products() {
    return (
        <section className="px-12 py-24 relative">

            <div className="max-w-7xl mx-auto relative">

                {/* GLOW BACKGROUND ✨ */}
                <div className="absolute inset-0 flex justify-center">

                    <div className="
            w-[900px]
            h-[400px]
            bg-gradient-to-r
            from-yellow-500/20
            via-purple-500/20
            to-cyan-500/20
            blur-[120px]
            opacity-70
          " />

                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                    <Reveal>
                        <h2 className="
            text-4xl
            font-bold
            text-white
            mb-16
          ">
                            Our Products
                        </h2>
                    </Reveal>
                    <Reveal>
                        <div className="grid grid-cols-3 gap-8">

                            <ProductCard
                                title="Personal Loan"
                                amount="Get upto 20 Lacs"
                                description="Instant Approval. Quick Disbursal."
                                gradient="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
                                type="personal"
                            />

                            <ProductCard
                                title="Business Loan"
                                amount="Get upto 1 Cr"
                                description="Quick approvals. No collateral."
                                gradient="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                                type="business"
                            />

                            <ProductCard
                                title="PayOff"
                                amount="Debt Consolidation"
                                description="Lower Interest Rates. Single EMI."
                                gradient="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                                type="payoff"
                            />

                        </div>
                    </Reveal>

                </div>

            </div>

        </section>
    );
}

export default Products;
