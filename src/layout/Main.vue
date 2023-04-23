<script setup>
    import Sidebar from './Sidebar.vue';
    import Header from './Header.vue';
    import Home from '../views/Home.vue';
    import Footer from './Footer.vue';
</script>

<template>
    <main class="main">
        <Header class="main__header"/>
        <Sidebar class="main__sidebar" />
        <Home class="main__home" />
        <Footer class="main__footer"/>
    </main>
</template>

<style lang="scss" scoped>
	.main {
        display: flex;
        flex-direction: column;
        &__sidebar {
            margin-bottom: 30px;
        }
	}
    @include min(768px) {
        .main {
            --count-column: 3;
            display: grid;
            grid-template-columns: repeat(var(--count-column), 1fr);
            grid-template-rows: 40px 1fr 40px;
            @include row-gap($gap: 0);
            &__header {
                grid-row: 1;
                grid-column: 2 / span var(--count-column);
            }
            &__sidebar {
                grid-row: 1 / span 3;
                grid-column: 1;
                margin-bottom: 0;
            }
            &__home {
                grid-row: 2;
                grid-column: 2 / span var(--count-column);
            }
            &__footer {
                grid-row: 3;
                grid-column: 2 / span var(--count-column);
            }
            &__home {
                height: calc(100vh - 80px);
                overflow-y: scroll;
                @include scrollbar($thumb: $brown, $track: #f3f3ed, $widthScollbar: 10px)
            }
        }
    }
    @include min(1360px) {
        .main {
            --count-column: 5;
        }
    }
</style>