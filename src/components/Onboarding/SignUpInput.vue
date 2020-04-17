<template>
    <div class='input_wrap'> 
        <input :type="type" :name='name' :id='name' @keyup="validator($event)" @focus="$emit('focusing')" @blur="$emit('blurring')" required />
        <label :for="name">{{label}}</label>
        <transition name="bounce_in">
            <font-awesome-icon icon="times" class="invalid" v-if="valid === false"/>
        </transition>
        <transition name="bounce_in">
            <font-awesome-icon icon="thumbs-up" class="valid" v-if="valid === true"/>
        </transition>
    </div>
</template>

<script>
export default {
  props: ['name', 'label', 'type', 'valid', 'validator'],
  name: "signUpInput"
};
</script>


<style lang="scss" scoped>
@import "../../styles/_app";

.input_wrap {
  @extend %text-input;
}
</style>
