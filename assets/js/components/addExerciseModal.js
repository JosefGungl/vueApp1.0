app.component('AddExerciseModal', {

    data() {
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
        }
    },

    emits: ['add-exercise'],

    props: {
        id: {
            type: String,
            required: true,
        },

    },

    methods: {
        addExercise(e) {
            this.$emit('add-exercise', this.newExercise);
            //clear form
            this.newExercise = {
                id: '',
                title: '',
                date: '',
                //reps and weight correlate by sets#
                sets: 0,
                reps: [],
                weight: [],
            }
        },
        removeSet: function (exercise) {
            if (exercise.sets > 0) {
                exercise.sets--;
            } else {
                exercise.sets = 0;
            }
        },
    },
    template: `
      <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id + 'Title'" aria-hidden="true">
        <form @submit.prevent="addExercise">
          <div class="modal-dialog" role="dialog">
            <div class="modal-content bg-inner">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalTitle">New Exercise</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <table class="container-fluid">
                  <tbody>
                  <tr>
                    <td>
                      <div class="col-md-7 col-lg-8">
                        <div class="row g-3">
                          <div class="col-sm-8">
                            <label for="exerciseName" class="form-label">Exercise Name: </label>
                            <input id="exerciseName" type="text" class="form-control" value=""
                                   v-model="newExercise.title" required>
                            <div class="invalid-feedback">Enter exercise name please.</div>
                          </div>
                        </div>
                        <div v-for="(sets, i) in newExercise.sets" class="row g-3">
                          <div class="col-sm-4">
                            <label for="exerciseReps" class="form-label">Reps: </label>
                            <input id="exerciseReps" type="number" class="form-control" value=""
                                   v-model="newExercise.reps[i]">
                          </div>
                          <div class="col-sm-4">
                            <label for="exerciseWeight" class="form-label">Weight: </label>
                            <input id="exerciseWeight" type="number" class="form-control" value=""
                                   v-model="newExercise.weight[i]">
                          </div>
                        </div>
                        <div class="row g-3 flex-row justify-content-start align-items-center pt-2">
                          <div class="col-sm-auto">
                            <q-btn no-caps v-on:click="newExercise.sets ++" color="grey" padding="xs xl">Add Set</q-btn>
                          </div>
                          <div class="col-sm-auto">
                            <q-btn no-caps v-if="newExercise.sets !== 0" @click="removeSet(newExercise)" 
                                   color="grey" padding="xs xl">Remove Set
                            </q-btn>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer justify-content-center">
                <q-btn no-caps text-color="white" type="submit" class="btn-save" padding="xs xl" data-bs-dismiss="modal">Save</q-btn>
              </div>
            </div>
          </div>
        </form>
      </div>
    `
});
