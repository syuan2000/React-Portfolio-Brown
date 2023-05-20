import React from 'react';
import foodDiary from '../../assets/images/food_diary.jpg';
import './portfolio.css'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: foodDiary,
      title: "Digital Food Photo Diary",
      github: "https://github.com/syuan2000",
      demo: "https://github.com/syuan2000"
    },
    {
      id: 2,
      image: foodDiary,
      title: "Digital Food Photo Diary",
      github: "https://github.com/syuan2000",
      demo: "https://github.com/syuan2000"
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
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
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