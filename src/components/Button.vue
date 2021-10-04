<template>
	<button
		:class="`button__container--${variant}`"
		@click="$emit('clicked')"
	>
		<span :class="`button__text--${variant}`">
			<slot />
		</span>
	</button>
</template>

<script>
export default {
	props: {
		/**
		 * A variante do Botão. São 2 variantes: 'primary', 'secondary' e 'disabled'
		 */
		variant: {
			type: String,
			default: 'primary',
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../assets/sass/app.scss';


.button {
	&__text--primary {
		font-weight: 600 !important;
		font-size: 16px;
		color: #fff;
	}

	&__container--primary {
		border-radius: 10px;
		padding: 12px 24px;
		width: fit-content;
		background-color: #206ED9;
		border: 1px solid #206ED9;
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.5s;
	}

	&__container--primary:hover {
		transition: all 0.5s;
		background-color: #1C5FBD;
		border: 1px solid #1C5FBD;
	}

	&__container--primary:active {
		background-color: #1A56A9;
		border: 1px solid #206ED9;
	}

	&__text--secondary {
		font-weight: 600 !important;
		font-size: 16px;
		color: #303A44;
	}

	&__container--secondary {
		border-radius: 10px;
		padding: 12px 24px;
		width: fit-content;
		background-color: #F8FBFE;
		border: 1px solid #F8FBFE;
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.5s;
	}

	&__container--secondary:hover {
		transition: all 0.5s;
		background-color: #F2F7FD;
		border: 1px solid #F2F7FD;
	}

	&__container--secondary:active {
		background-color: #E9F2FC;
		border: 1px solid #E9F2FC;
	}
}
</style>
