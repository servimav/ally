import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IPaymentMethod, IUserPayment } from '@/types';
import { useService } from '@/services';

const { payment } = useService()

const STORE_KEY = 'pinia/usePaymentStore';

export const usePaymentStore = defineStore(STORE_KEY, () => {

    const allMethods = ref<IPaymentMethod[]>([]);

    const myMethods = ref<IUserPayment[]>([]);

    const cardMethods = computed<IPaymentMethod[]>(() => {
        return allMethods.value.filter(m => m.type === 'CARDS')
    });
    const cryptoMethods = computed<IPaymentMethod[]>(() => {
        return allMethods.value.filter(m => m.type === 'CRYPTO')
    });
    const favMethods = computed<IPaymentMethod[]>(() => {
        return allMethods.value.filter(m => m.fav)
    });
    const walletMethods = computed<IPaymentMethod[]>(() => {
        return allMethods.value.filter(m => m.type === 'WALLET')
    });
    /**
     * -----------------------------------------
     *	Methods
     * -----------------------------------------
     */
    /**
     * getById
     * @param id
     * @returns
     */
    function getById(id: number) {
        return allMethods.value.find(p => p.id === id)
    }

    /**
     * -----------------------------------------
     *	Actions
     * -----------------------------------------
     */
    /**
     * list
     * @returns
     */
    async function list() {
        const resp = await payment.available();
        allMethods.value = resp.data;
        return resp.data;
    }

    async function listMine() {
        const resp = await payment.index()
        myMethods.value = resp.data;
        return resp.data;
    }

    async function store(p: IUserPayment) {
        const temp = myMethods.value;
        temp.push(p);
        const resp = await payment.store(temp);
        myMethods.value = resp.data;
        return resp.data
    }


    return {
        allMethods, cardMethods, cryptoMethods, favMethods, myMethods, walletMethods,
        // Methods
        getById,
        // Actions
        list, listMine, store
    }

});
