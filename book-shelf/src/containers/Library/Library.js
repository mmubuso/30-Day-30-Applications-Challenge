import React, { Component } from 'react';
import axios from 'axios';
import MultiBooks from '../../components/MultiBooks/MultiBooks';
import { Link } from "react-router-dom";

export default class Library extends Component {
    state = {
        libraries: []
    }

    componentDidMount() {
        this.getBooksFromServer()
    }

    //Get books and store it in state data from server
    getBooksFromServer = () => {
        axios.get('/api/v1/books')
            .then(results => {
                this.setState({ libraries: results.data })
            })
            .catch(err => console.log(err))
    }

    deleteBook = (bookToBeDeleted) => {
        let books = this.state.libraries.filter(book => bookToBeDeleted !== book.ID)
        this.setState({ libraries: books })
    }


    render() {
        let books = this.state.libraries.map(book => {
            return (
                <MultiBooks
                    deleteBook={this.deleteBook}
                    key={book.ID}
                    description={book.Description}
                    id={book.ID}
                    title={book.Title}
                    author={`${book.Author.FirstName} ${book.Author.LastName}`}
                />
            )
        })
        return (
            <div className="container mt-4">
                <div className="jumbotron">
                    <button><Link to='/forms/create'>Create Book</Link></button>
                    {books}
                </div>
            </div>
        )
    }
}

