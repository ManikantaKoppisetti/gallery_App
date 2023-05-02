import './index.css'

const ThumbnailItem = props => {
  const {imageItemDetails} = props
  const {thumbnailUrl, thumbnailAltText} = imageItemDetails
  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="button-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
