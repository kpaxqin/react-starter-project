import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div>
        app
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}