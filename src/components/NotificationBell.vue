<template>
	<div>
		<div
			class="cont"
		>
			<div
				v-if="isActive"
				class="test"
			>

			</div>
			<ion-icon name="notifications-outline"></ion-icon>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		/**
		 * Controla o status do ícone de notificação
		 */
		isActive: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../assets/sass/app.scss';

ion-icon {
  --ionicon-stroke-width: 32px;
  font-size: 22px;
  color: #182532;
}

.test {
	background-color: #ED3B51;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	margin-bottom: -8px;
    margin-right: 3px;
	z-index: 99;
}

.cont {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
    width: fit-content;
}
</style>
