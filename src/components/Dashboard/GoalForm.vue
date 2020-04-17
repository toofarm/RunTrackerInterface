<template>
    <div class="goal_form">
        <div class="input_wrapper">
            <label>Name your goal</label>
            <div class="birthday_wrap">
                <input type="text" name="goalName" id="goalName"  v-model="name" required />
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
  name: "goalForm",
  data() {
    return {
      name: null
    };
  },
  methods: {
      ...mapActions(['updateUser']),
      submitDetails: function () {
          console.log('We are creating a goal')
      }
  }
};
</script>


<style lang="scss" scope>
@import "../../styles/_app";

.goal_form {
  @extend %form-page;
  .input_wrapper {
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
  }
  .btn_wrap {
      @extend %centered-button;
  }
}
</style>
