<script setup>

import { defineAsyncComponent } from 'vue'

const Main = defineAsyncComponent(() => new Promise(res => {
	setTimeout(() => {
		res(import('./layout/Main.vue'))
	}, 1000);
}))

import 'virtual:svg-icons-register'
import { ref } from 'vue';

const cursor = ref(null)

</script>

<template>
	<Transition name="loading">
		<Suspense>
			<Main />
			<template #fallback>
				<div class="preload-info">
					<span class="loader"></span>
				</div>
			</template>
		</Suspense>
	</Transition>
</template>

<style lang="scss" scoped>
.preload-info {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
}

.loader {
	display: block;
    width: 150px;
    height: 150px;
    background-color: #ff3d00;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset,
      0 5px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
	&:before,
 	&:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 45%;
		top: -40%;
		background-color: #fff;
		animation: wave 5s linear infinite;
	}
 	 &:before {
		border-radius: 30%;
		background: rgba(255, 255, 255, 0.4);
		animation: wave 5s linear infinite;
	}
}

@keyframes wave {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
}

.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}

.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}


@include min(1360px) {
	.preload-info {
		font-size: 50px;
	}
}
</style>