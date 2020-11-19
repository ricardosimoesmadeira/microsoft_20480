const exerciseTypes = {
    RUN: 'Run',
    WALK: 'Walk',
	CICLING: 'Cicling',
    GYM: 'Gym'
}

let calendar = [];

class ExerciseItem {
	#id;
	date;
	exerciseType;
	intensity;
	gpsTrack;
	
    constructor(data, exerciseType) {
        //this.id = data.id;
        this.data = data;
        this.exerciseType = exerciseType;
    }
}