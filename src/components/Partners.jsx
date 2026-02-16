import partners from "../data/partners";

function Partners() {
    return (
        <section className="px-12 py-20">
            <h2 className="text-3xl font-bold text-white mb-12">
                Our Lending Partners
            </h2>

            <div className="grid grid-cols-6 gap-6">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-xl
              p-4
              flex items-center justify-center
              hover:border-brandBlue
              hover:shadow-[0_0_20px_rgba(54,100,231,0.25)]
              transition-all duration-300
            "
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Partners;
