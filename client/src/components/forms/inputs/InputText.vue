<script setup lang='ts'>

withDefaults(defineProps<{ modelValue: string | number; type?: 'text' | 'email' | 'number' | 'password' | 'price', label?: string, required?: boolean, idKey?: string, readonly?: boolean; inputClass?: string, labelClass?: string, placeholder?: string }>(), {
    type: 'text',
    idKey: Date.now().toString(),
    inputClass: 'bg-slate-100'
})
const $emit = defineEmits<{ (e: 'update:model-value', val: string | number): void }>();

function updateValue(ev: Event) {
    $emit('update:model-value', (ev.target as HTMLInputElement)?.value)
}
</script>

<template>
    <div class="mb-6">
        <div class="py-2 text-justify w-full" :class="labelClass" v-if="label">
            <label :for="idKey">{{ label }}</label>
        </div>
        <input :id="idKey" :readonly="readonly" :value="modelValue" @input="updateValue"
            :type="type === 'price' ? 'number' : type" :placeholder="placeholder" class="form-input" :class="inputClass"
            :required="required" :min="type === 'price' ? 0 : undefined" :step="type === 'price' ? 0.01 : undefined" />
    </div>
</template>
