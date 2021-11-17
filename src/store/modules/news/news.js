import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
        uploaded: false,
        deleted: false,
    },
    getters: {
        getStateNews(state) {
            return state
        },
    },
    mutations: {
        readNewsData(state) {
            const bannerRef = ref(db, 'news')
            onValue(bannerRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        deleteNewsItem(state, id) {
            set(ref(db, `news/${id.id.id}`), {
                id: null,
                date: null,
                actual: null,
                actualValue: null,
                name: null,
                description: null,
                img: null,
                gallery: null,
                link: null,
                seo: null
            })
            state.uploaded = false
            state.deleted = true
            setTimeout(() => state.deleted = false, 3000)
        },
    },
}