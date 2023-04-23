<script setup>
    import Socials from '../components/Socials.vue';

    let date = new Date();

    date = `${('0' + date.getDate()).slice(-2)}.${('0' + date.getMonth()).slice(-2)}.${date.getFullYear()}`;
</script>

<template>
    <div class="footer">
        <span class="footer__date">
            {{ date }}
        </span>
        <Socials class="footer__socials"/>        
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        --font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @include row-gap($gap: 15px);
        width: 100%;
        padding: 20px 0;
        background-color: #f3f3ed;
        &__date {
            font-size: var(--font-size);
            font-weight: 500;
            color: $gray;
        }
    }
    @include min(576px) {
        .footer {
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 15px;
        }
    }
    @include min(992px) {
        .footer {
            --font-size: 14px;
        }
    }
    @include min(1200px) {
        .footer {
            --font-size: 16px;
        }
    }
    @include min(1360px) {
        .footer {
            --font-size: 18px;
        }
    }
</style>