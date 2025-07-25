import React from 'react';
import foodDiary from '../../assets/images/food_diary.jpg';
import journal from '../../assets/images/journal.png';
import stickyNote from '../../assets/images/stickyNote.png'
import './portfolio.css'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: stickyNote,
      title: "Sticky Note App",
      github: "https://github.com/syuan2000/sticky-spark-notes-flow",
      demo: "https://sticky-notes-theta-one.vercel.app"
    },
    {
      id: 2,
      image: foodDiary,
      title: "Digital Food Photo Diary",
      github: "https://github.com/syuan2000/notion-diary",
      demo: "https://notion-diary-3b39d.web.app"
    },
    {
      id: 3,
      image: journal,
      title: "Digital Calander Journal",
      github: "https://github.com/syuan2000/2020-Calendar.io",
      demo: "https://github.com/syuan2000/2020-Calendar.io"
    },

  ]
  return (
    <section id="portforlio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>  
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer" >Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
