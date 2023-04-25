<script setup>

import Main from './layout/Main.vue';

import 'virtual:svg-icons-register'

</script>

<template>
	<Suspense>
		<Main />
		<template #fallback>
			loading...
		</template>
	</Suspense>
</template>
