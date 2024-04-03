app.component('EditExerciseModal', {
    props: {
        id: {
            type: String,
            required: true,
        },
        exercise: {
            type: Object,
            required: true,
        }
    },

    emits: ['add-set', 'delete-set', 'save-exercise', 'delete-exercise'],
    methods: {
        addSet() {
            this.$emit('add-set');
        },
        deleteSet(i) {
            this.$emit('delete-set', i);
        },
        saveExercise() {
            this.$emit('save-exercise');
        },
        deleteExercise(exercise) {
            this.$emit('delete-exercise', exercise);
        },
    },
    //TODO: Fix modal closing on last set being removed

    template: `
      <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id + exercise.name" aria-hidden="true">
        <form @submit.prevent="deleteSet, addSet">
          <div class="modal-dialog">
            <div class="modal-content bg-inner">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalTitle">Edit Exercise</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body justify-content-center">
                <table class="container-fluid">
                  <tbody>
                  <tr>
                    <td class="justify-content-center">
                      <div class="col-md-7 col-lg-8 flex-column">
                        <div class="row g-3 q-pa-sm">
                          <!-- exercise name -->
                          <div class="col-sm-1"></div>
                          <div class="col-sm-9">
                            <q-input rounded outlined v-model="exercise.title" label="Exercise Name"
                                     
                            ></q-input>
                            <div class="invalid-feedback">Enter exercise name please.</div>
                          </div>
                        </div>
                        <div >
                          <div v-for="(sets, i) in exercise.sets" :key="exercise.title">
                            <exercise-list-item
                                :i="i"
                                :exercise="exercise"
                                @delete-set="deleteSet"
                            ></exercise-list-item>
                          </div>
                          <div class="row g-3 flex-row">
                            <div class="col-sm-3 pt-3">

                            </div>
                          </div>
                          <div class="row g-3 flex-row justify-content-center align-items-center">
                            <div class="col-sm-3">
                              <q-btn @click="addSet" round flat padding="xs" icon="fa-solid fa-circle-plus"></q-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer justify-content-center">
                <q-btn no-caps text-color="white" type="submit" @click="saveExercise" class="btn-save"
                       data-bs-dismiss="modal" padding="xs xl">
                  Save
                </q-btn>

                <q-btn no-caps type="submit" @click="deleteExercise(exercise)" color="red"
                       data-bs-dismiss="modal" padding="xs xl">Delete Exercise
                </q-btn>
              </div>
            </div>
          </div>
        </form>
      </div>
    `
});
