import {deleteObject, ref} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    state: {
    },
    getters: {
    },
    mutations: {
        deleteCinemaItemStorage(state, pathID) {
            const path = `cinemas/${pathID}/mainImg`
            const storageRef = ref(storage, path)
            deleteObject(storageRef)
        }
    },
    actions: {

    },
}