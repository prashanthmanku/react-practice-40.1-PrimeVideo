import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const LatestAndTrendingSlide = props => {
  const {moviesList} = props
  console.log(moviesList)
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    className: 'margin',
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    rtl: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          //   speed: 1000,
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
export default LatestAndTrendingSlide
