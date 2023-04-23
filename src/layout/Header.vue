<script setup>
    import Socials from '../components/Socials.vue';
</script>

<template>
    <div class="header">
        <Socials class="header__socials"/>        
    </div>
</template>

<style lang="scss" scoped>
    .header {
        --height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--height);
        width: 100%;
        background-color: #f3f3ed;
    }
    @include min(768px) {
        .header {
            justify-content: flex-end;
            padding-right: 15px;
        }
    }
    @include min(1360px) {
        .header {
            --height: 40px;
        }
    }
</style>