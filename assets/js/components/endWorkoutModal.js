app.component('EndWorkoutModal', {
    props: {
        id:{
            type: String,
            required: true,
        }
    },

    emits:['add-to-day-list'],
    methods: {
        addToDayList(){
            this.$emit('add-to-day-list');
        },
    },

    template: `
      <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id + 'Title'" aria-hidden="true">
        <form @submit.prevent="addToDayList">
          <div class="modal-dialog">
            <div class="modal-content bg-inner">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalTitle">How did your workout go?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <table class="container-fluid">
                  <tbody>
                  <tr>
                    <td>
                      <div class="col-md-7 col-lg-8">
                        <div class="row g-3">
                          <div class="col-sm-12">
                            <div class="row">
                              <div class="col">
                                <label for="workout-rating" class="form-label">Workout rating:</label>
                              </div>
                              <div class="col slider-screen">0</div>
                            </div>

                            <input id="workout-rating" type="range" class="form-range"
                                   min="0" max="5" step="0.5" value="0">
                          </div>
                        </div>
                        <div class="row g-3">
                          <!-- review box -->
                          <div class="col-sm-12">
                            <label for="review" class="form-label">review:</label>
                            <textarea id="review" class="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="submit" @click="addToDayList" class="btn btn-save btn-primary">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    `
});