<template>
    <div class="loader">
        <font-awesome-icon icon="circle-notch" />
    </div>
</template>

<script>
export default {
    name: 'loader'
}
</script>


<style lang="scss" scoped>
@import '../styles/_app';

.loader {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgba(143, 147, 141, 0.8);
    z-index: 1000;
    pointer-events: none;
    svg {
        font-size: 4.5em;
        align-self: center;
        color: $linkGreen;
        animation: spin 1s infinite linear;
    }
}

// Spin animation
@keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
}
</style>
