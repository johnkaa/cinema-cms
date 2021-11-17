import {getAuth, onAuthStateChanged} from "firebase/auth";
import {onValue, ref} from "firebase/database";
import db from "../firebase/database";

export default {
    state: {
        auth: false,
        users: {},
        currentUser: {}
    },
    getters: {
        getStateAuth(state) {
            return state
        }
    },
    mutations: {
        readData(state) {
            const usersRef = ref(db, 'users')
            onValue(usersRef, (snapshot) => {
                state.users = snapshot.val()
            })
        },
        getUser(state) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    state.auth = true
                    const currentUser = auth.currentUser.uid
                    for(let key in state.users) {
                        if(state.users[key].uid === currentUser) {
                            const currentUserRef = ref(db, `users/${key}`)
                            onValue(currentUserRef, (snapshot) => {
                                state.currentUser = snapshot.val()
                            })
                        }
                    }
                    if(state.currentUser.birthday) {
                        state.currentUser.birthday = state.currentUser.birthday.split('.').reverse().join('-')
                    }
                }
            })
        }
    },
    actions: {}
}