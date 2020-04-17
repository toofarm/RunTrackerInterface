<template>
    <div class="details_form">
        <div class="input_wrapper">
            <label>What's your birthday?</label>
            <div class="birthday_wrap">
                <input type="number" name="day" id="day" placeholder="DD" maxlength="2"  v-model="day" required />
                <input type="number" name="month" id="month" placeholder="MM" maxlength="2"  v-model="month" required />
                <input type="number" name="year" id="year" placeholder="YYYY" maxlength="4"  v-model="year" required />
            </div>
        </div>
        <div class="input_wrapper">
            <label>What's your height?</label>
            <input type="number" id="feet" name="feet" placeholder="00" maxlength="2" v-model="feet" />"
            <input type="number" id="inches" name="inches" placeholder="00" maxlength="2"  v-model="inches" />'
        </div>
        <div class="input_wrapper">
            <label>What do you weigh?</label>
            <input type="number" id="weight" name="weight" placeholder="000" v-model="weight" />
        </div>
        <div class="btn_wrap">
            <button @click="submitDetails">Next  ></button>
            <router-link to="dashboard">
                <span>Skip</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "detailsForm",
  data() {
    return {
      weight: null,
      feet: null,
      inches: null,
      day: null,
      month: null,
      year: null
    };
  },
  methods: {
      ...mapActions(['updateUser']),
      submitDetails: function () {
          let bod = {}
          if (this.day && this.month && this.year) {
              bod['birthdate'] = new Date(`${this.day} ${this.month} ${this.year}`)
          }
          if (this.feet || this.inches) {
              let f = this.feet * 12
              f += this.inches
              bod['height'] = f
          }
          if (this.weight) bod['weight'] = this.weight
          this.updateUser(bod)
      }
  }
};
</script>


<style lang="scss" scope>
@import "../../styles/_app";

.details_form {
  @extend %form-page;
  .input_wrapper {
    label {
        margin-bottom: 0.6em;
    }
    input[type="number"] {
      display: inline-block;
      border-bottom: 1px solid $standardText;
      background-color: $backgroundGrey;
      box-sizing: border-box;
      font-size: 1em;
      border-top: none;
      border-left: none;
      border-right: none;
    }
    .birthday_wrap {
      input[type="number"] {
        width: 2em;
        margin-right: 0.7em;
      }
      #year {
        width: 3em;
      }
    }
    #feet, #inches {
        width: 1.5em;
    }
    #weight {
        width: 3em;
    }
  }
  .btn_wrap {
      @extend %centered-button;
  }
}
</style>
