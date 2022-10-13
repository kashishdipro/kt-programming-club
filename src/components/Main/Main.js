import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Person from '../Person/Person';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [personActivity, setPersonActivity] = useState([]);

    useEffect(() =>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);

    const handleAddToList = (activity) =>{
        console.log(activity);
        const newActivity = [...personActivity, activity];
        setPersonActivity(newActivity);
    }
    return (
        <div className='main'>
            {/* <div className='header-container'>
                <Header></Header>
                <h3>Select today's exercise</h3>
            </div> */}
            <div className='main-container'>
                <div className='activities-container'>
                    {
                        activities.map(activity =><Activity
                        key={activity.id}
                        activity={activity}
                        handleAddToList={handleAddToList}
                        ></Activity>)
                    }
                </div>
                <div className='person-activity-container'>
                    <Person></Person>
                </div>
            </div>
        </div>
    );
};

export default Main;