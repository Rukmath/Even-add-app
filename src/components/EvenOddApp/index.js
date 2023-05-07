import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  changeText = () => {
    const {number} = this.state

    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {number} = this.state

    const text = this.changeText()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count">{`Count ${number}`}</h1>
          <p>{`Count is ${text}`}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
