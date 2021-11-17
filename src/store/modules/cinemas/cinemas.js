import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
    },
    getters: {
        getStateCinemas(state) {
            return state
        },
    },
    mutations: {
        readCinemasData(state) {
            const cinemasRef = ref(db, 'cinemas')
            onValue(cinemasRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
    },
}