import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = ()=> {
    useGSAP(()=> {
        const heroSplit = new SplitText(".title", {type:"chars words"});
        const subTitle = new SplitText(".subtitle", {type:"lines"});

        //heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent:100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });
        gsap.from(subTitle.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true

            }
        })
        .to('.left-leaf', {y:-200}, 0)
        .to('.right-leaf', {y:200}, 0)

    }, []);

    return (
        <section id="hero" className="noisy">
            <h1 className="title text-gradient">Tommy's Margarita </h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
            <div className="hero-body">
                <div className="content">
                    <div className="title-block hidden md:block space-y-5">
                        <p>Cool. Crisp. Classic.</p>
                        <h2 className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </h2>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients,
                            creative flair, and timeless recipes — designed to delight your
                            senses.
                        </p>
                        <a href="#cocktail">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default Hero;