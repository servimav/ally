<script setup lang='ts'>

withDefaults(defineProps<{ modelValue: string | number; type?: 'text' | 'email' | 'number' | 'password', label?: string, required?: boolean, idKey?: string, readonly?: boolean; inputClass?: string; placeholder?: string; rows?: number }>(), {
    type: 'text',
    idKey: Date.now().toString(),
    inputClass: 'bg-slate-100',
    rows: 3
})
const $emit = defineEmits<{ (e: 'update:model-value', val: string | number): void }>();

function updateValue(ev: Event) {
    $emit('update:model-value', (ev.target as HTMLInputElement)?.value)
}
</script>

<template>
    <div class="mb-6">
        <div class="py-2 text-justify w-full" v-if="label">
            <label :for="idKey">{{ label }}</label>
        </div>
        <textarea :id="idKey" :readonly="readonly" :value="modelValue" :rows="rows" @input="updateValue" :type="type"
            :placeholder="placeholder" class="form-input" :class="inputClass" :required="required"></textarea>
    </div>
</template>
