import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
    },
    getters: {
        getStateLastTemplates(state) {
            return state
        },
    },
    mutations: {
        readData(state) {
            const usersRef = ref(db, 'mailing/lastTemplates')
            onValue(usersRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        addSmsMailing(state, item) {
            set(ref(db, `mailing/sms`), {
                text: item.text,
                users: item.users
            })
        },
        addEmailMailing(state, item) {
            set(ref(db, `mailing/email`), {
                file: item.file,
                users: item.users
            })
        },
        addTemplateItem(state, file) {
            if(file === '') {
                return
            }
            if(Object.keys(state.database).length > 3 ) {
                return set(ref(db, `mailing/lastTemplates/0`), {
                    id: 0,
                    name: file
                })
            }
            let date = (+new Date()-(+new Date()%100)) / 100
            set(ref(db, `mailing/lastTemplates/${date}`), {
                id: date,
                name: file
            })
        },
        deleteTemplateItem(state, id) {
            if(Object.keys(state.database).length === 1 ) {
                return alert('Должен быть хотя бы 1 шаблон')
            }
            set(ref(db, `mailing/lastTemplates/${id}`), {
                id: null,
                name: null
            })
        },
    },
}