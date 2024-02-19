const app = Vue.createApp({

    //all data for the app, must return an object
    data: function (){
        return {
            newExercise: {
                title: '',
                date: '',
                //reps and weight list values connected by set value
                sets: 0,
                reps: [],
                weight: [],
            },
            exerciseList: [
                {title: 'Bench Press', date: '2/16/2024', sets: 3, reps: [5,5,4], weight: [225,225,225]},
                {title: 'Incline Bench', date: '2/16/2024', sets: 3, reps: [12,13,10], weight: [100,100,100]},
            ],
        }
    },
    //methods usually events triggered by v-on
    methods: {
        addExercise(e) {
            console.log('1')
            e.preventDefault();
            this.newExercise.date = '2/16/2024';
            this.newExercise.sets = 1;
            this.exerciseList.push(this.newExercise);
            console.log('2');
            //form clear
            this.newExercise = {
                title: '',
                date: '',
                sets: 0,
                reps: [],
                weight: [],
            }
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


});
