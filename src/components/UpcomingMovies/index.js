import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const UpcomingMovies = props => {
  // LatestAndTrendingSlide
  const {moviesList} = props
  console.log(moviesList)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    className: 'margin',
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem movieDetails={each} key={each.id} />
      ))}
    </Slider>
  )
}
export default UpcomingMovies
