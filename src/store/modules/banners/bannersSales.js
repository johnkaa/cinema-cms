import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        title: 'На главной Новости Акции',
        size: '1000x900',
        options: [
            {value: '5000', name: '5c'},
            {value: '10000', name: '10c'},
            {value: '15000', name: '15c'}
        ],
        database: {},
        uploaded: false,
    },
    getters: {
        getStateBannersSales(state) {
            return state
        },
    },
    mutations: {
        async readData(state) {
            const bannerRef = await ref(db, 'banners/mainSales')
            await onValue(bannerRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        addBannersSalesItem(state) {
            let date = (+new Date()-(+new Date()%100)) / 100
            if(!state.database.items) {
                return(
                    set(ref(db, 'banners/mainSales/items/0'), {
                        id: 0,
                        img: 'https://via.placeholder.com/150x100',
                        url: ''
                    })
                )
            }
            if(Object.keys(state.database.items).length > 4 ) {
                return alert('Больше добавить нельзя')
            }
            set(ref(db, `banners/mainSales/items/${date}`), {
                id: date,
                img: 'https://via.placeholder.com/150x100',
                url: ''
            })
        },
        addBannerSales(state, newBanner) {
            set(ref(db, 'banners/mainSales/'), {
                active: newBanner.active,
                interval: newBanner.interval,
                items: newBanner.items
            })
            state.uploaded = true
            setTimeout(() => state.uploaded = false, 3000)
        },

    },
    actions: {

    },
}