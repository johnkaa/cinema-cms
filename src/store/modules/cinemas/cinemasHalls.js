import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
    state: {
        halls: {}
    },
    getters: {
        getStateCinemasHalls(state) {
            return state
        }
    },
    mutations: {
        readCinemasHallsData(state, item) {
            const cinemasHallsRef = ref(db, `cinemas/${item.path}/halls`)
            const dateObj = new Date()
            const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
            if(Object.keys(state.halls).length === 0) {
                onValue(cinemasHallsRef, (snapshot) => {
                    if(!snapshot.val()) {
                        state.halls[(+new Date()-(+new Date()%100)) / 100] = {
                            id: (+new Date()-(+new Date()%100)) / 100,
                            name: 'Зал',
                            description: '',
                            scheme: 'https://via.placeholder.com/200',
                            img: 'https://via.placeholder.com/400',
                            gallery: {},
                            seo: {
                                url: '',
                                title: '',
                                keywords: '',
                                description: '',
                            },
                            date: now,
                            file: null,
                            schemeFile: null,
                            hall: null
                        }
                        return state.halls[(+new Date()-(+new Date()%100)) / 100].gallery[(+new Date()-(+new Date()%100)) / 100] = {
                            id: (+new Date()-(+new Date()%100)) / 100,
                            img: 'https://via.placeholder.com/200',
                        }
                    }
                    state.halls = snapshot.val()
                })
            }
        },
        updateCinemasHalls(state, hall) {
            state.halls[hall.id] = {
                id: hall.id,
                name: hall.name,
                description: hall.description,
                scheme: hall.scheme,
                img: hall.img,
                gallery: hall.gallery,
                seo: hall.seo,
                date: hall.date,
                ua: hall.ua
            }
        }
    },
    actions: {

    },
}