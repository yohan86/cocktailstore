import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { CSSPlugin  }  from 'gsap/CSSPlugin';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText, CSSPlugin); //register plugin globally

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />

    </main>
  )
}

export default App