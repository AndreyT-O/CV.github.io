<script setup>
    import { ref } from 'vue';

    import { Collapse } from 'vue-collapsed'
    import Icon from './Icon.vue';

    const props = defineProps({
        list: Array,
        name: String
    });

    const isOpen = ref(false);
</script>

<template>
    <li>
        <button 
            :class="['tools__button magic-hover magic-hover__square', {'active': isOpen}]" 
            @click="() => isOpen = !isOpen">
            <span class="tools__text">{{ props.name }}</span>
            <Icon name="plus" class="tools__icon" :resize="true"></Icon>
        </button>
        <Collapse :when="isOpen" class="accordion">
            <div class="tools__box">
                <span class="tools__technology" v-for="(item, index, key) in props.list" :key="key">{{ item }}</span>
            </div>
        </Collapse>
    </li>
</template>

<style scoped>
    .accordion {
        transition: height 0.4s cubic-bezier(0.3, 0, 0.6, 1);
    }
</style>