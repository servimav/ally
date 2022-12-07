import { ref, watch } from 'vue';
import { IQrCodeCreate, IQrCodeUpdate, IQrType } from '@/types';

export interface IQrProps { type?: IQrType, save?: boolean }
export interface IQrEmits { (e: 'complete', type: 'create' | 'update', v: IQrCodeCreate | IQrCodeUpdate, updateId?: number): void }
/**
 * useQrForm
 */
export const useQrForm = ($props: IQrProps, $emit: IQrEmits) => {

    const form = ref<IQrCodeCreate>({
        data: '',
        description: '',
        title: '',
        type: 'TEXT',
        public: false,
        slug: 'mi-texto',
    });
    if ($props.type)
        form.value.type = $props.type;

    watch(() => form.value.title, (val: string | undefined) => {
        if (val)
            form.value.slug = val.replaceAll(' ', '-').toLocaleLowerCase();
    });

    return { form }

}
