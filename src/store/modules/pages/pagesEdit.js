import {deleteObject, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        img: '',
        imgUa: ''
    },
    getters: {
        getStatePagesEdit(state) {
            return state
        }
    },
    mutations: {
        async uploadFilePagesImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `pages/${file.id}/imgUa`)
                await uploadBytes(storageRef, file.file)
            } else {
                const storageRef = ref(storage, `pages/${file.id}/img`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadPagesURL(state, path) {
            if(path.ua) {
                state.imgUa = await getDownloadURL(ref(storage, `pages/${path.id}/imgUa`))
            } else {
                state.img = await getDownloadURL(ref(storage, `pages/${path.id}/img`))
            }
        },
        deleteFilePagesImg(state, path) {
            if(path.ua) {
                const storageRef = ref(storage, `pages/${path.id}/imgUa`)
                deleteObject(storageRef)
            } else {
                const storageRef = ref(storage, `pages/${path.id}/img`)
                deleteObject(storageRef)
            }
        },
    },
    actions: {

    },
}