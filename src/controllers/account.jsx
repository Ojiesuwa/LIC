import { createDocument, liveListen } from '../firebase/firebaseTools';

export const createAccount = (firstname, lastname, email, uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!uid) throw new Error('No UID supplied');
      await createDocument('Account', uid, {
        firstname,
        lastname,
        email,
        photoURL:
          'https://th.bing.com/th/id/R.7837ddb38ea25f397aa93039c9591124?rik=t75EwMa7SryjBQ&pid=ImgRaw&r=0',
        createdAt: new Date(),
      });
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const liveAccountData = (uid, cb) => {
  liveListen('Account', uid, cb);
};
