<template>
	<div
		class="badge__container"
		:class="predefinedStyle"
	>
		<div>
			<small class="badge__content">
				<slot />
			</small>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		/**
		 * A variante da Badge. São 5 variantes: 'green', 'blue',
		 * 'purple', 'orange' e 'gray'.
		 */
		variant: {
			type: String,
			default: 'gray',
		},
	},

	computed: {
		predefinedStyle() {
			let computedStyle = '';
			switch (this.variant) {
				case 'green':
					computedStyle = 'badge--green';
					break;
				case 'blue':
					computedStyle = 'badge--blue';
					break;
				case 'purple':
					computedStyle = 'badge--purple';
					break;
				case 'orange':
					computedStyle = 'badge--orange';
					break;
				case 'gray':
					computedStyle = 'badge--gray';
					break;
				default:
					computedStyle = 'badge--gray';
					break;
			}

			return computedStyle;
		},
	},
};
</script>
<style>

.badge__container {
	border-radius: 50px !important;
	width: fit-content;
	padding: 4px 12px;
}

.badge__content {
	font-weight: 600 !important;
}

.badge--blue {
	color: #FFF;
	background-color: #52A3FC;
}

.badge--green {
	color: #FFF;
	background-color: #44C9A5;
}

.badge--orange {
	color: #FFF;
	background-color: #F3935C;
}

.badge--purple {
	color: #FFF;
	background-color: #996DE1;
}

.badge--gray {
	color: #44505C;
	background-color: #F0F3FA;
}

</style>
