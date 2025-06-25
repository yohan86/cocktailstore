import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = ()=> {

    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth:767});

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
                scrub: true  //animate during scroll 

            }
        })
        .to('.left-leaf', {y:-200}, 0)
        .to('.right-leaf', {y:400}, 0)

        const startValue = isMobile? "top 50%":"center 60%";
        const endValue = isMobile? "120% top":"bottom top";

        let vtl = gsap.timeline({
            scrollTrigger:{
                trigger: "video",
                start:startValue,
                end:endValue,
                scrub: true,
                pin:true,
            }
        });

        videoRef.current.onloadedmetadata = ()=> {
            vtl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                ease: "none"
            });
        }

    }, []);

    return (
        <>
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
        <div className="video absolute inset-0">
            <video
                ref={videoRef}
                src="/videos/input.mp4"
                muted
                playsInline
                preload="auto"
            />
        </div>
     </>
    )   
}

export default Hero;