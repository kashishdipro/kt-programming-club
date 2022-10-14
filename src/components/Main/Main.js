import React, { useEffect, useState } from 'react';
import { addToDb, getStoredExerciseList } from '../../utilities/fakedb';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Person from '../Person/Person';
import QandA from '../QandA/QandA';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [personActivity, setPersonActivity] = useState([]);

    useEffect(() =>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);

    useEffect(() =>{
        const storedExerciseList = getStoredExerciseList();
        const savedExerciseList = [];
        for(const id in storedExerciseList){
            const addedExerciseList = activities.find(activity => activity.id === id)
            if(addedExerciseList){
                const exerciseTime = storedExerciseList[id];
                addedExerciseList.time = exerciseTime;
                savedExerciseList.push(addedExerciseList);
            }
        }
        setPersonActivity(savedExerciseList);
    },[activities]);

    const handleAddToList = (activity) =>{
        // console.log(activity);
        const newActivity = [...personActivity, activity];
        setPersonActivity(newActivity);
        addToDb(activity.id, activity.time);
    }
    return (
        <div className='main'>
            <div className='main-container'>
                <div className='header-container'>
                    <Header></Header>
                    <h3>Select today's exercise</h3>
                    <div className='activities-container'>
                        {
                            activities.map(activity =><Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToList={handleAddToList}
                            ></Activity>)
                        }
                    </div>
                </div>
                <div className='person-activity-container'>
                    <Person personActivity={personActivity}></Person>
                </div>
            </div>
            <div className='QandA'>
                <QandA></QandA>
            </div>
        </div>
    );
};

export default Main;