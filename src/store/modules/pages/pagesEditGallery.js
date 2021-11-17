import { ref, set } from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
    },
    getters: {
    },
    mutations: {
        updatePagesGalleryItem(state, item) {
            set(ref(db, `sales/${item.path}/gallery/${item.id}`), {
                id: item.id,
                img: item.img,
            })
        },
        deletePagesGalleryItem(state, item) {
            set(ref(db, `sales/${item.path}/gallery/${item.id}`), {
                id: null,
                img: null,
            })
        }
    },
    actions: {
    },
}