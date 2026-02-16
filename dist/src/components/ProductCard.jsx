import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaCreditCard } from "react-icons/fa";

function ProductCard({ title, amount, description, gradient, type }) {

    const icons = {
        personal: <FaUser />,
        business: <FaBriefcase />,
        payoff: <FaCreditCard />
    };

    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}   // FLOAT EFFECT 😎🔥
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={`
        relative
        rounded-2xl
        p-[1px]
        ${gradient}
        transition-all duration-300
        hover:scale-[1.04]
        hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
      `}
        >

            {/* INNER CARD */}
            <div className="
        bg-black
        rounded-2xl
        p-7
        h-full
        border border-white/5
        group
      ">

                {/* ICON */}
                <div className="
          text-2xl
          text-white/70
          mb-10
          group-hover:text-white
          transition-colors
          duration-300
        ">
                    {icons[type]}
                </div>

                {/* TITLE */}
                <h3 className="
          text-xl
          font-semibold
          text-white
          mb-2
        ">
                    {title}
                </h3>

                {/* AMOUNT */}
                <p className="
          text-gray-400
          text-sm
          mb-3
        ">
                    {amount}
                </p>

                {/* DESCRIPTION */}
                <p className="
          text-gray-500
          text-sm
          leading-relaxed
        ">
                    {description}
                </p>

            </div>
        </motion.div>
    );
}

export default ProductCard;
