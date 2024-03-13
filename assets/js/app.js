const app = Vue.createApp({

    //all data for the app, must return an object
    data: function (){
        return {
            currentDay: new Date,
            exerciseList: [
                //example data
                {id: '0', title: 'Bench Press', date: new Date('2024/02/16'), sets: 3, reps: [5,5,4], weight: [225,225,225]},
                {id: '1', title: 'Incline Bench', date: new Date('2024/02/16'), sets: 3, reps: [12,13,10], weight: [100,100,100]},
            ],
            dayList:[],
            selectedEditExercise: {},
        }
    },
    //methods usually events triggered by v-on
    methods: {
        //emitted methods
        addExercise(newExercise) {
            newExercise.id = String(this.exerciseList.length);
            newExercise.date = new Date(this.currentDay);
          this.exerciseList.push(newExercise);
          this.dayList.push(newExercise);
        },
        deleteExercise(exerciseId) { //TODO: bug here
            let exercise = this.exerciseList.indexOf(this.exerciseList.find(temp => temp.id === exerciseId));
            console.log(exerciseId);
            console.log(exercise);
            console.log(this.exerciseList[exercise]);
            this.exerciseList.splice(exercise, 1);
            this.dayList.splice(exercise,1);
        },
        saveExercise() {
            this.selectedEditExercise = {};
        },
        addSet (){
            this.selectedEditExercise.sets ++;
        },
        deleteSet: function (set) {
            let exerciseIndex = this.exerciseList.indexOf(this.exerciseList.find(temp => temp.id === this.selectedEditExercise.id));
            let exercise = this.exerciseList[exerciseIndex];
            exercise.weight.splice(set,1);
            exercise.reps.splice(set,1);
            exercise.sets --;
        },
        addToDayList(){
            this.dayList.push(this.exerciseList);
        },
        sendToEditModal(exercise) {
            this.selectedEditExercise = exercise;
        },
        editDate(edit){
            //TODO: increment/decrement currently selected date from buttons
            },
        getCurrentDate(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            return today;
        },
        updateDate(newDate){
            this.currentDay = newDate;
        },
    },


    created: function () {
        if (localStorage.getItem('exerciseList')){
            this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
        }
        this.currentDay = this.getCurrentDate();
    },

    watch: {
        exerciseList: {
            handler() {
                localStorage.setItem('exerciseList', JSON.stringify(this.exerciseList));
            },
            deep: true,
        },
        currentDay: {
            handler() {
                this.dayList = this.exerciseList.filter((x) => x.date.toISOString().split('T')[0] === this.currentDay);
            }
        }
    }
});
