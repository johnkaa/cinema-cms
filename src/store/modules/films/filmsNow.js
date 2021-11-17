import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
    },
    getters: {
        getStateFilmsNow(state) {
            return state
        },
    },
    mutations: {
        readFilmsNowData(state) {
            const filmsNowRef = ref(db, 'films/filmsNow')
            onValue(filmsNowRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
    },
    actions: {

    },
}