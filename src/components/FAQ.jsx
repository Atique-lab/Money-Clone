import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "../data/faqs";
import { FaPlus } from "react-icons/fa";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="px-12 py-24">

            <div className="max-w-5xl mx-auto">

                {/* TITLE */}
                <h2 className="text-5xl font-bold text-white mb-16">
                    FAQs
                </h2>

                <div className="space-y-4">

                    {faqs.map((faq, index) => {

                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                layout
                                className="
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  transition-all duration-300
                  hover:border-green-400
                  hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
                "
                            >

                                {/* QUESTION */}
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="
                    flex justify-between items-center
                    p-5
                  "
                                >

                                    <p className="text-white font-medium">
                                        {faq.question}
                                    </p>

                                    {/* ICON ROTATION 😎🔥 */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-green-400"
                                    >
                                        <FaPlus />
                                    </motion.div>

                                </div>

                                {/* ANSWER */}
                                <AnimatePresence>

                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="px-5 pb-5"
                                        >

                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>

                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default FAQ;
