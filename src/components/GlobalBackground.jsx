function GlobalBackground() {
    return (
        <div className="
      fixed inset-0
      -z-10
      overflow-hidden
      bg-black
    ">

            {/* MAIN GLOW 😎🔥 */}
            <div className="
        gradient-glow
        absolute
        w-[900px]
        h-[900px]
        bg-gradient-to-r
        from-green-400/20
        via-brandBlue/20
        to-purple-500/20
        blur-[180px]
        rounded-full
        top-[-300px]
        left-[-250px]
      " />

            {/* SECONDARY GLOW ✨ */}
            <div className="
        gradient-glow
        absolute
        w-[700px]
        h-[700px]
        bg-gradient-to-r
        from-cyan-400/20
        to-green-400/20
        blur-[160px]
        rounded-full
        bottom-[-250px]
        right-[-200px]
      " />

            {/* SOFT GOLD ACCENT 💎🔥 */}
            <div className="
        gradient-glow
        absolute
        w-[500px]
        h-[500px]
        bg-gradient-to-r
        from-brandGold/10
        to-transparent
        blur-[140px]
        rounded-full
        top-[40%]
        left-[30%]
      " />

        </div>
    );
}

export default GlobalBackground;
