import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        database: {},
        deleted: false,
    },
    getters: {
        getStateSales(state) {
            return state
        },
    },
    mutations: {
        readSalesData(state) {
            const salesRef = ref(db, 'sales')
            onValue(salesRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        deleteSalesItem(state, id) {
            set(ref(db, `sales/${id.id.id}`), {
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
            state.deleted = true
            setTimeout(() => state.deleted = false, 3000)
        },
    },
}