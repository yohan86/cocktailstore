import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";

const Navbar = () => {
    useGSAP(()=> {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top',
                //markers: true  
            }
        });
        navTween.fromTo('nav', {backgroundColor:'transparent'}, {
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            css: {
                backdropFilter: "blur(10px)"
              },
            duration:1,
            ease: 'Power1.easeInOut'

        });
},[]);


    return(
        <nav>
            <div>
            <a href="#home" className="flex items-center gap-2"><p>Cocktail Store</p></a>
            <ul>
                {navLinks.map((link)=> (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a></li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;