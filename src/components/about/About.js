import React from 'react'
import aboutVideo from '../../assets/images/about-video.webm'
import aboutVideoMp4 from '../../assets/images/about-video.mp4'
import { MdOutlineComputer } from 'react-icons/md';
import { IoSchoolOutline } from 'react-icons/io5';
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import './about.css';

const VideoPlayer = ({ isVisible }) => {
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    const playVideo = async () => {
      if (isVisible && videoRef.current) {
        try {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay prevented:", error);
        }
      } else if (!isVisible && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
    playVideo();
  }, [isVisible]);
  
  return (
    <video
      ref={videoRef}
      width="100%"
      height="100%"
      muted
      playsInline
      preload="auto"
      className='about__image'
      poster={aboutVideoPoster} // Optional: add a poster image
    >
      <source src={aboutVideo} type="video/webm" />
      <source src={aboutVideoMp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => <VideoPlayer isVisible={isVisible} />}
            </TrackVisibility>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <IoSchoolOutline className='about__icon' />
              <h5>Education</h5>
              <small>Bachelor of Information Technology </small>
            </article>
            <article className='about__card'>
              <MdOutlineComputer className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Software Engineer Working </small>
            </article>
          </div>
          <p>
            Hi, I'm Eva Li! I'm a full-stack software engineer with experience building scalable systems end-to-end, but what I really enjoy most is shaping the client experience.
            I love using React to turn ideas and designs into intuitive, user-centered products that feel smooth and enjoyable to use. <br />
            On the backend, I've worked with Python, .NET, and AWS to design APIs, streamline data flows, and optimize performance. <br />
            I'm always eager to grow and learn, and excited about products that combine creative thoughtful engineering with meaningful impact : )
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
