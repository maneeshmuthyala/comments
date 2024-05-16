// Write your code here

import './index.css'

const CommentItem = props => {
  const {ar, toggle, deleteUser} = props
  const {id, name, comment, date, isFav, initialClassName} = ar
  const first = name[0]

  const onDelete = () => {
    deleteUser(id)
  }

  const onClickFavoriteIcon = () => {
    toggle(id)
  }
  const likeImageUrl = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const timeElapsed = () => {
    const currentTime = new Date()
    const timeDifference = currentTime - new Date(date)
    const minutes = Math.floor(timeDifference / 60000)
    let msg
    if (minutes <= 0) {
      msg = `less than a minute ago`
    }
    if (minutes > 0) {
      msg = `${minutes} minutes ago`
    }
    return msg
  }
  return (
    <>
      <li className="list-item" key={id}>
        <div className="item">
          <div className={initialClassName}>
            <p className="co">{first}</p>
          </div>
          <div className="sub-co">
            <p>{name}</p>
            <p className="time">{timeElapsed()}</p>
            <p>{comment}</p>
          </div>
        </div>
        <div className="su-co">
          <div className="card">
            <button type="button" className="btn" onClick={onClickFavoriteIcon}>
              <img src={likeImageUrl} className="img" alt="like" />
              Like
            </button>
          </div>
          <button
            data-testid="delete"
            type="button"
            onClick={onDelete}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="img"
              alt="delete"
            />
          </button>
        </div>
        <hr className="lin" />
      </li>
    </>
  )
}
export default CommentItem
