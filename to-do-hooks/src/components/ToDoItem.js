import React from 'react';
import './ToDoItem.css';
import Fade from 'react-reveal/Fade';


export default function ToDoItem(props) {
    let { removeStatus, item, checked, toggleTask, deleteTask, index, checkLine } = props
    return (
        <Fade cascade>
            <div className={checkLine}>
                <p >{item}
                    <span>
                        {
                            removeStatus
                                ?
                                <span
                                    className='delete'
                                    onClick={() => deleteTask(index)}>
                                </span>
                                :
                                <span
                                    className={checked}
                                    onClick={() => toggleTask(index)}>
                                </span>
                        }
                    </span>
                </p>
            </div>
        </Fade>
    )
}
