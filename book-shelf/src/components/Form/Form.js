import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Form extends Component {

    // format book
    state = {
        newBook: {
            Title: "",
            ISBN: "",
            Description: "",
            Author: {
                FirstName: "",
                LastName: ""
            }
        },
        redirectBackToHomePage: false
    }


    // Make call to server to create book
    createBook = () => {
        axios.post('/api/v1/books', this.state.newBook)
            .then(result => this.setState({ redirectBackToHomePage: true }))
            .catch(err => console.log(`Error : ${err}`))
    }

    editBook = () => {
        axios.put(`/api/v1/books/${this.props.match.params.bookId}`, this.state.newBook)
            .then(result => this.setState({ redirectBackToHomePage: true }))
            .catch(err => console.log(`Error : ${err}`))
    }

    getBook = () => {
        axios.get(`/api/v1/books/${this.props.match.params.bookId}`)
            .then(result => this.setState({ newBook: result.data }))
            .catch(err => console.log(`Error : ${err}`))
    }

    // upadte changes to book
    handleBookChange = (event) => {
        let newInfo = { ...this.state.newBook }
        newInfo[event.target.name] = event.target.value
        this.setState({ newBook: newInfo })
    }

    // Handle changes to Author
    handleAuthorChange = (event) => {
        let newInfo = { ...this.state.newBook }
        newInfo.Author[event.target.name] = event.target.value
        this.setState({ newBook: newInfo })
    }


    componentDidMount() {
        this.props.match.params.bookId === 'create'
        ?
        console.log('create a book')
        :
        this.getBook()
    }


    render() {
        let isFunctionCreatingBook = this.props.match.params.bookId === 'create'
        return (
            <div>
                {
                    this.state.redirectBackToHomePage
                        ?
                        <Redirect to='/' />
                        :
                        <div className="container ">
                            <div className="form-group ">
                                <label htmlFor="title">Title</label>
                                <input type="text"
                                    name='Title'
                                    onChange={this.handleBookChange}
                                    value={this.state.newBook.Title}
                                    className="form-control"
                                    id="title"
                                    placeholder="Example input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    name='Description'
                                    onChange={this.handleBookChange}
                                    value={this.state.newBook.Description}
                                    className="form-control" id="description"
                                    placeholder="Another input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name='FirstName'
                                    onChange={this.handleAuthorChange}
                                    value={this.state.newBook.Author.FirstName}
                                    className="form-control" id="firstName"
                                    placeholder="Another input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name='LastName'
                                    onChange={this.handleAuthorChange}
                                    value={this.state.newBook.Author.LastName}
                                    className="form-control" id="lastName"
                                    placeholder="Another input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="isbn">ISBN</label>
                                <input
                                    type="text"
                                    name='ISBN'
                                    onChange={this.handleBookChange}
                                    value={this.state.newBook.ISBN}
                                    className="form-control" id="isbn"
                                    placeholder="Another input" />
                            </div>
                            <button onClick={isFunctionCreatingBook ? this.createBook : this.editBook}> Submit </button>
                        </div>
                }
            </div>
        )
    }
}
