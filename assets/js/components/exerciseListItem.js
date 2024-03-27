app.component('ExerciseListItem', {
    props:{
        i: Number,
        exercise: Object,
    },
    emits:['delete-set'],
    methods:{
        deleteSet(i) {
            this.$emit('delete-set', i);
        },
    },

    template: `
      <div class="row g-3 flex-row justify-content-start align-items-center">
        <div class="col-sm-3">
          Set: {{ i + 1 }}
          <q-btn @click="deleteSet(i)" @click.prevent round flat padding="xs"
                 icon="fa-solid fa-circle-minus"></q-btn>
        </div>
        <!-- reps -->
        <div class="col-sm-3">
          <label for="editSetReps" class="form-label">Reps: </label>
          <input id="editSetReps" type="number" class="form-control" v-model="exercise.reps[i]">
        </div>
        <!-- weight -->
        <div class="col-sm-4">
          <label for="editSetWeight" class="form-label">Weight: </label>
          <input id="editSetWeight" type="number" class="form-control" v-model="exercise.weight[i]">
        </div>
      </div>
    `
});
