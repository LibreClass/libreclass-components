<template>
	<div
		class="card__container"
	>
		<div class="card__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/app.scss';

.card {
	&__container {
		background: #FEFEFE;
		border: 1px solid #F0F3FA;
		box-sizing: border-box;
		border-radius: 12px;
		min-height: 60px;
		width: fit-content;
		padding: 20px;
	}

	&__content {
		font-weight: 600 !important;
	}
}
</style>
