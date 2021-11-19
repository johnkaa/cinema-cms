import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        title: 'На главной верх',
        size: '1000x900',
        options: [
            {value: '5000', name: '5c'},
            {value: '10000', name: '10c'},
            {value: '15000', name: '15c'}
        ],
        database: {},
        uploaded: false
    },
    getters: {
        getStateBannersTop(state) {
            return state
        },
    },
    mutations: {
        async readData(state) {
            const bannerRef = await ref(db, 'banners/mainTop')
            await onValue(bannerRef, (snapshot) => {
                state.database = snapshot.val()
            })
        },
        addBannersTopItem(state) {
            let date = (+new Date()-(+new Date()%100)) / 100
            if(!state.database.items) {
                return(
                    set(ref(db, 'banners/mainTop/items/0'), {
                        id: 0,
                        img: 'https://via.placeholder.com/150x100',
                        text: '',
                        url: ''
                    })
                )
            }
            if(Object.keys(state.database.items).length > 4 ) {
                return alert('Больше добавить нельзя')
            }
            set(ref(db, `banners/mainTop/items/${date}`), {
                id: date,
                img: 'https://via.placeholder.com/150x100',
                text: '',
                url: ''
            })
        },
        addBannerTop(state, newBanner) {
            set(ref(db, 'banners/mainTop/'), {
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