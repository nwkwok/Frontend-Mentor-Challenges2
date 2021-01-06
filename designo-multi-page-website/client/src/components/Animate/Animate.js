import gsap from 'gsap'

export const displayIntro = elem => {
    gsap.from(elem, {
        xPercent: -20,
        opacity: 0,
        stagger: .5,
        duration: 2,
        ease: 'Power2.easeIn',
        scale: -1
        }); 
};
