import { ref, set } from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
    },
    getters: {
    },
    mutations: {
        updateSalesGalleryItem(state, item) {
            set(ref(db, `sales/${item.path}/gallery/${item.id}`), {
                id: item.id,
                img: item.img,
            })
        },
        deleteSalesGalleryItem(state, item) {
            set(ref(db, `sales/${item.path}/gallery/${item.id}`), {
                id: null,
                img: null,
            })
        }
    },
    actions: {
    },
}