<template>
    <div class="navbar-wraper">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.navbar-wraper{
    display: flex;
    height: 1.2rem;

    text-align: center;
    justify-content: center;
    align-items: center;
    box-shadow: 0rem .1rem .1rem rgba(100,100,100,.1);
}


    .left,.right{
        width: .8rem;
        /*height: .6rem;*/
    }

    .center{
        flex: 1;
    }
</style>