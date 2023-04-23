<script setup>
  import { computed, defineProps, onMounted, ref } from 'vue';
    
  const props = defineProps({
    prefix: {
        type: String,
        default() {
            return 'icon';
        }
    },
    name: {
        type: String,
        required: true
    },
    resize: {
        type: Boolean,
        default: false
    }
  }),
  symbolId = computed(() => `#${props.prefix}-${props.name}`);
  
</script>

<template>
    <svg aria-hidden="true" class="icon">
        <use :href="symbolId" />
    </svg>
</template>

<style lang="scss">
    .icon {
        --size: 35px;
        width: var(--size);
        height: var(--size);
    }
    @include min(992px) {
        .icon {
            --size: 25px;
        }
    }
    @include min(1200px) {
        .icon {
            --size: 30px;
        }
    }
</style>