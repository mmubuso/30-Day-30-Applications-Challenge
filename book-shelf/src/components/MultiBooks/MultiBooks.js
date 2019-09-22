import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default function MultiBooks(props) {


    // Delete Cards
    let deleteCard = () => {
        axios.delete(`http://localhost:8000/api/v1/books/${props.id}`)
            .then(results => {props.deleteBook(props.id)})
            .catch(err => console.log(err))
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Author: {props.author}</h6>
                <p className="card-text">{props.description}</p>
                <Link to={`/forms/${props.id}`}>Edit</Link>
                <button onClick={deleteCard} className="card-link">Delete</button>
            </div>
        </div>
    )
}
