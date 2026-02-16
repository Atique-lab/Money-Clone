function Button({ children, variant = "primary" }) {
    const base =
        "px-8 py-4 rounded-xl font-semibold transition hover:scale-105";

    const styles = {
        primary: "bg-brandBlue text-white hover:bg-blue-600",
        gold: "bg-brandGold text-black hover:opacity-90",
    };


    return (
        <button className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
}

export default Button;
