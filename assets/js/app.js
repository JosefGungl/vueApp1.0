const app = Vue.createApp({

    //all data for the app, must return an object
    data: function (){
        return {
            newExercise: {
                id: '',
                title: '',
                date: '',
                //reps and weight list values connected by set value
                sets: 0,
                reps: [],
                weight: [],
            },
            exerciseList: [
                {id: '0', title: 'Bench Press', date: '2/16/2024', sets: 3, reps: [5,5,4], weight: [225,225,225]},
                {id: '1', title: 'Incline Bench', date: '2/16/2024', sets: 3, reps: [12,13,10], weight: [100,100,100]},
            ],
            dayList: [],
            selectedEditExercise: {},
        }
    },
    //methods usually events triggered by v-on
    methods: {
        addToDayList(){
            this.dayList.push(this.exerciseList);
        },
        addExercise() {
            this.newExercise.date = '2/16/2024';
            this.newExercise.id = this.exerciseList.length;
            this.exerciseList.push(this.newExercise);
            //clear form
            this.newExercise = {
                id: '',
                title: '',
                date: '',
                sets: 0,
                reps: [],
                weight: [],
            }
        },
        deleteExercise() {
            let exercise = this.exerciseList.indexOf(this.exerciseList.find(temp => temp.id === this.selectedEditExercise.id));
            this.exerciseList.splice(exercise, 1);
        },
        saveExercise() {
            this.selectedEditExercise = {};
        },
        removeSet: function (exercise){
          if (exercise.sets > 0){
              exercise.sets --;
          }else{
              exercise.sets = 0;
          }
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
        sendToEditModal(exercise) {
            this.selectedEditExercise = exercise;
        },
    },
    //values that are updated and cached if dependencies change
    computed: {
        dayExerciseList(){
            return this.exerciseList.filter(function (exercise){
                return exercise.date === '2/16/2024';
            })
        },
    },

    created: function () {
        if (localStorage.getItem('exerciseList')){
            this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
        }
    },

    watch: {
        exerciseList: {
            handler() {
                localStorage.setItem('exerciseList', JSON.stringify(this.exerciseList));
            },
            deep: true,
        }
    }


});
