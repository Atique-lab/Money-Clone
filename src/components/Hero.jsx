import Section from "./Section";
import Reveal from "./Reveal";
import Particles from "./Particles";
import { motion, useScroll, useTransform } from "framer-motion";


function Hero() {

    const { scrollY } = useScroll();

    const glowY = useTransform(scrollY, [0, 500], [0, 150]);
    const glowOpacity = useTransform(scrollY, [0, 300], [0.35, 0.1]);

    return (
        <section className="relative overflow-hidden">

            <Particles />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-12 py-24">

                <Reveal>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="
                            text-7xl
                            font-extrabold
                            leading-[1.05]
                            bg-gradient-to-r
                            from-white
                            to-gray-400
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Personal Loan <br />

                        <span className="
                            bg-gradient-to-r
                            from-green-300
                            to-green-500
                            bg-clip-text
                            text-transparent
                        ">
                            Simplified
                        </span>
                    </motion.h1>
                </Reveal>

                <p className="text-gray-400 text-lg mt-6">
                    Give wings to your dreams. No collateral required.
                </p>

                <div className="flex gap-4 mt-10">

                    <button className="
                        bg-white
                        text-black
                        px-8 py-4
                        rounded-xl
                        font-semibold
                        hover:scale-105
                        hover:shadow-xl
                        transition-all duration-300
                    ">
                        Sign in with Google
                    </button>

                    <button className="
                        bg-gradient-to-r
                        from-green-400
                        to-green-500
                        text-black
                        px-8 py-4
                        rounded-xl
                        font-semibold
                        hover:scale-105
                        hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]
                        transition-all duration-300
                    ">
                        Check Eligibility
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Hero;
