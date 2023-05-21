import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const x = {
  //   backgroundColor: '#ffffff',
}

const video = {
  padding: '0px 20px 20px 20px',
}

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      trigger={
        <button type="button" className="thumbnail-button">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnai-img" />
        </button>
      }
      modal
      overlayStyle={x}
      className="popup-content"
      closeOnDocumentClick={false}
    >
      {close => (
        <>
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose className="close-icon" />
          </button>
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            style={video}
          />
        </>
      )}
    </Popup>
  )
}
export default MovieItem
