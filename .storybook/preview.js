
import { addParameters } from "@storybook/vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import theme from './theme'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

import Vue from 'vue';

import {
	Badge,
	SideBar,
	Avatar,
	NotificationBell,
	UpperBar,
	Card,
	Button,
	FilterPill,
} from '../src/components';

Vue.component('badge', Badge);
Vue.component('side-bar', SideBar);
Vue.component('avatar', Avatar);
Vue.component('notification-bell', NotificationBell);
Vue.component('upper-bar', UpperBar);
Vue.component('card', Card);
Vue.component('btn', Button);
Vue.component('filter-pill', FilterPill);

addParameters({
	options: {
		isFullscreen: false,
		showPanel: true,
		panelPosition: 'right',
		showAddonPanel: true,
		addonPanelInRight: false,
		sidebarAnimations: true,
		isToolshown: true,
		enableShortcuts: true,
		showRoots: true,
		showNav: true,
		initialActive: 'sidebar',
		selectedPanel: 'controls',
		showCanvas: false,
	},
});
