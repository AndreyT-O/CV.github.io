<script setup>
    import { useProfileStore } from '@/stores/profile.js';
    import Icon from './Icon.vue';

    const store = useProfileStore();    
</script>

<template>
    <ul class="socials">
        <li 
            v-for="(social, index) in store.profile.socials"
            :key="index"
            class="socials__item"
        >
        <a :href="social.src" class="socials__link" target="_blank">
            <Icon :name="social.icon" class="socials__icon"></Icon>
        </a>
    </li>
    </ul>
</template>

<style lang="scss" scoped>
    .socials {
        display: flex;
        align-items: center;
        justify-content: center;
        @include column-gap($gap: 10px);
    }
    @include min(992px) {
        .socials {
            justify-content: flex-end;
        }
    }
</style>