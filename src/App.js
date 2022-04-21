import './App.scss';
import gsap from 'gsap';
import { useEffect } from 'react';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const words = ["Hazem.","Passionate.","Developer."]

function App() {
  useEffect(()=>{
    let cursor = gsap.to(".cursor",{
      opacity:0,
      ease:"power2",
      repeat : -1,
      autoAlpha:0.5,
    });
    let tl = gsap.timeline();
    tl.to(".box",{
      duration:1,
      width:"19vw",
      delay:0.5,
      ease:"power4",
      opacity:1,
    }).from(".hi",{
      duration:1,
      y:"7vw",
      ease:"power3",
      onComplete:()=> mastertl.play(),
    }).to(".box",{
      duration:1,
      height:"7vw",
      ease:"elastic",
    });
    let mastertl = gsap.timeline({repeat:-1}).pause();
    words.forEach(word=>{
      let tl = gsap.timeline({repeat:1, yoyo:true, repeatDelay:1})
      tl.to(".text",{duration:1, text: word})
      mastertl.add(tl)
    })
  },[]);

  return (
    <h1 className="App">
      <span className='box'></span>
      <span className='hi'>Hi,I am</span>
      <span className='text'></span>
      <span className='cursor'>_</span>
    </h1>
  );
}

export default App;
