import Firebase from "firebase";
import config from "../config";

const instance = Firebase.initializeApp(config.firebase);

export default instance;
