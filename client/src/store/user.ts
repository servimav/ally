import { $api } from '@/helpers';
import { IUserProfile, IUserRequestLogin, IUserRequestRegister, IUserResponseAuth } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const STORE_KEY = 'useUserStore';
/**
 * UserStore
 */
export const useUserStore = defineStore(STORE_KEY, () => {

    const profile = ref<IUserProfile | undefined>();
    const api_token = ref<string | undefined>();

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
        const resp = await $api.post<IUserResponseAuth>('api/auth/login', p);
        profile.value = resp.data.profile;
        api_token.value = resp.data.token;
        save();
        return resp.data;
    }
    /**
     * getProfile
     * @returns
     */
    async function getProfile() {
        const resp = await $api.get<IUserProfile>('api/auth/');
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
        const resp = await $api.post<IUserResponseAuth>('api/auth/register', p);
        profile.value = resp.data.profile;
        api_token.value = resp.data.token;
        save();
        return resp.data;
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


    return {
        api_token, profile,
        // Methods
        load, save,
        // Actions
        logout, login, getProfile, register
    }
})
