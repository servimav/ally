export function useTheme() {
    /**
     * saveOnLocalStorage
     * @param val
     */
    function saveOnLocalStorage(val: 'dark' | 'light') {
        localStorage.setItem('themeDark', val);
    }
    return {
        setDark: () => {
            document.documentElement.classList.add('dark');
            saveOnLocalStorage('dark');
        },
        setLight: () => {
            document.documentElement.classList.remove('dark')
            saveOnLocalStorage('light');
        },
        toggleDark: () => {
            const dark = document.documentElement.classList.toggle('dark');
            if (dark) return saveOnLocalStorage('dark');
            else saveOnLocalStorage('light');

        },
        is: (): 'dark' | 'light' => {
            const dark = localStorage.getItem('themeDark');
            if (dark) return dark as 'dark' | 'light';
            return 'light';
        }
    }
}
