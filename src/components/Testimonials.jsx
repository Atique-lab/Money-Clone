import testimonials from "../data/testimonials";
import { motion } from "framer-motion";
import Reveal from "./Reveal";


function Testimonials() {
    return (
        <section className="px-12 py-24">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-5xl font-bold text-white mb-16">
                    From Our Community
                </h2>

                <Reveal>
                    <div className="grid md:grid-cols-3 gap-6">

                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="
                relative
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-6
                transition-all duration-300
                hover:border-green-400
                hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
              "
                            >

                                {/* GLOW EFFECT 😎🔥 */}
                                <div className="
                absolute inset-0
                rounded-2xl
                opacity-0
                hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-green-400/10
                to-transparent
              " />

                                <div className="relative z-10">

                                    {/* QUOTE */}
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        “{item.text}”
                                    </p>

                                    {/* USER */}
                                    <div>
                                        <p className="text-white font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {item.role}
                                        </p>
                                    </div>

                                </div>

                            </motion.div>
                        ))}

                    </div>
                </Reveal>

            </div>

        </section>
    );
}

export default Testimonials;
