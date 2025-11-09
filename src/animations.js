export const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer = {
    show: { transition: { staggerChildren: 0.2 } }
};
