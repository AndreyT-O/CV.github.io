<script setup>
	import { useHistoryStore } from '@/stores/history';
	import { onMounted, ref } from 'vue';

	import Icon from '../components/Icon.vue';

	const parent = ref(null);

	const store = useHistoryStore();

	function monthDiff(firstDate = null, secondDate = null, type = null) {
		
		if(firstDate == null) return;
		
		secondDate = secondDate ? secondDate : new Date();

        let count, currentYear, currentMonth;

		count = (secondDate.getFullYear() - firstDate.getFullYear()) * 12;
		count -= firstDate.getMonth() + 1;
		count += secondDate.getMonth();

        currentYear = Math.floor(count / 12);
        currentMonth = count % 12;

        currentYear = currentYear < 1 ? '' : currentYear == 1 ? `${ currentYear } year` : `${ currentYear } years`;
        currentMonth = currentMonth > 0 ? `${ currentMonth } month` : '';

		switch (type) {
			case 'years':
			return `${currentYear}`;
				break;
		
			default:
				return `${currentYear} ${currentMonth}`;
				break;
		}
	}

	function checkValue(index, element) {
		switch (index) {
			case 'age':
				return monthDiff(element, null, 'years')
				break;
			default:
				return element;
				break;
		}
	}

</script>

<template>
	<section class="home" ref="parent">
		<div class="home__box" v-for="(history, index) of store.history" :key="index">
			<h1 class="home__title">
				{{ index }}
			</h1>
			<ul class="home__inner home__inner--list" v-if="index == 'about me'">
				<li class="home__item" v-for="(item, index) of history" :key="index">
					<span class="home__first">{{ item[0] }}:</span>
					<span 
						:class="['home__second', { 'js--dom-element': item[0] == 'email' }]" :data-type="item[0]">
						{{ checkValue(item[0], item[1]) }}
					</span>
				</li>
			</ul>
			<div class="home__inner" v-if="index == 'education'">
				<div class="home__head">
					<div class="home__inner-name">
						<span class="home__name">{{ history.name }}</span>
						<Icon :name="history.icon" v-if="history.icon" class="home__icon"/>
					</div>
					<span class="home__date">
						{{ history.date }}
					</span>
				</div>
				<div class="home__body">
					<p class="home__text">
						{{ history.position }}
					</p>
				</div>
			</div>
			<div class="home__inner" v-if="index == 'work experience'" v-for="(item, index) of history" :key="index">
				<div class="home__head">
					<div class="home__inner-name">
						<span class="home__name">{{ item.company }} <span>({{ item.city }})</span></span>
						<Icon :name="item.icon" v-if="item.icon" class="home__icon"/>
					</div>
					<span class="home__date">
						{{ monthDiff(item.startTime, item.endTime) }}
					</span>
				</div>
				<div class="home__body">
					<p v-for="(text, index) of item.description" :key="index" class="home__text">
						{{ text }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.home {
		--font-title: 26px;
		--margin-inner: 20px;
		--margin-head: 20px;
		--gap-body: 10px;
		--size-icon: 20px;
		display: flex;
		flex-direction: column;
		@include row-gap($gap: 30px);
		padding: 20px 15px;
		&__inner {
			display: flex;
			flex-direction: column;
			&-name {
				display: flex;
				align-items: center;
				@include column-gap($gap: 10px);
			}
			&--list {
				@include row-gap($gap: 10px);
			}
			&:not(:last-child) {
				margin-bottom: var(--margin-inner);
				padding-bottom: var(--margin-inner);
				border-bottom: 1px solid $gray;
			}
		}
		&__icon {
			width: var(--size-icon);
			height: var(--size-icon);
			transform: translateY(-5px);
		}
		&__title {
			display: block;
			margin-bottom: 30px;
			font-weight: 700;
			font-size: var(--font-title);
			text-align: center;
			text-transform: uppercase;
			text-decoration: underline;
		}
		&__title, &__company, &__text {
			line-height: 1.3;
		}
		&__head {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			flex-direction: column;
			@include row-gap($gap: 10px);
			margin-bottom: var(--margin-inner);
		}
		&__name, &__date, &__first {
			font-weight: 600;
			span {
				font-weight: inherit;
			}
		}
		&__first {
			width: 40%;
		}
		&__second {
			width: 60%;
		}
		&__item {
			display: flex;
			align-items: center;
		}
		&__body {
			display: flex;
			flex-direction: column;
			@include row-gap($gap: var(--gap-body));
		}
	}
	@include min(380px) {
		.home {
			--font-title: 24px;		
			--size-icon: 25px;	
		}
	}

	@include min(576px) {
		.home {
			&__head {
				flex-direction: row;
			}
			&__body {
				padding-left: 30px;
			}
			&__first {
				width: 20%;
			}
			&__second {
				width: 80%;
			}
		}
	}
	@include min(992px) {
		.home {
			--font-title: 22px;	
			--margin-inner: 10px;	
			--gap-body: 5px;
			--size-icon: 20px;
			padding-top: 50px;
			&__box {
				&:hover {
					.home__title {
						color: #86a60d;
					}
				}
			}
			&__item {
				&:hover {
					.home__first {
						color: #86a60d;
					}
				}
			}
			&__inner {
				&:hover {
					.home__name {
						color: #86a60d;
					}
				}
			}
			&__name {
				span {
					color: inherit;
				}
			}
			&__title, &__name, &__first {
				@include transition(color, .5s);
			}
		}
	}
	@include min(1200px) {
		.home {
			--font-title: 26px;		
			--margin-inner: 15px;	
			padding: 50px 45px;
			&__first {
				width: 15%;
			}
			&__second {
				width: 85%;
			}
		}
	}
	@include min(1360px) {
		.home {
			--font-title: 28px;	
			--margin-inner: 20px;	
			--gap-body: 10px;	
			--size-icon: 25px;
			padding: 40px 60px;
			@include row-gap($gap: 60px);
		}
	}
	@include min(1560px) {
		.home {
			--font-title: 30px;	
			padding-top: 100px;		
		}
	}
</style>