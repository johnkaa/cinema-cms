import {deleteObject, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        img: '',
        imgUa: '',
    },
    getters: {
        getStatePagesContactsEdit(state) {
            return state
        }
    },
    mutations: {
        uploadFilePagesContactsImg(state, file) {
            if(file.ua) {
                const storageRef = ref(storage, `pages/2/contacts/${file.id}/logoUa`)
                uploadBytes(storageRef, file.file)
            } else {
                const storageRef = ref(storage, `pages/2/contacts/${file.id}/logo`)
                uploadBytes(storageRef, file.file)
            }
        },
        getFileUrlContacts(state, path) {
            if(path.ua) {
                getDownloadURL(ref(storage, `pages/2/contacts/${path.id}/logoUa`))
                    .then((url) => {
                        state.imgUa = url
                    })
            } else {
                getDownloadURL(ref(storage, `pages/2/contacts/${path.id}/logo`))
                    .then((url) => {
                        state.img = url
                    })
            }
        },
        deleteFilePagesContactsImg(state, path) {
            if(path.ua) {
                const storageRef = ref(storage, `pages/2/contacts/${path.id}/logoUa`)
                deleteObject(storageRef)
            } else {
                const storageRef = ref(storage, `pages/2/contacts/${path.id}/logo`)
                deleteObject(storageRef)
            }
        },
    },
    actions: {

    },
}