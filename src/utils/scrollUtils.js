export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

export const scrollToId = id => {
    document.location.href = '#';
    document.location.href = `#${id}`;
}