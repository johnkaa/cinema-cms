import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
        deleted: false,
    },
    getters: {
        getStateUsers(state) {
            return state
        },
    },
    mutations: {
        readData(state) {
            const usersRef = ref(db, 'users')
            onValue(usersRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        deleteUsersItem(state, id) {
            set(ref(db, `users/${id}`), {
                id: null,
                birthday: null,
                card: null,
                city: null,
                email: null,
                gender: null,
                language: null,
                name: null,
                nickname: null,
                password: null,
                phone: null,
                registration: null,
            })
            state.deleted = true
            setTimeout(() => state.deleted = false, 3000)
        },
    },
}