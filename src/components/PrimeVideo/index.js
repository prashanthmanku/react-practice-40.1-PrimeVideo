import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="app-container">
      <div className="app-width-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="app-img"
        />
        <div className="app-content-container">
          <div className="app-content-width-container">
            <h1 className="content-heading">Action movies</h1>
            <MoviesSlider moviesList={actionMovies} />
            <h1 className="content-heading">Comedy movies</h1>
            <MoviesSlider moviesList={comedyMovies} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
