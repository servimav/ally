import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IPaymentMethod, IUserPayment, IUserPaymentData } from '@/types';
import { useService } from '@/services';

const { payment } = useService()

const STORE_KEY = 'pinia/usePaymentStore';

export const usePaymentStore = defineStore(STORE_KEY, () => {

    const allMethods = ref<IPaymentMethod[]>([]);

    const myMethods = ref<IUserPayment>({ id: 0, methods: [] });

    const cardMethods = computed<IPaymentMethod[]>(() => {
        return allMethods.value.filter(m => m.type === 'BANK')
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
        const resp = await payment.index();
        myMethods.value = resp.data;
        return resp.data;
    }

    async function store(p: IUserPaymentData) {
        myMethods.value.methods.push(p);
        return (await payment.store(myMethods.value.methods)).data;
    }

    async function update(p: IUserPaymentData) {
        const index = myMethods.value.methods.findIndex(v => v.payment_id === p.payment_id);
        if (index >= 0) {
            myMethods.value.methods[index] = p;
        }
        return (await payment.store(myMethods.value.methods)).data;
    }

    async function remove(p: IUserPaymentData) {
        const index = myMethods.value.methods.findIndex(v => v.payment_id === p.payment_id);
        if (index >= 0) {
            myMethods.value.methods.splice(index, 1)
        }
        return (await payment.store(myMethods.value.methods)).data;
    }


    return {
        allMethods, cardMethods, cryptoMethods, favMethods, myMethods, walletMethods,
        // Methods
        getById,
        // Actions
        list, listMine, store, update, remove
    }

});
