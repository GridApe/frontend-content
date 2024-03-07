import { db } from '@/firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';

const addEmailToFirebase = async (email : string) => {
    try {
        const docRef = await addDoc(collection(db, "email"), {
            email : email,
        });
        console.log("Successful");
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

export default addEmailToFirebase;