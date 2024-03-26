app.component('EditReviewModal', {
    props:{
      review: {
          type: Object,
          required: true,
      },
        id: String,
    },

    //TODO: save reviews
    template: `
    <div class="modal fade" :id="id" :aria-labelledby="id + review.date" tabindex="-1" aria-hidden="true">
      <form>
        <div class="modal-dialog">
          <div class="modal-content bg-inner">
            <div class="modal-header">
              <h4 class="modal-title">Edit Review</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close" />
            </div>
            <div class="modal-body text-start">
              Rating: {{ review.rating }}
              <div class="q-pa-md">
                <div class="d-flex align-items-center">
                  <template v-for="i in 5">
                    <div class="q-rating__icon-container flex flex-center">
                      <i class="q-icon notranslate material-icons q-rating__icon text-orange"
                         :class="{'text-orange': i <= review.rating, 'text-grey': i > review.rating}"
                         @click="review.rating = i"
                         :key="i"
                         style="font-size: 3.5em;"
                      >
                        star
                      </i>
                    </div>
                  </template>
                </div>
              </div>
              <div class="row q-pt-xl q-pl-md">
                Review:
                <div class="q-pl-lg q-pt-md justify-center ">
                  <q-input
                      v-model="review.review"
                      filled
                      autogrow
                  />
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <q-btn no-caps text-color="white" type="submit" class="btn-save" padding="xs xl" data-bs-dismiss="modal">Save</q-btn>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    `
});
