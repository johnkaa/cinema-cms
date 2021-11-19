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
       async readFilmSoonData(state) {
            const filmsNowRef = await ref(db, 'films/filmsSoon')
            await onValue(filmsNowRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
    },
    actions: {

    },
}