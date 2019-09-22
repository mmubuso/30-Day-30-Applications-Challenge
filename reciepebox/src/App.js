import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  state = {
    books: [
      {
        name : ""
      },
      {},
      {}
    ]
  }

  componentDidMount(){
    this.getDataFromServer()
  }

  getDataFromServer = () => {
    axios.get('http://localhost:8000/api/v1/books')
    .then(results => {
      this.setState({books : results.data})
    })
    .catch(err => console.log(`Error is ${err}`))
  }



  render() {
    let books = this.state.books.map(item => {
      return (
        <div key={item.ID}>
          <h3>{item.Title}</h3>
          <h3>{item.Description}</h3>
        </div>
      )
    })


    return (
      <div>
        {
          books
          }

      </div>
    )
  }
}
