function LoanCard({ title, amount, description }) {
    return (
        <div className="
      bg-white/5 
      backdrop-blur-md 
      border border-white/10 
      rounded-2xl 
      p-6
      hover:border-brandBlue
      hover:shadow-[0_0_25px_rgba(54,100,231,0.3)]
      hover:-translate-y-2
      transition-all
      duration-300
      cursor-pointer
    ">
            <h3 className="text-xl font-semibold text-white mb-2">
                {title}
            </h3>

            <p className="text-brandGold font-medium mb-2">
                {amount}
            </p>

            <p className="text-gray-400 text-sm">
                {description}
            </p>
        </div>
    );
}

export default LoanCard;
