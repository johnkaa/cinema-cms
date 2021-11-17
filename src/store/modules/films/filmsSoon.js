import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
    },
    getters: {
        getStateFilmsSoon(state) {
            return state
        },
    },
    mutations: {
        readFilmSoonData(state) {
            const filmsNowRef = ref(db, 'films/filmsSoon')
            onValue(filmsNowRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
    },
    actions: {

    },
}