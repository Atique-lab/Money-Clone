function Navbar() {
    return (
        <nav className="
      fixed top-0 w-full z-50
      backdrop-blur-md
    ">

            <div className="
        max-w-7xl mx-auto
        px-12 py-6
        flex justify-between items-center
      ">

                {/* LOGO 😎🔥 */}
                <h1 className="
          text-2xl
          font-bold
          text-white
        ">
                    MoneyClone
                </h1>

                {/* MENU */}
                <div className="
          flex gap-10
          text-sm
          text-gray-300
        ">

                    <span className="hover:text-white transition cursor-pointer">
                        Personal Loan
                    </span>

                    <span className="hover:text-white transition cursor-pointer">
                        Business Loan
                    </span>

                    <span className="hover:text-green-400 transition cursor-pointer">
                        PayOff
                    </span>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;
