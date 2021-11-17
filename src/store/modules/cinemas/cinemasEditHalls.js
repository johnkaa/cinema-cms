import {deleteObject, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        hallImg: '',
        hallImgUa: '',
        schemeImg: '',
        schemeImgUa: '',
    },
    getters: {
        getStateHallsEdit(state) {
            return state
        }
    },
    mutations: {
        async uploadFileImgHall(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `cinemas/${file.path}/halls/${file.id}/hallImgUa`)
                await uploadBytes(storageRef, file.file)
            } else {
                const storageRef = ref(storage, `cinemas/${file.path}/halls/${file.id}/hallImg`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadHallURL(state, path) {
            if(path.ua) {
                state.hallImgUa = await getDownloadURL(ref(ref(storage, `cinemas/${path.path}/halls/${path.id}/hallImgUa`)))
            } else {
                state.hallImg = await getDownloadURL(ref(ref(storage, `cinemas/${path.path}/halls/${path.id}/hallImg`)))
            }
        },
        deleteFileImgHall(state, path) {
            const storageRef = ref(storage, `cinemas/${path.path}/halls/${path.id}/hallImg`)
            deleteObject(storageRef)
        },
        async uploadSchemeImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `cinemas/${file.path}/halls/${file.id}/schemeUa`)
                await uploadBytes(storageRef, file.file)
            } else {
                const storageRef = ref(storage, `cinemas/${file.path}/halls/${file.id}/scheme`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadHallSchemeURL(state, file) {
            if(file.ua) {
                state.schemeImgUa = await getDownloadURL(ref(ref(storage, `cinemas/${file.path}/halls/${file.id}/schemeUa`)))
            } else {
                state.schemeImg = await getDownloadURL(ref(ref(storage, `cinemas/${file.path}/halls/${file.id}/scheme`)))
            }
        },
        deleteSchemeImg(state, path) {
            const storageRef = ref(storage, `cinemas/${path.path}/halls/${path.id}/scheme`)
            deleteObject(storageRef)
        }
    },
    actions: {

    },
}