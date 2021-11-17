import { ref, set } from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
    },
    getters: {
    },
    mutations: {
        updateCinemasGalleryItem(state, item) {
            set(ref(db, `cinemas/${item.path}/gallery/${item.id}`), {
                id: item.id,
                img: item.img,
            })
        },
        deleteCinemasGalleryItem(state, item) {
            set(ref(db, `films/films${item.path}/gallery/${item.id}`), {
                id: null,
                img: null,
            })
        }
    },
    actions: {
    },
}