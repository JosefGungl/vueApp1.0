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
        <form @submit.prevent>
          <div class="modal-dialog" role="dialog">
            <div class="modal-content bg-inner">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalTitle">New Exercise</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
<!--                <q-btn-toggle class="toggle" v-model="exerciseType" no-caps-->
<!--                              rounded toggle-color="primary"-->
<!--                              :options="[-->
<!--                                  {label: 'Weighted Exercise', value: 'weighted'},-->
<!--                                  {label: 'Cardio Exercise', value: 'cardio'}-->
<!--                              ]"/>-->
                <table class="container-fluid">
                  <tbody>
                  <tr>
                    <td>
                      <div class="col">
                        <div class="row q-pa-sm">
                          <div class="col-sm-8">
                            <q-input rounded outlined v-model="newExercise.title" label="Exercise Name"></q-input>
                            <div class="invalid-feedback">Enter exercise name please.</div>
                          </div>
                        </div>
                        <div v-for="(sets, i) in newExercise.sets" class="row g-3 q-pa-sm">
                          <div class="col-sm-4">
                            <q-input rounded outlined type="Number" v-model="newExercise.reps[i]" label="Reps"></q-input>
                          </div>
                          <div class="col-sm-4">
                            <q-input rounded outlined type="Number" v-model="newExercise.weight[i]" label="Weight"></q-input>
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
                <q-btn  no-caps text-color="white" @click="addExercise" class="btn-save" padding="xs xl"
                       data-bs-dismiss="modal">Save
                </q-btn>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    `
});
