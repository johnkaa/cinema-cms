import {deleteObject, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        mainImgUrl: '',
        mainImgUrlUa: '',
        logoUrl: '',
        logoUrlUa: '',
    },
    getters: {
        getStateCinemasEdit(state) {
            return state
        }
    },
    mutations: {
        async uploadFileCinemaImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `cinemas/${file.id}/mainImgUa`)
                await uploadBytes(storageRef, file.file)
            } else {
                const storageRef = ref(storage, `cinemas/${file.id}/mainImg`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadCinemaURL(state, path) {
            if(path.ua) {
                state.mainImgUrlUa = await getDownloadURL(ref(ref(storage, `cinemas/${path.id}/mainImgUa`)))
            } else {
                state.mainImgUrl = await getDownloadURL(ref(ref(storage, `cinemas/${path.id}/mainImg`)))
            }
        },
        deleteFileCinemaImg(state, path) {
            const storageRef = ref(storage, `cinemas/${path.id}/mainImg`)
            deleteObject(storageRef)
        },
        async uploadLogoImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `cinemas/${file.id}/logoUa`)
                await uploadBytes(storageRef, file.file)
            } else {
                const storageRef = ref(storage, `cinemas/${file.id}/logo`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadCinemaLogoURL(state, path) {
            if(path.ua) {
                state.logoUrlUa = await getDownloadURL(ref(ref(storage, `cinemas/${path.id}/logoUa`)))
            } else {
                state.logoUrl = await getDownloadURL(ref(ref(storage, `cinemas/${path.id}/logo`)))
            }
        },
        deleteLogoImg(state, path) {
            const storageRef = ref(storage, `cinemas/${path.id}/logo`)
            deleteObject(storageRef)
        }
    },
    actions: {

    },
}