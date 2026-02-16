function Footer() {
    return (
        <footer className="
      relative
      mt-32
      border-t border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
    ">

            {/* Glow Accent 😎🔥 */}
            <div className="
        absolute inset-0
        bg-gradient-to-r
        from-brandBlue/10
        via-transparent
        to-brandGold/10
        blur-3xl
        opacity-40
      " />

            <div className="
        relative
        max-w-7xl
        mx-auto
        px-12
        py-16
        grid
        md:grid-cols-3
        gap-12
        text-sm
      ">

                {/* BRAND */}
                <div>
                    <h3 className="
            text-xl
            font-bold
            bg-gradient-to-r
            from-white
            to-gray-400
            bg-clip-text
            text-transparent
            mb-4
          ">
                        MoneyClone
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                        Quick & Hassle-Free Personal Loans.
                        100% Digital Process. Secure & Transparent.
                    </p>
                </div>

                {/* LINKS */}
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Quick Links
                    </h4>

                    <div className="flex flex-col gap-2 text-gray-400">
                        <span className="hover:text-white cursor-pointer transition">Personal Loan</span>
                        <span className="hover:text-white cursor-pointer transition">Business Loan</span>
                        <span className="hover:text-white cursor-pointer transition">PayOff</span>
                    </div>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-white font-semibold mb-4">
                        Contact
                    </h4>

                    <div className="flex flex-col gap-2 text-gray-400">
                        <span>support@MoneyClone.com</span>
                        <span>Mumbai, India</span>
                    </div>
                </div>

            </div>

            {/* Bottom Bar 💎🔥 */}
            <div className="
        border-t border-white/10
        text-center
        text-xs
        text-gray-500
        py-6
      ">
                © 2026 MoneyClone. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;
