import React from 'react';
import Photo from '../../images/Photo.jpg';
import './Person.css'

const Person = () => {
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
                    <button className='break-first'>
                        <h6>1<small>min</small></h6>
                    </button>
                    <button className='break-second'>
                        <h6>2<small>min</small></h6>
                    </button>
                    <button className='break-third'>
                        <h6>3<small>min</small></h6>
                    </button>
                    <button className='break-forth'>
                        <h6>4<small>min</small></h6>
                    </button>
                    <button className='break-fifth'>
                        <h6>5<small>min</small></h6>
                    </button>
                </div>
            </div>
            <div className='exercise-container'>
                <h4>Exercise Details</h4>
                <div className='exercise-time'>
                    <div className='exercise-total'>
                        <h4>Exercise time</h4>
                        <h4> min</h4>
                    </div>
                </div>
                <div className='break-time'>
                    <div className='break-total'>
                        <h4>Break time</h4>
                        <h4>0</h4>
                    </div>
                </div>
                <button><p className='btn-text'>Activity Completed</p></button>
            </div>
        </div>
    );
};

export default Person;