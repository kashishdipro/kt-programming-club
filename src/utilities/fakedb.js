// use local storage to manage exercise data
const addToDb = (id, time) =>{
    let exerciseList = {};
    
    // get exercise time
    const storedExerciseList = localStorage.getItem('exercise-list');
    if(storedExerciseList){
        exerciseList = JSON.parse(storedExerciseList);
    }

    // add exercise time
    const exerciseTime = exerciseList[id];
    if(exerciseTime){
        const newExerciseTime = exerciseTime + time;
        exerciseList[id] = newExerciseTime;
    }else{
        exerciseList[id] = time;
    }
    localStorage.setItem('exercise-list', JSON.stringify(exerciseList));
}

const getStoredExerciseList = () =>{
    let exerciseList = {};
    
    // get exercise time
    const storedExerciseList = localStorage.getItem('exercise-list');
    if(storedExerciseList){
        exerciseList = JSON.parse(storedExerciseList);
    }
    return exerciseList;
}

export {
    addToDb,
    getStoredExerciseList
}