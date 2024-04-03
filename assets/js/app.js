const app = Vue.createApp({
    // All data for the app, must return an object
    data() {
        return {
            exerciseList: [],
            dayList:[],
            reviewList: [],
            daysReview:{},
            selectedEditExercise: {},
            currentDay: ''
        };
    },
    methods: {
        addExercise(newExercise) {
            newExercise.id = String(moment(this.currentDay).format() + Math.random().toString(36).substr(2));
            newExercise.date = this.currentDay;
            this.exerciseList.push(newExercise);
            this.dayList.push(newExercise);
        },
        deleteExercise(exercise) {
            this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);
            this.dayList.splice(this.dayList.indexOf(exercise), 1);
        },
        deleteReview(review){
            this.reviewList.splice(this.reviewList.indexOf(review), 1);
            this.daysReview.pop();
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
            this.daysReview = newReview;

        },
        sendToEditModal(exercise) {
            this.selectedEditExercise = exercise;
        },
        editDate(edit) {
            this.currentDay = moment(this.currentDay).add(edit, 'days').format('YYYY[-]MM[-]DD');
        },
        getCurrentDate() {
            let today = new Date();
            return moment(today).format('YYYY[-]MM[-]DD');
        },
        updateDate(newDate) {
            this.currentDay = newDate;
        },
        checkEmpty(review){
            return Object.keys(review).length;
        }
    },

    created() {
        if(localStorage.getItem('exerciseList')){
            this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'));
        }
        if(localStorage.getItem('reviewList')){
            this.reviewList = JSON.parse(localStorage.getItem('reviewList'));
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
        reviewList: {
            handler() {
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
