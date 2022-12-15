<script setup lang='ts'>

withDefaults(defineProps<{ modelValue: string | number; options: { label: string; value: unknown }[], label?: string, required?: boolean, idKey?: string, readonly?: boolean; inputClass?: string, labelClass?: string, placeholder?: string }>(), {
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
        <select :id="idKey" :readonly="readonly" :value="modelValue" @input="updateValue" :placeholder="placeholder"
            class="form-input" :class="inputClass" :required="required">
            <option v-for="(o, k) in options" :key="`option-${k}`" :value="o.value" class="py-2">{{ o.label }}</option>
        </select>
    </div>
</template>
