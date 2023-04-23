<script setup>
    import { useTechnologyStore } from '@/stores/technology.js';
    import { ref } from 'vue';

    import ItemTool from './ItemTool.vue';

	const store = useTechnologyStore();
</script>

<template>
    <ul class="tools">
        <ItemTool 
            v-for="(list, key) in store.technology" :key="key" 
            :list="list" 
            :name="key"
            class="tools__item"
            />
    </ul>
</template>

<style lang="scss">
    .tools {
        --size-close: 20px;
        display: flex;
        flex-direction: column;
        @include row-gap($gap: 15px);
        &__icon {
            --size: 20px;
            flex-shrink: 0;
            stroke:  $green;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            @include transition((transform, stroke), .3s);
        }
        &__button {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 10px 15px 10px 15px;
            border: 1px solid $green;
            border-radius: 4px;
            @include column-gap($gap: 10px);
            &.active {
                .tools__icon {
                    stroke: #797b7b;
                    transform: rotate(45deg);
                }
            }
        }
        &__text {
            margin: 0 auto;
            letter-spacing: 1px;
        }
        &__box {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 0 10px;
            margin: 10px 0;
            @include column-gap($gap: 10px);
            @include row-gap($gap: 10px);
        }
        &__technology {
            padding: 3px 5px;
            border: 1px solid #bc9a34;
            border-radius: 4px;
            text-align: center;
            line-height: 1.3;
        }
    }
    @include min(992px) {
        .tools {
            &__button {
                    @include transition(border-color, .5s);
                &:hover {
                    border-color: #bfe52e;
                    .tools__text:before {
                        width: 100%;
                    }
                }
            }
            &__text {
                position: relative; 
                &:before {
                    content: '';
                    position: absolute;
                    bottom: -3px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #fff;
                    border-radius: 4px;
                    @include transition(width, .5s);
                }
            }
            &__technology {
                @include transition((background, color), .5s);
                &:hover {
                    background: #bc9a34;
                }
            }
        }
    }
</style>