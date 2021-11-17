import { ref, set } from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
    },
    getters: {
    },
    mutations: {
        updateNewsGalleryItem(state, item) {
            set(ref(db, `news/${item.path}/gallery/${item.id}`), {
                id: item.id,
                img: item.img,
            })
        },
        deleteNewsGalleryItem(state, item) {
            set(ref(db, `news/${item.path}/gallery/${item.id}`), {
                id: null,
                img: null,
            })
        }
    },
    actions: {
    },
}