import React, { useEffect, useState } from 'react';
import Photo from '../../images/Photo.jpg';
import './Person.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Person = ({personActivity}) => {
    const breakTimes = [1, 2, 3, 4, 5];
    const [userbreak, setUserBreak] = useState([]);
    
    useEffect(() =>{
        const storedBreakTime = localStorage.getItem('break-time');
        const breakTime = JSON.parse(storedBreakTime);
        setUserBreak(breakTime);
    },[])

    const handleUserBreak = (breakTime) =>{
        setUserBreak(breakTime);
        localStorage.setItem('break-time', JSON.stringify(breakTime));
    }
    // console.log(personActivity);
    let time = 0;
    for(const activity of personActivity){
        time = time + activity.time;
    }
    // toast.configure()
    const notify = (time, userbreak) =>{
        toast.info('Your total exercise time:'+ (time+userbreak) + 'min', {position: toast.POSITION.BOTTOM_CENTER});
    }
    return (
        <div className='person'>
            <div className='person-details'>
                <img src={Photo} alt="" />
                <div className='person-info'>
                    <h6>Kamanashish Datta</h6>
                    <p><small>Barlekha, Moulvibazar.</small></p>
                </div>
            </div>
            <div className='physical-info'>
                <div className='weight'>
                    <h4>70<small>kg</small></h4>
                    <h6>Weight</h6>
                </div>
                <div className='height'>
                    <h4>5.9</h4>
                    <h6>Height</h6>
                </div>
                <div className='age'>
                    <h4>27<small>yrs</small></h4>
                    <h6>Age</h6>
                </div>
            </div>
            <div className='break-container'>
                <h4>Add a break</h4>
                <div className='break'>
                        {
                            breakTimes.map(breakTime =><button key={breakTime} onClick={() => handleUserBreak(breakTime)}
                            ><p>{breakTime}</p><small>min</small></button>)
                        }
                </div>
            </div>
            <div className='exercise-container'>
                <h4>Exercise Details</h4>
                <div className='exercise-time'>
                    <div className='exercise-total'>
                        <h4>Exercise time</h4>
                        <h4>{time} min</h4>
                    </div>
                </div>
                <div className='break-time'>
                    <div className='break-total'>
                        <h4>Break time</h4>
                        <h4>{userbreak} min</h4>
                    </div>
                </div>
                <button onClick={() => notify(time,userbreak)}><p className='btn-text'>Activity Completed</p></button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Person;