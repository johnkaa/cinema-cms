import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        title: 'Сквозной банер на заднем фоне',
        size: '2000x3000',
        selects: [
            { title: 'Фото на фон' },
            { title: 'Просто фон' },
        ],
        uploaded: false,
        deleted: false,
        database: {}
    },
    getters: {
        getStateBanner(state) {
            return state
        },
    },
    mutations: {
        readData(state) {
            const bannerRef = ref(db, 'banners/mainBanner')
            onValue(bannerRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        addBanner(state, newBanner) {
            set(ref(db, 'banners/mainBanner'), {
                img: newBanner.img,
                type: newBanner.type,
            })
            state.uploaded = true
            state.deleted = false
            setTimeout(() => state.uploaded = false, 3000)
        },
        deleteBanner(state) {
            set(ref(db, 'banners/mainBanner'), {
                img: 'https://via.placeholder.com/350x300',
                type: ''
            })
            state.uploaded = false
            state.deleted = true
            setTimeout(() => state.deleted = false, 3000)
        },
    },
}