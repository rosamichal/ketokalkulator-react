import { useState, useEffect } from "react";
import { StyledArrow } from './styles';
import { scrollToTop } from '../../../utils/scrollUtils';

const ScrollTopArrow = () => {
    const [showScroll, setShowScroll] = useState(false)


    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 200) {
                setShowScroll(true)
            } else if (showScroll && window.pageYOffset <= 200) {
                setShowScroll(false)
            }
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [showScroll]);


    return (
        <StyledArrow show={showScroll} onClick={scrollToTop} />
    )
}

export default ScrollTopArrow