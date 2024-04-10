import React, { useEffect, useState } from 'react';
import Style from './BackToTopButton.module.css'
import arrowUp from './img/arrowUp.png'

function BackToTopButton() {
    const [backToTopButton, setBacktoTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setBacktoTopButton(true);
            } else {
                setBacktoTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        const scrollStep = -window.scrollY / 60;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 8);
    };

    return (
        <div className={Style.btn_5}>
            {backToTopButton && (
                <button onClick={scrollUp}>
                    <img src={arrowUp} alt="Arrow Up" />
                </button>
            )}
        </div>
    );
}

export default BackToTopButton
