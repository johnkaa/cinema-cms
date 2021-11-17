import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
        deleted: false,
    },
    getters: {
        getStatePages(state) {
            return state
        },
    },
    mutations: {
        readPagesData(state) {
            const salesRef = ref(db, 'pages')
            onValue(salesRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        deletePagesItem(state, id) {
            set(ref(db, `pages/${id.id.id}`), {
                id: null,
                date: null,
                actual: null,
                actualValue: null,
                name: null,
                description: null,
                img: null,
                gallery: null,
                seo: null
            })
            state.deleted = true
            setTimeout(() => state.deleted = false, 3000)
        },
    },
}