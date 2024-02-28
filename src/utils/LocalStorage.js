//LocalStorage.js
const LocalStorage = {
    getItem(key) {
        if (typeof window !== 'undefined' && window.localStorage) {
            console.log("getItem", key )
            return localStorage.getItem(key);
        } else {
            console.error('localStorage is not available.');
            return null;
        }
    },
    setItem(key, value) {
        if (typeof window !== 'undefined' && window.localStorage) {
            console.log("setItem", key, value )
            localStorage.setItem(key, value);
        } else {
            console.error('localStorage is not available.');
        }
    }
};


export default LocalStorage;
