//import { ExerciseItem } from "./ExerciseItem.js";

class ExerciseList {
	exerciseList = [];
	
    constructor(element, exerciseStorage) {
        this.element = element;
        this.exerciseStorage = exerciseStorage;
    }

    //get existing exercises from server database
	load() {
		this.exerciseList.push(new ExerciseItem(new Date('2020-11-01'), exerciseTypes.RUN));
		this.exerciseList.push(new ExerciseItem(new Date('2020-11-03'), exerciseTypes.RUN));
		this.exerciseList.push(new ExerciseItem(new Date('2020-11-04'), exerciseTypes.CICLING));
		this.exerciseList.push(new ExerciseItem(new Date('2020-11-10'), exerciseTypes.GYM));
    }
	
	print() {
	//show in html all activities
		this.exerciseList.forEach(activity => console.log(activity));
	}
	
	
}