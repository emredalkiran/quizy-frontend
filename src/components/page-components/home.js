import {ReactComponent as QuizyHero} from '../hero.svg'


function Home() {
  return(
    <section className="hero is-primary is-large">
    <div className="hero-body">
      <div className="is-flex is-justify-content-space-between">
        <div className="is-flex is-align-items-center">
          <div>
            <h1 className="title">
              Build forms, surveys <br />or quizzes easily
              <br />
            </h1>
            <h2 className="subtitle">
              Make your documents fun to complete. Get valuable insights.
            </h2>
            <button className="button is-hero-button">
              Get started for free
            </button>
           </div>
        </div>
        <div >
          <QuizyHero className="hero-image"/>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Home