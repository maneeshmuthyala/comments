import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const arr = []
// Write your code here
class Comments extends Component {
  state = {array: arr, name: '', comment: '', count: 0}

  add = event => {
    this.setState({name: event.target.value})
  }

  addC = event => {
    this.setState({comment: event.target.value})
  }

  deleteUser = id => {
    const {array, count} = this.state
    const filteredUsersData = array.filter(each => each.id !== id)
    this.setState({
      array: filteredUsersData,
      count: count - 1,
    })
  }

  set = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const currentdate = new Date()
    this.setState({name, comment})
    const initialBackgroundColorClassName = `con ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newList = {
      id: uuidv4(),
      name,
      comment,
      date: currentdate,
      isFav: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      array: [...prevState.array, newList],
      name: '',
      comment: '',
    }))
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      array: prevState.array.map(each => {
        if (id === each.id) {
          return {...each, isFav: !each.isFav}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comment, array, count} = this.state
    return (
      <div className="main">
        <div className="main-container">
          <div className="sub">
            <h1 className="header">Comments</h1>
            <p className="desc">Say something about 4.0 Technologies</p>
            <form>
              <input
                type="text"
                className="one"
                onChange={this.add}
                placeholder="Your Name"
                value={name}
              />
              <textarea
                className="two"
                placeholder="Your Comment"
                onChange={this.addC}
                value={comment}
              >
                .
              </textarea>
            </form>
            <br />
            <button className="butn" type="submit" onClick={this.set}>
              Add Comment
            </button>
          </div>
          <div className="subb">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="min">
          <p className="mini">{count}</p>
          <p>Comments</p>
        </div>
        <ul>
          {array.map(each => (
            <CommentItem
              key={each.id}
              ar={each}
              toggle={this.toggleIsFavorite}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
