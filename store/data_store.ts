import {ref} from "vue";

export const useDataStore = defineStore('data_store', {
    state: () => ({
        tab: null as null | number,
        drawer: false as boolean,
        name: '' as string,
        email: '' as string,
        message: '' as string,
        // src_url: "assets/paigevoegeli_logo_blacktext.png",
    }),
    getters: {},
    actions: {
    }
});
