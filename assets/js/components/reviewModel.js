app.component('ReviewModel', {
    props:{
      review: Object,
    },
    emits:['delete-review'],
    methods:{
      formatDate(reviewDate){
          return moment(reviewDate).format("dddd MMM Do YYYY");
      },
      deleteReview(){
        this.$emit('delete-review');
      },
    },

    template: `
      <div class="row justify-center">
        <div class="card justify-center" style="width: 700px;">
          <div class="card-header bg-white">
            <div class="row">
              <div class="col col-2"></div>
              <div class="col">
                <h5>
                  Review for: {{ formatDate(review[0].date) }}
                </h5>
              </div>
              <div class="col col-2 justify-end text-end">
                <q-btn type="button" no-caps color="grey" data-bs-toggle="modal"
                       data-bs-target="#editReviewModal">Edit Review
                </q-btn>

                <edit-review-modal id="editReviewModal"
                                   :review="review[0]"
                                   @delete-review="deleteReview"
                ></edit-review-modal>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row inline-block">
              Rating:
              <div class="q-pa-md">
                <div class="d-flex align-items-center">
                  <template v-for="i in 5">
                    <div class="q-rating__icon-container flex flex-center">
                      <i class="q-icon notranslate material-icons q-rating__icon text-orange"
                         :class="{'text-orange': i <= review[0].rating, 'text-grey': i > review[0].rating}"
                         :key="i"
                         style="font-size: 3.5em;"
                      >
                        star
                      </i>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <q-input v-model="review[0].review" filled readonly/>
          </div>
        </div>
      </div>
    `
});
