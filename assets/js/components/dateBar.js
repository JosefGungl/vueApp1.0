app.component('DateBar', {

    data: function () {
        return {
            newDate: new Date,
        }
    },

    props: {
        date: {
            type: String,
            required: true,
        },
    },

    emits: ['edit-date', 'update-date'],
    methods: {
        editDate(edit) {
            this.$emit('edit-date', edit);
        },
        updateDate() {
            this.$emit('update-date', this.newDate);
        },
    },

    created: function () {
        this.newDate = this.date;
    },

    template: `
      <div class="row g-3">
        <div class="col text-end align-items-center">
          <button class="btn border-0" @click="editDate(-1)"><-- Yesterday</button>
        </div>
        <div class="col align-items-center text-center fw-bold fs-2">
          Lift Log
        </div>
        <div class="col align-items-center">
          <button class="btn border-0" @click="editDate(1)">Tomorrow --></button>
        </div>
      </div>
      <!-- today's date -->
      <div class="row g-3">
        <div class="col text-center align-items-center">
          <button class="btn border-0 btn-date">
            <input type="date" id="currentDate" @input="updateDate" v-model="newDate" :value="date"/>
          </button>
        </div>
      </div>
    `
});