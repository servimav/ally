import { useService } from '@/services';
import { IUserProfile, IUserRequestLogin, IUserRequestRegister, IUserRequestUpdate, IUserResponseAuth } from '@/types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const STORE_KEY = 'useUserStore';
const services = useService();
/**
 * UserStore
 */
export const useUserStore = defineStore(STORE_KEY, () => {

    const profile = ref<IUserProfile | undefined>();
    const api_token = ref<string | undefined>();

    const isAuth = computed(() => Boolean(api_token.value));

    /**
     * -----------------------------------------
     *	Actions
     * -----------------------------------------
     */
    /**
     * login
     * @param p
     * @returns
     */
    async function login(p: IUserRequestLogin) {
        const resp = await services.auth.login(p);
        return handleAuth(resp.data);

    }
    /**
     * getProfile
     * @returns
     */
    async function getProfile() {
        const resp = await services.auth.profile();
        profile.value = resp.data;
        save();
        return resp.data;
    }
    /**
     * register
     * @param p
     * @returns
     */
    async function register(p: IUserRequestRegister) {
        const resp = await services.auth.register(p);
        return handleAuth(resp.data);
    }
    /**
     * update
     * @param p
     * @returns
     */
    async function update(p: Partial<IUserRequestUpdate>) {
        const resp = await services.auth.update(p);
        return handleAuth(resp.data);
    }

    function logout() {
        api_token.value = undefined;
        profile.value = undefined;
        save();
    }

    /**
     * -----------------------------------------
     *	Methods
     * -----------------------------------------
     */
    /**
     * save
     */
    function save() {
        const s: Partial<IUserResponseAuth> = {
            token: api_token.value,
            profile: profile.value
        }
        localStorage.setItem(STORE_KEY, JSON.stringify(s));
    }
    /**
     * load
     */
    function load() {
        const data = localStorage.getItem(STORE_KEY);
        if (data) {
            const s = JSON.parse(data) as Partial<IUserResponseAuth>;
            api_token.value = s.token;
            profile.value = s.profile;
        }
    }

    function handleAuth(data: IUserResponseAuth) {
        profile.value = data.profile;
        api_token.value = data.token;
        save();
        return data;
    }


    return {
        api_token, profile, isAuth,
        // Methods
        load, save,
        // Actions
        logout, login, getProfile, register, update
    }
})
