app.component('ExerciseCard', {
    props: {
        exercise:{
            type: Object,
            required: true,
        }
    },

    emits:['to-edit'],
    methods: {
        sendToEditModal(exercise){
          this.$emit('to-edit', exercise);
        },
    },

    template: `
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">{{exercise.title}}</h5>
          <p v-for="(set) in exercise.sets">{{exercise.reps[set-1]}} reps x {{exercise.weight[set-1]}} lbs.</p>
          <button type="button" @click="sendToEditModal(exercise)" class="btn btn-edit btn-secondary" data-bs-toggle="modal" data-bs-target="#editExerciseModal">Edit</button>
        </div>
      </div>
    `
});