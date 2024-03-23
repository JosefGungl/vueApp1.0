app.component('EndWorkoutModal', {
    data() {
        return {
            newReview: {
                review: '',
                rating: 0,
                date: ''
            },
            ratingModel: 0
        }
    },

    props: {
        id:{
            type: String,
            required: true,
        }
    },

    emits:['add-review'],
    methods: {
        addReview(){
            this.newReview.rating = this.ratingModel;
            this.$emit('add-review', this.newReview);
            this.newReview = {
                review: '',
                rating: 0,
                date: ''
            }
        },
    },

    template: `
      <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id + 'Title'" aria-hidden="true">
        <form @submit.prevent="addReview">
          <div class="modal-dialog">
            <div class="modal-content bg-inner">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalTitle">How did your workout go?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Rating: {{ ratingModel }}
                <div class="q-pa-md">
                  <div class="d-flex align-items-center">
                    <template v-for="i in 5">
                      <div class="q-rating__icon-container flex flex-center">
                        <i class="q-icon notranslate material-icons q-rating__icon text-orange"
                           :class="{'text-orange': i <= ratingModel, 'text-grey': i > ratingModel}"
                           @click="ratingModel = i"
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
                        v-model="newReview.review"
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
