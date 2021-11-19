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
        async readFilmsNowData(state) {
            const filmsNowRef = await ref(db, 'films/filmsNow')
            await onValue(filmsNowRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
    },
    actions: {

    },
}