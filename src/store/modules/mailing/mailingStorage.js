import {ref, uploadBytes} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
    actions: {
        uploadMailingFile() {
            const storageRef = ref(storage, `mailing/mailing.html`)
            uploadBytes(storageRef, this.file)
        }
    }
}