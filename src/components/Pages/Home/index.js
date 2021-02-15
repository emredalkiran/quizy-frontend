import { Link } from 'react-router-dom'
import { useState } from 'react'
function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  return (
    <section className='hero is-large'>
      <div className='hero-body'>
        <div className='is-flex is-justify-content-space-between'>
          <div className='is-flex is-align-items-center'>
            {isImageLoaded && (
              <div className='hero-content'>
                <h1 className='title'>
                  Build forms, surveys <br />
                  or quizzes easily
                  <br />
                </h1>
                <h2 className='subtitle'>
                  Make your forms fun to complete. Get valuable insights.
                </h2>
                <Link to='/dashboard'>
                  <button className='button is-hero-button'>
                    Get started for free
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className='hero-image-container'>
            <img
              onLoad={() => setIsImageLoaded(true)}
              src='/assets/img/hero-survey-image.png'
              className='hero-image'
              alt='survey'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
