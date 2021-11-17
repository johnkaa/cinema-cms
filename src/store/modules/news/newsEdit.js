import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        img: '',
        imgUa: ''
    },
    getters: {
        getStateNewsEdit(state) {
            return state
        }
    },
    mutations: {
        async uploadFileNewsImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `news/${file.id}/imgUa`)
                await uploadBytes(storageRef, file.file)

            } else {
                const storageRef = ref(storage, `news/${file.id}/img`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadNewsURL(state, path) {
            if(path.ua) {
                state.imgUa = await getDownloadURL(ref(storage, `news/${path.id}/imgUa`))
            } else {
                state.img = await getDownloadURL(ref(storage, `news/${path.id}/img`))
            }
        },
        deleteFileNewsImg(state, path) {
            let storageRef = ref(storage, `news/${path.id}/img`)
            if(path.ua) {
                storageRef = ref(storage, `news/${path.id}/imgUa`)
            }
            deleteObject(storageRef)
        },
    },
    actions: {

    },
}