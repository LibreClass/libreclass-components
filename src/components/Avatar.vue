<template>
	<div
		class="flex"
	>
		<div
			class="avatar__container"
			:class="predefinedStyle"
		>
			<img
				v-if="img.length !== 0"
				class="avatar__image"
				:src="img"
				alt="avatar"
			/>

			<small
				v-else
				class="avatar__text"
			>
				{{ reducedName }}
			</small>
		</div>

		<div
			class="flex-content"
		>
			<span
				class="name"
			>
				{{ name }}
			</span>

			<span
				class="subcontent"
			>
				{{ subContent }}
			</span>

		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			computedName: "RD",
		}
	},

	props: {
		/**
		 * Propriedade utilizada para indicar o nome do avatar
		 */
		name: {
			type: String,
			default: 'Maria Clara',
		},
		/**
		 * Propriedade utilizada para indicar texto adicional do avatar
		 */
		subContent: {
			type: String,
			default: 'Diretora',
		},
		/**
		 * Propriedade utilizada para indicar as iniciais do nome do avatar
		 */
		img: {
			type: String,
			default: '',
		},
		/**
		 * A variante do avatar. São 5 variantes: 'green', 'blue',
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
					computedStyle = 'avatar--green';
					break;
				case 'blue':
					computedStyle = 'avatar--blue';
					break;
				case 'purple':
					computedStyle = 'avatar--purple';
					break;
				case 'orange':
					computedStyle = 'avatar--orange';
					break;
				case 'gray':
					computedStyle = 'avatar--gray';
					break;
				default:
					computedStyle = 'avatar--gray';
					break;
			}

			return computedStyle;
		},

		reducedName() {
			let nameAux = this.name;
			let splitedName = nameAux.split(' ');
			return splitedName[0][0] + splitedName[1][0];
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../assets/sass/app.scss';


.avatar {
	&__container {
		border-radius: 50% !important;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: aquamarine;
	}

	&__image {
		width: 40px;
		height: 40px;
		border-radius: 50% !important;
	}

	&__text {
		font-weight: 600;
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

.flex {
	display: flex;
}

.name {
	margin-left: 12px;
	font-size: 14px;
	color: #182532;
	font-weight: 500;
}

.flex-content {
	display: flex;
	flex-direction: column;
}

.subcontent {
	margin-left: 12px;
	font-size: 12px;
	color: #697580;
}
</style>
