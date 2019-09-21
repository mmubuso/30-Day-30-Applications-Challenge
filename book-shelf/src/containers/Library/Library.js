import React, { Component } from 'react';
import axios from 'axios';
import MultiBooks from '../../components/MultiBooks/MultiBooks';

export default class Library extends Component {
    state = {
        libraries: []
    }

    componentDidMount() {
        this.getBooksFromServer()
    }

    //Get books and store it in state data from server
    getBooksFromServer = () => {
        axios.get('http://localhost:8000/api/v1/books')
            .then(results => {
                this.setState({ libraries: results.data })
                console.log(results)
            })
            .catch(err => console.log(err))
    }
    

    render() {
        let books = this.state.libraries.map(book => {
            return (
                <MultiBooks 
                    key={book.ID}
                    id={book.ID}
                    title={book.Title}
                    author={`${book.Author.FirstName} ${book.Author.LastName}`}
                />
            )
        })
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Musiteli Mubuso</h1>
                    {books}
                </div>
            </div>
        )
    }
}

