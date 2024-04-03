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
      <div class="row flex-row q-pa-sm ">
        <div class="col-sm-3">
          Set: {{ i + 1 }}
          <q-btn @click="deleteSet(i)" @click.prevent round flat padding="xs"
                 icon="fa-solid fa-circle-minus"></q-btn>
        </div>
        <div class="col-sm-4">
          <q-input rounded outlined v-model="exercise.reps[i]" label="reps"></q-input>
        </div>
        <div class="col-sm-5">
          <q-input rounded outlined v-model="exercise.weight[i]" label="weight"></q-input>
        </div>
      </div>
    `
});
