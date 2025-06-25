import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
const About = ()=>{
    
    useGSAP(()=> {
        const titleSplit = SplitText.create("#about h2", {type:"words"});
        const abouttl = gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start: "top center"
            }
        });

        abouttl
        .from(titleSplit.words, {
            opacity: 0,
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06,
        })
        .from('.top-row div, .bottom-row div', {
            opacity:0, duration: 1, ease: 'power1.inOut', stagger:0.06,
        }, '-=0.5')
    },[]);

  return (
    <section id="about" className="noisy">
        <div className="content">
            <div className="title-blk">
                <span className="btn-style">Better Cocktails</span>
                <h2>Where every detail matters - from muddle to garnish</h2>
            </div>
            <div className="review-blk">
                <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                </p>
            </div>
        </div>
        <div className="image-wrapper">
            <div className="top-row">
                <div className="image-inner md:col-span-3">
                    <img src="/images/abt1.png" alt="about images" />
                </div>
                <div className="image-inner md:col-span-6">
                    <img src="/images/abt2.png" alt="about images" />
                </div>
                <div className="image-inner md:col-span-3">
                    <img src="/images/abt5.png" alt="about images" />
                </div>
            </div>
            <div className="bottom-row">
                <div className="image-inner md:col-span-8">
                    <img src="/images/abt3.png" alt="about images" />
                </div>
                <div className="image-inner md:col-span-4">
                    <img src="/images/abt4.png" alt="about images" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About