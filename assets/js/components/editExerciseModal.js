app.component('EditExerciseModal', {
    props: {
        id: {
            type: String,
            required: true,
        },
        exercise:{
            type: Object,
            required: true,
        }
    },

    emits:['add-set', 'delete-set', 'save-exercise', 'delete-exercise'],
    methods: {
        addSet(){
            this.$emit('add-set');
        },
        deleteSet(i){
            this.$emit('delete-set', i);
        },
        saveExercise(){
            this.$emit('save-exercise');
        },
        deleteExercise(id){
            this.$emit('delete-exercise', id);
        },
    },
    //TODO: Fix modal closing on last set being removed

    template: `
      <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id + exercise.title" aria-hidden="true">
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
                        <div class="row g-3">
                          <!-- exercise name -->
                          <div class="col-sm-10">
                            <label for="editExerciseName" class="form-label">Exercise Name: </label>
                            <input id="editExerciseName" type="text" class="form-control" :value="exercise.title">
                            <div class="invalid-feedback">Enter exercise name please.</div>
                          </div>
                        </div>
                        <div v-for="(sets, i) in exercise.sets" :key="exercise.title" class="row g-3 flex-row justify-content-start align-items-center">
                          <!--set info -->
                          <!-- delete set button -->
                          <div class="col-sm-3">
                            Set: {{i + 1}}
                            <button class="btn"><i @click="deleteSet(i)" type="button" class="fa-solid fa-circle-minus fa-xl"></i></button>
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
                        <div class="row g-3 flex-row">
                          <div class="col-sm-3 pt-3">

                          </div>
                        </div>
                        <div class="row g-3 flex-row justify-content-center align-items-center">
                          <div class="col-sm-3">
                            <button class="btn"><i type="button" @click="addSet" class="fa-solid fa-circle-plus fa-2xl"></i></button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="submit" @click="saveExercise" class="btn btn-save btn-primary" data-bs-dismiss="modal">Save</button>
                <button type="submit" @click="deleteExercise(exercise.id)" class="btn btn-danger" data-bs-dismiss="modal">Delete Exercise</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    `
});