import { ref, set } from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        uploaded: false
    },
    getters: {

    },
    mutations: {
        addBannerItem(state, newItem) {
            set(ref(db, `banners/${newItem.path}/items/${newItem.id}`), {
                id: newItem.id,
                img: newItem.img,
                url: newItem.url,
                text: newItem.text,
            })
        },
        deleteBannerItem(state, item) {
            set(ref(db, `banners/${item.path}/items/${item.id}`), {
                img: null,
                url: null,
                text: null
            })
        }
    },
    actions: {

    },
}