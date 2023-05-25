import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    className: 'margin',
    // centerMode: true,
    // centerPadding: '0px',
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
export default MoviesSlider
