import {deleteObject, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        img: '',
        imgUa: ''
    },
    getters: {
        getStateSalesEdit(state) {
            return state
        }
    },
    mutations: {
        async uploadFileSalesImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `sales/${file.id}/imgUa`)
                await uploadBytes(storageRef, file.file)

            } else {
                const storageRef = ref(storage, `sales/${file.id}/img`)
                await uploadBytes(storageRef, file.file)
            }
        },
        async getDownloadSalesURL(state, path) {
            if(path.ua) {
                state.imgUa = await getDownloadURL(ref(storage, `sales/${path.id}/imgUa`))
            } else {
                state.img = await getDownloadURL(ref(storage, `sales/${path.id}/img`))
            }
        },
        deleteFileSalesImg(state, path) {
            let storageRef = ref(storage, `sales/${path.id}/img`)
            if(path.ua) {
                storageRef = ref(storage, `sales/${path.id}/imgUa`)
            }
            deleteObject(storageRef)
        },
    },
    actions: {

    },
}