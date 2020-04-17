<template>
    <div class="error">
        <font-awesome-icon icon="times" @click="setError(null)" />
        <div class="error_msg">
            {{error}}
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'error',
    methods: {
        ...mapMutations(['setError'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/_app';

.error {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(236, 24, 18);
    color: white;
    z-index: 100;
    font-size: 1.5em;
    padding: 0.5em;
    svg {
        font-size: 1em;
        align-self: center;
        color: #AAA;
        border-radius: 50px;
        padding: 0.8em 1em;    
    }
    svg:hover {
        background-color: rgba(141, 141, 141, 0.5);
        color: #CCC;
        cursor: pointer;
    }
    svg:active {
        background-color: rgba(141, 141, 141, 0.5);
        border: 1px solid #eee;
    }
    .error_msg {
        font-weight: bold;
        margin: 0.3em;
    }
}

</style>
