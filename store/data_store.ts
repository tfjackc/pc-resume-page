import { useTheme } from 'vuetify'
const theme = useTheme()
export const useDataStore = defineStore('data_store', {
    state: () => ({
        tab: null as null | number,
        drawer: false as boolean,
        src_url: '' as string
    }),
    getters: {},
    actions: {
        async toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    console.log(theme.global.name.value)
    if (theme.global.name.value == 'dark') {
        this.src_url = "assets/PaigeVoegeli_Logo.png"
    }
    else {
        this.src_url = "assets/PaigeVoegeli_Logo_BlackText.png"
    }
}
    }
});
