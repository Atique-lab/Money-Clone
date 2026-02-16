function Particles() {

    const particles = Array.from({ length: 40 });

    return (
        <div className="
      absolute inset-0
      overflow-hidden
      z-0
    ">

            {particles.map((_, i) => {

                const size = Math.random() * 6 + 4;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;

                return (
                    <div
                        key={i}
                        className="particle absolute rounded-full bg-white/10"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}

        </div>
    );
}

export default Particles;
