const features = [
    "Flexible Tenure",
    "24x7 Support",
    "Instant Approval",
    "Loans up to ₹20 Lakhs",
    "100% Digital Process",
    "Low Interest Rates",
    "Quick Disbursal",
    "Minimal Documentation",
    "Secure & Private",
];

function Features() {
    return (
        <section className="
      py-10
      overflow-hidden
      text-gray-400
      text-sm
    ">

            <div className="
        marquee
        flex gap-16
      ">

                {[...features, ...features].map((item, i) => (
                    <span
                        key={i}
                        className="
              whitespace-nowrap
              hover:text-white
              transition-colors duration-300
              cursor-pointer
            "
                    >
                        {item}
                    </span>
                ))}

            </div>

        </section>
    );
}

export default Features;
