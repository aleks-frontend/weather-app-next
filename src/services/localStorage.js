// LocalStorage abstraction
const localStore = {
    get(item) {        
        return JSON.parse(window.localStorage.getItem(item));        
    },
    set(item, data) {
        window.localStorage.setItem(item, JSON.stringify(data));
    },
    remove(item) {
        window.localStorage.removeItem(item);
    }
};

export default localStore;
