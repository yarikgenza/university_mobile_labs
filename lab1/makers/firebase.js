import Firebase from "firebase";
import config from "../config";

export default Firebase.initializeApp(config.firebase);
