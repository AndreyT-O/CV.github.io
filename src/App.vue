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
					loading...
				</div>
			</template>
		</Suspense>
	</Transition>
</template>

<style lang="scss" scoped>
.preload-info {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);	
	font-size: 30px;
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