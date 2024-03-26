const app = Vue.createApp({
    // All data for the app, must return an object
    data() {
        return {
            exerciseList: [
                // Sample data
                {
                    id: '0',
                    title: 'Bench Press',
                    date: '2024-02-16',
                    sets: 3,
                    reps: [5, 5, 4],
                    weight: [225, 225, 225],
                    finished: false
                },
                {
                    id: '1',
                    title: 'Incline Bench',
                    date: '2024-02-16',
                    sets: 3,
                    reps: [12, 13, 10],
                    weight: [100, 100, 100],
                    finished: false
                },
            ],
            reviewList: [
                //Sample data
                {
                  review: 'test',
                  rating: 4,
                  date: '2024-02-16'
                },
            ],
            dayList: [],
            daysReview:{},
            selectedEditExercise: {},
            currentDay: ''
        };
    },
    // Methods usually events triggered by v-on
    methods: {
        // Emitted methods
        addExercise(newExercise) {
            newExercise.id = String(this.exerciseList.length);
            newExercise.date = this.currentDay;
            this.exerciseList.push(newExercise);
            this.dayList.push(newExercise);
        },
        deleteExercise(exerciseId) {
            const exerciseIndex = this.exerciseList.findIndex(temp => temp.id === exerciseId);
            if (exerciseIndex !== -1) {
                this.exerciseList.splice(exerciseIndex, 1);
                this.dayList.splice(exerciseIndex, 1);
            }
        },
        saveExercise() {
            this.selectedEditExercise = {};
        },
        addSet() {
            this.selectedEditExercise.sets++;
        },
        deleteSet(set) {
            const exerciseIndex = this.exerciseList.findIndex(temp => temp.id === this.selectedEditExercise.id);
            if (exerciseIndex !== -1) {
                const exercise = this.exerciseList[exerciseIndex];
                exercise.weight.splice(set, 1);
                exercise.reps.splice(set, 1);
                exercise.sets--;
            }
        },
        addReview(newReview) {
            newReview.date = this.currentDay;
            this.reviewList.push(newReview);
        },
        sendToEditModal(exercise) {
            this.selectedEditExercise = exercise;
        },
        editDate(edit) {
            // TODO: increment/decrement currently selected date from buttons
        },
        getCurrentDate() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            return today;
        },
        updateDate(newDate) {
            this.currentDay = newDate;
        },
        checkEmpty(review){
            return Object.keys(review).length;
        }
    },

    created() {
        if (localStorage.getItem('exerciseList')) {
            this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
            this.reviewList = JSON.parse(localStorage.getItem('reviewList'));

        }
        this.currentDay = this.getCurrentDate();
    },

    watch: {
        exerciseList: {
            handler() {
                localStorage.setItem('exerciseList', JSON.stringify(this.exerciseList));
                localStorage.setItem('reviewList', JSON.stringify(this.reviewList));
            },
            deep: true,
        },
        currentDay: {
            handler() {
                this.dayList = this.exerciseList.filter(x => x.date === this.currentDay);
                this.daysReview = this.reviewList.filter(x => x.date === this.currentDay);
            }
        }
    }
});

