import React, {useState, useEffect} from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import profile from '../../assets/images/profile2.png';
import TrackVisibility from 'react-on-screen';



const Header = () => {
  // animation purposes
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // how fast the letter is typed
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate= ["Fullstack Developer", "Software Engineer"];

  const period = 1000;

  useEffect(() =>{
      let ticker = setInterval(()=>{
          tick();
      }, delta);
      // this function will be executed before the above logic except for the first time
      return () => {clearInterval(ticker)};
  }, [text])

  const tick=() =>{
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1)

      setText(updatedText);

      if(isDeleting){
          setDelta(prevDelta => prevDelta/2)
      }
      // start delete
      if(!isDeleting && updatedText===fullText){
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
      }
      // till the end
      else if(isDeleting && updatedText===""){
          setIsDeleting(false);
          setDelta(500);
          setLoopNum(i+1);
          setIndex(1);
      }
      else{
          setIndex(prevIndex => prevIndex +1 );
      }
  }

  return (
    <header>
      <div class="container header__container">
        <h4>
          Hello I'm 
        </h4>
        <h1>Eva Li</h1>
      <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2><span className="wrap text-light">{text? "A(n) " + text:"A(n)"}</span> </h2>
          </div>}
        </TrackVisibility>
        
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={profile} alt="me" style={{width:'50%'}} className='me_image'/>
        </div>
      </div>
    </header>
  )
}

export default Header