import { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell } from "recharts";

function EmiCalculator() {

    const [amount, setAmount] = useState(1550000);
    const [rate, setRate] = useState(12.75);
    const [tenure, setTenure] = useState(36);

    const monthlyRate = rate / 12 / 100;

    const emi =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);

    const totalPayment = emi * tenure;
    const interest = totalPayment - amount;

    const data = [
        { name: "Principal", value: amount },
        { name: "Interest", value: interest }
    ];

    const COLORS = ["#d1fae5", "#22c55e"];

    const quickAmounts = [100000, 500000, 1000000, 1500000, 2000000];

    return (
        <section className="px-12 py-24">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-5xl font-bold text-white mb-2">
                    EMI Calculator
                </h2>

                <p className="text-green-400 mb-12">
                    Calculate EMI for your Personal Loan
                </p>

                <div className="grid grid-cols-2 gap-12">

                    {/* LEFT SIDE */}
                    <div>

                        {/* INPUT */}
                        <div className="mb-3">
                            <label className="text-gray-400 text-sm">
                                Loan Amount
                            </label>

                            <input
                                type="text"
                                value={amount.toLocaleString()}
                                readOnly
                                className="
                  w-full
                  mt-2
                  bg-white
                  text-black
                  text-2xl
                  px-6 py-4
                  rounded-2xl
                  font-medium
                "
                            />
                        </div>

                        <p className="text-gray-500 text-sm mb-6">
                            {amount.toLocaleString()}
                        </p>

                        {/* QUICK BUTTONS */}
                        <div className="flex gap-3 mb-10">
                            {quickAmounts.map((value) => (
                                <button
                                    key={value}
                                    onClick={() => setAmount(value)}
                                    className="
                    px-4 py-2
                    rounded-xl
                    bg-white/5
                    text-gray-400
                    text-sm
                    hover:bg-white/10
                    hover:text-white
                    transition
                  "
                                >
                                    {value / 100000}L
                                </button>
                            ))}
                        </div>

                        {/* RATE */}
                        <div className="mb-10">
                            <div className="flex justify-between mb-2">
                                <label className="text-gray-400 text-sm">
                                    Interest Rate (p.a)
                                </label>

                                <span className="
                  bg-white/10
                  px-3 py-1
                  rounded-lg
                  text-white
                  text-sm
                ">
                                    {rate}%
                                </span>
                            </div>

                            <input
                                type="range"
                                min="5"
                                max="20"
                                step="0.25"
                                value={rate}
                                onChange={(e) => setRate(+e.target.value)}
                                className="w-full accent-green-500"
                            />
                        </div>

                        {/* TENURE */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-gray-400 text-sm">
                                    Loan Tenure
                                </label>

                                <span className="
                  bg-white/10
                  px-3 py-1
                  rounded-lg
                  text-white
                  text-sm
                ">
                                    {tenure}M
                                </span>
                            </div>

                            <input
                                type="range"
                                min="6"
                                max="60"
                                step="6"
                                value={tenure}
                                onChange={(e) => setTenure(+e.target.value)}
                                className="w-full accent-green-500"
                            />
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-10
            flex flex-col
            items-center
          ">

                        {/* DONUT CHART */}
                        <PieChart width={250} height={250}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={3}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                        </PieChart>

                        {/* EMI */}
                        <p className="text-gray-400 text-sm mt-4">
                            Monthly EMI
                        </p>

                        <motion.h3
                            key={emi}
                            initial={{ scale: 0.9, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="
                text-4xl
                font-bold
                text-white
              "
                        >
                            ₹ {Math.round(emi).toLocaleString()}
                        </motion.h3>

                        {/* LEGEND */}
                        <div className="flex gap-6 mt-6 text-sm">

                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-3 h-3 rounded-full bg-[#d1fae5]" />
                                Principal Amount
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                Interest Payable
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default EmiCalculator;
