export default {
    state: {
        ua: false
    },
    getters: {
        getStateLang(state) {
            return state
        }
    },
    mutations: {
        setLanguage(state, ua) {
            state.ua = ua
        }
    },
    actions: {}
}