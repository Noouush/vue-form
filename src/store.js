import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		firstName: '',
		email: '',
		connaissanceSite: '',
		connaissanceLeo: '',
	},

	mutations: {
		setFirstName(state, payload) {
			state.firstName = payload.firstName;
		},
		setEmail(state, payload) {
			state.email = payload.email;
		},

		setConnaissanceSite(state, payload) {
			state.connaissanceSite = payload.connaissanceSite;
		},

		setConnaissanceLeo(state, payload) {
			state.connaissanceLeo = payload.connaissanceLeo;
		}
	},
})
