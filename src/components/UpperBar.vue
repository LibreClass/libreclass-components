<template>
	<div>
		<div
			class="cont"
		>
			<h2>Diários</h2>
			<div
				class="right-side"
			>
				<notification-bell 
					:isActive="true"
					class="margin"
				/>
				<avatar />
			</div>
		</div>
		<hr>
	</div>
</template>

<script>
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
	justify-content: space-between;
}

.right-side {
	display: flex;
	align-items: center;
}

.margin {
	margin-right: 20px;
}
</style>
