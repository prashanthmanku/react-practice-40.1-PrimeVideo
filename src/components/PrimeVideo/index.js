import MoviesSlider from '../MoviesSlider'
import LatestAndTrendingSlide from '../LatestAndTrendingSlide'
import UpcomingMovies from '../UpcomingMovies'
import AllMoviesSlide from '../AllMoviesSlide'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  const upcomingMovies = [
    moviesList[5],
    moviesList[10],
    moviesList[6],
    moviesList[15],
    moviesList[13],
  ]
  const latestMovies = [
    moviesList[3],
    moviesList[7],
    moviesList[1],
    moviesList[11],
    moviesList[9],
  ]
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
            <h1 className="content-heading">Upcoming movies</h1>
            <UpcomingMovies moviesList={upcomingMovies} />
            <h1 className="content-heading dots">Latest & trending movies</h1>
            <LatestAndTrendingSlide moviesList={latestMovies} />
            <h1 className="content-heading">Action movies</h1>
            <MoviesSlider moviesList={actionMovies} />
            <h1 className="content-heading">Comedy movies</h1>
            <MoviesSlider moviesList={comedyMovies} />
            <h1 className="content-heading">All movies</h1>
            <AllMoviesSlide moviesList={moviesList} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
