<script setup>
  	import Icon from '../components/Icon.vue';
	import Tools from '../components/Tools.vue';

    import { useProfileStore } from '@/stores/profile.js';

	const store = useProfileStore();

	const socials = store.profile.socials.filter(el => ['linkedin', 'django', 'gmail'].includes(el.icon));

</script>

<template>
	<div class="sidebar">
		<div class="sidebar__profile">
			<div class="sidebar__box">
				<picture class="sidebar__picture">
					<img :src="store.profile.img" alt="" class="sidebar__img">
				</picture>
				<div class="sidebar__contacts">
					<a 
						v-for="(socials, index) in socials" 
						:key="index" 
						:href="socials.src" 
						:class="['sidebar__link', `sidebar__link--${index}`]"
						target="_blank">
						<Icon 
							:name="socials.icon"  class="sidebar__icon"></Icon>
					</a>
				</div>
			</div>
			<span class="sidebar__nickname">Andrii Trofimuk</span>
		</div>
		<Tools class="sidebar__content" />
	</div>
</template>

<style lang="scss" scoped>
	.sidebar {
    	--standart-color: #fff;
		--size-profile: 70px;
		--font-profile: 22px;
		--size-icon: 20px;
		padding: 10px;
		background-color: $dark;
		&__profile {
			display: flex;
			align-items: center;
			flex-direction: column;
			@include row-gap($gap: 10px);
			padding-bottom: 20px;
			margin-bottom: 40px;
			border-bottom: 1px solid $brown;
		}
		&__content {
			max-height: 350px;
			overflow-y: scroll;
			@include scrollbar($thumb: $brown, $aria:#434345, $track: $dark)
		}
		&__box {
			position: relative;
			width: var(--size-profile);
			height: var(--size-profile);
			transition: all .8s ease 0s;
			transform-style: preserve-3d;
		}
		&__contacts, &__picture {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			overflow: hidden;
		}
		&__contacts {
			transform: rotateY(-180deg);
			background-color: #434345;
		}
		&__picture {
			transform: rotateY(0deg);
			backface-visibility: hidden;
			z-index: 2;
		}
		&__link {
			position: absolute;
			width: var(--size-icon);
			height: var(--size-icon);
			&--0 {
				top: 25%;
				left: 10%;
			}
			&--1 {
				top: 25%;
				right: 10%;
			}
			&--2 {
				bottom: 10%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		&__img {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
		}
		&__nickname {
			font-size: var(--font-profile);
			font-weight: 500;
			letter-spacing: 1px;
		}
	}
	@include min(768px) {
		.sidebar {
			--height-profile: 150px;
			&__profile {
				position: relative;
				height: var(--height-profile);
				padding: 0;
				margin: 0;
				border-bottom: none;
				&:after {
					content: '';
					position: absolute;
					bottom: 30px;
					left: 0;
					width: 100%;
					height: 1px;
					background-color: $brown;
				}
			}
			&__content {
				max-height: calc(100% - var(--height-profile));
				padding-right: 5px;
			}
		}
	}
	@include min(992px) {
		.sidebar {
			--font-profile: 16px;
			&__profile {
				&:hover {
					.sidebar__box {
						transform: rotateY(-180deg);
					}
				}
			}
		}
	}
	@include min(1200px) {
		.sidebar {
			--font-profile: 20px;
		}
	}
	@include min(1360px) {
		.sidebar {
			--size-profile: 120px;
			--size-icon: 35px;
			--font-profile: 22px;
			--height-profile: 200px;
		}
	}
</style>