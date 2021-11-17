import { ref, set } from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
    },
    getters: {
    },
    mutations: {
        updateGalleryItem(state, item) {
            set(ref(db, `films/films${item.path}/gallery/${item.id}`), {
                id: item.id,
                img: item.img,
            })
        },
        deleteFilmGalleryItem(state, item) {
            set(ref(db, `films/films${item.path}/gallery/${item.id}`), {
                id: null,
                img: null,
            })
        }
    },
    actions: {
    },
}