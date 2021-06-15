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
<style lang="scss" scoped>
@import '../assets/sass/app.scss';


.badge {
	&__container {
		border-radius: 50px !important;
		width: fit-content;
		padding: 4px 12px;
	}

	&__content {
		font-weight: 600 !important;
	}

	&--green {
		color: $white;
		background-color: $green;
	}

	&--blue {
		color: $white;
		background-color: $blue;
	}

	&--purple {
		color: $white;
		background-color: $purple;
	}

	&--orange {
		color: $white;
		background-color: $orange;
	}

	&--gray {
		color: $dark-gray;
		background-color: $light-gray;
	}
}

</style>
