import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
        img: '',
        imgUa: ''
    },
    getters: {
        getStateFilmsEditor(state) {
            return state
        }
    },
    mutations: {
        uploadFileFilmImg(state, file) {
            let storageRef = ref(storage, `films/films${file.path}/${file.id}/mainImg`)
            if(file.ua) {
                storageRef = ref(storage, `films/films${file.path}/${file.id}/mainImgUa`)
            }
            uploadBytes(storageRef, file.file)
        },
        getFileFilmUrl(state, file) {
            if(file.ua) {
                const path = `films/films${file.path}/${file.id}/mainImgUa`
                getDownloadURL(ref(storage, path))
                    .then((url) => {
                        state.imgUa = url
                    })
            } else {
                const path = `films/films${file.path}/${file.id}/mainImg`
                getDownloadURL(ref(storage, path))
                    .then((url) => {
                        state.img = url
                    })
            }
        },
        deleteFileFilmImg(state, file) {
            let path = `films/films${file.path}/${file.id}/mainImg`
            if(file.ua) {
                path = `films/films${file.path}/${file.id}/mainImgUa`
            }
            const storageRef = ref(storage, path)
            deleteObject(storageRef)
        }
    },
    actions: {

    },
}