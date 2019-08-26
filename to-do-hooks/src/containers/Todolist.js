import React, { useState } from 'react';
import ToDoItem from '../components/ToDoItem';
import './Todolist.css';
import Fade from 'react-reveal/Fade';

export default function Todolist() {

    // Create state in hooks using hook states
    const [toDoItems, updateToDoItems] = useState([]);
    const [userInput, updateUserInput] = useState('');
    const [canRemoveTask, updateRemoveStatus] = useState(false)

    //Create functions to update change
    let handleChange = (event) => {
        let input = userInput;
        input = event.target.value;
        updateUserInput(input);
    }

    //validates user input
    let handleSubmit = (event) => {
        event.preventDefault();
        if (userInput !== '') {
            let toDoItemList = [...toDoItems];
            toDoItemList.push({
                task: userInput,
                checkedCircle: 'uncheckedMark',
                checkLine: 'toDoItem'
            });
            updateToDoItems(toDoItemList);
            updateUserInput('');
        }
    }

    //Remove an item from array 
    let deleteTask = (deletedTaskIndex) => {
        let newArray = toDoItems.filter((item, index) => {
            return index !== deletedTaskIndex
        })
        updateToDoItems(newArray)
    }

    //Update the status of the user
    let toggleRemoveStatus = () => {
        let status = !canRemoveTask
        updateRemoveStatus(status)
    }

    //toggles a checked item
    let toggleChecked = (index) => {
        let checkedValue = toDoItems[index].checkedCircle;
        let taskArray = [...toDoItems];
        taskArray[index].checkedCircle = checkedValue === 'uncheckedMark' ? 'checkedMark' : 'uncheckedMark';
        taskArray[index].checkLine = checkedValue === 'uncheckedMark' ? 'toDoItem checkedP' : 'toDoItem';
        updateToDoItems(taskArray);
    }

    return (
        <div
            className='ToDoList'>
            <h1>All Tasks</h1>

            <Fade cascade>
                <p
                    className='deleteItems'
                    onClick={() => toggleRemoveStatus()}>
                    {
                        canRemoveTask
                            ?
                            'Done'
                            :
                            'remove tasks'
                    }
                </p>
            </Fade>
            <div className='listContainer'>
                {
                    toDoItems.map((item, index) => {
                        return (
                            < ToDoItem
                                removeStatus={canRemoveTask}
                                deleteTask={deleteTask}
                                toggleTask={toggleChecked}
                                index={index}
                                key={index}
                                item={item.task}
                                checkLine={item.checkLine}
                                checked={item.checkedCircle}
                            />
                        )
                    })
                }
            </div>

            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input
                    placeholder='Enter Task'
                    type='text'
                    value={userInput}
                    onChange={(evt) => handleChange(evt)}
                    className='inputField' />
                <span
                    className='addTask'
                    onClick={(evt) => handleSubmit(evt)}>
                </span>
            </form>
        </div >
    )
}