export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
};

export const isMobileUi = () => window.innerWidth <= 767;
