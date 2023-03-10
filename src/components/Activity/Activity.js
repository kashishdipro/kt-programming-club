import React from 'react';
import './Activity.css'

const Activity = ({activity, handleAddToList}) => {
    const {picture, name, greeting, time, age} = activity;
    // console.log(activity)
    return (
            <div className='activity'>
                <img src={picture} alt="" />
                <div className='activity-container'>
                    <h5>{name}</h5>
                    <p>{greeting}</p>
                    <h6>For Age: {age}</h6>
                    <h6>Time required: {time}min</h6>
                    <button onClick={() => handleAddToList(activity)}><p className='btn-text'>Add To List</p></button>
                </div>
            </div>
    );
};

export default Activity;