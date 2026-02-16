import { useState } from "react";
import { motion } from "framer-motion";
import eligibilityData from "../data/eligibilityData";
import Reveal from "./Reveal";


import {
    FaUser,
    FaChartLine,
    FaMapMarkerAlt,
    FaFlag,
    FaWallet,
    FaGlobe,
    FaFileAlt,
} from "react-icons/fa";

function Eligibility() {
    const [activeTab, setActiveTab] = useState("personal");

    const currentData = eligibilityData[activeTab];

    /* ICON MAPPING 😎🔥 */
    const iconMap = {
        Age: <FaUser />,
        "Credit Score": <FaChartLine />,
        "Serviceable Area": <FaMapMarkerAlt />,
        Nationality: <FaFlag />,
        "Monthly Salary": <FaWallet />,
        Mode: <FaGlobe />,
    };

    return (
        <section className="px-12 py-24 relative">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-5xl font-bold text-white text-center mb-6">
                    Documents Required <br /> and Eligibility Criteria
                </h2>

                {/* TABS */}
                <div className="flex justify-center gap-4 mb-16">

                    {["personal", "business", "payoff"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                px-6 py-2
                rounded-full
                text-sm
                transition-all duration-300
                cursor-pointer
                ${activeTab === tab
                                    ? "bg-green-500 text-black shadow-[0_0_25px_rgba(34,197,94,0.7)]"
                                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                                }
              `}
                        >
                            {tab === "personal" && "Personal Loan"}
                            {tab === "business" && "Business Loan"}
                            {tab === "payoff" && "PayOff"}
                        </button>
                    ))}

                </div>

                <Reveal>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 gap-10"
                    >

                        {/* LEFT */}
                        <div>

                            <h3 className="text-white font-semibold mb-6">
                                Eligibility Criteria
                            </h3>

                            <div className="grid grid-cols-2 gap-4">

                                {currentData.eligibility.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="
                    bg-white/5
                    border border-white/10
                    rounded-xl
                    p-4
                    cursor-pointer
                    transition-all duration-300
                    hover:border-green-400
                    hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]
                  "
                                    >

                                        <div className="flex items-center gap-3 mb-2">

                                            <div className="
                      text-green-400
                      text-lg
                    ">
                                                {iconMap[item.title] || <FaUser />}
                                            </div>

                                            <p className="text-gray-400 text-sm">
                                                {item.title}
                                            </p>

                                        </div>

                                        <p className="text-white font-medium">
                                            {item.value}
                                        </p>

                                    </motion.div>
                                ))}

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div>

                            <h3 className="text-white font-semibold mb-6">
                                Documents Required
                            </h3>

                            <div className="
              bg-green-500/10
              border border-green-500/30
              rounded-2xl
              p-6
              space-y-4
            ">

                                {currentData.documents.map((doc, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 8 }}
                                        className="
                    flex items-center gap-3
                    border-b border-white/10
                    pb-3
                    text-gray-300
                    cursor-pointer
                    transition-all duration-300
                    hover:text-white
                  "
                                    >

                                        <FaFileAlt className="text-green-400" />

                                        {doc}

                                    </motion.div>
                                ))}

                            </div>

                        </div>

                    </motion.div>
                </Reveal>

            </div>

        </section>
    );
}

export default Eligibility;
