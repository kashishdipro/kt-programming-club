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
        console.log('exists!');
        const newExerciseTime = exerciseTime + time;
        exerciseList[id] = newExerciseTime;
    }else{
        exerciseList[id] = time;
    }
    localStorage.setItem('exercise-list', JSON.stringify(exerciseList));

    // let exerciseList = {};

    // //get the shopping cart from local storage
    // const storedCart = localStorage.getItem('exercise-list');
    // if(storedCart){
    //     exerciseList = JSON.parse(storedCart);
    // }

    // // add exercise time
    // const time = exerciseList[id];
    // if(time){
    //     const newtime = time + 1;
    //     exerciseList[id] = newtime;
    // }
    // else{
    //     exerciseList[id] = 1;
    // }
    // localStorage.setItem('exercise-list', JSON.stringify(exerciseList));
}

// const getStoredCart = () =>{
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('exercise-list');
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

export {
    addToDb,
    // getStoredCart
}