import React from 'react';
import gsap from 'gsap';
import {SplitText} from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { cocktailLists, mockTailLists } from '../../constants';

function Cocktails() {
    useGSAP(()=> {
        const cocktailText = new SplitText(".c-scroll-lines", {type:"lines"});
        const lovedText = new SplitText(".l-scroll-lines", {type:"lines"});

        const cocktailtl = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 50%",
                end: "bottom 80%",
                once: true,
            }
        });
        cocktailtl
        .from(cocktailText.lines, {
            opacity:0,
            yPercent:100,
            duration:1,
            ease: "expo.out",
           stagger: 0.08,
            //delay:1
        })
        .from(lovedText.lines, {
            opacity:0,
            yPercent:100,
            duration:1,
            ease: "expo.out",
            stagger: 0.08,
            //delay:1
        }, 0);

    }, []);
    

  return (
    <section id="cocktails" className="noisy">
        
        <div className="list">
            <div className="popular">
                <h2 className="c-scroll-lines">Most popular cocktails:</h2>
                <ul>
                    { cocktailLists.map((drink)=>(
                        <li  key={drink.name}>
                            <div className="mr-25">
                                <h3 className="c-scroll-lines">{drink.name}</h3>
                                <p className="c-scroll-lines">{drink.country} | {drink.detail}</p>
                            </div>
                            
                            <span className="c-scroll-lines">{drink.price}</span>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="loved">
		        <h2 className="l-scroll-lines">Most loved mocktails:</h2>
                <ul>
                    {mockTailLists.map(({name, country, detail, price})=> (
                        <li key={name}>
                            <div className="mr-25">
                                <h3 className="l-scroll-lines">{name}</h3>
                                <p className="l-scroll-lines">{country} | {detail}</p>
                            </div>
                            <span className="l-scroll-lines">{price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>    
    </section>
  )
}

export default Cocktails;