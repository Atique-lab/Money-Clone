function Section({ children, className = "" }) {
    return (
        <section className={`relative overflow-hidden ${className}`}>
            {children}
        </section>
    );
}

export default Section;
