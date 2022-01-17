<template>
  <div
    class="side-bar__container"
  >
    <div
        class="alert-card__content-container"
    >
        <!-- @slot Slot usado para inserção de logo na sidebar. -->
        <div
            class="logo-size"
        >
            <slot />
        </div>
        <div
            class="teste"
        >
            <div
                class="w-100"
                v-for="(menuOption, index) in menuL"
                :key="menuOption.text"
            >
                <div
                    class="icon-container"
                    @click="handleClick(index)"
                    v-b-tooltip.hover.left :title="menuOption.text"
                >
                    <div
                        class="indicator"
                        v-if="menuOption.isActive"
                    />
                    <ion-icon
                        class="icon-size"
                        :class="menuOption.isActive ? 'is_active' : 'is_not_active'"
                        :name="menuOption.icon"
                    />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
		return {
			menuL: [],
		}
	},

  props: {
    /**
     * Objeto de configuração da sidebar
     */
    menuOptions: {
        type: Array,
        default: () => [],
    },
  },

  mounted() {
      this.menuL = this.menuOptions;
  },

  methods: {
    handleClick(index) {
        this.menuL.forEach(option => {
            option.isActive = false;
        });
        this.menuL[index].isActive = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.side-bar {
    &__container {
        height: 847px;
        background: #FEFEFE;
        border: 4px solid #FFFFFF;
        box-sizing: border-box;
        box-shadow: 1px 0px 12px rgba(24, 37, 50, 0.04);
        border-radius: 0px 20px 20px 0px;
        max-width: 93px;
        border-left: none;
    }
}

.ion-icon {
    visibility: visible !important;
}

.icon-size {
    font-size: 24px;
    height: 52px;
    --ionicon-stroke-width: 32px;
    margin-left: 32px;
    visibility: visible !important;
    cursor: pointer;
}

.is_not_active {
    color: #44505C;
}

.is_active {
    color: #206ED9 !important;
}

.teste {
    margin-top: 60px;
    display: flex;
    align-items: start;
    flex-direction: column;
}

.indicator {
    height: 100%;
    width: 5px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    margin-right: -4px;
    background-color: #206ED9;
}

.icon-container {
    height: 52px;
    display:flex;
    align-items: center;
    width: 100%
}

.w-100 {
    width: 100%;
    margin-bottom: 20px;
}

.logo-size img {
    width: 44px;
}

.logo-size {
    margin-top: 56px;
    display: flex;
    justify-content: center;
}
</style>