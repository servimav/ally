<script setup lang='ts'>
import { computed } from 'vue';

const $props = withDefaults(defineProps<{ modelValue: string | number; type?: 'text' | 'email' | 'number' | 'password', label?: string, required?: boolean, idKey?: string }>(), {
    type: 'text',
    idKey: Date.now().toString()
})
const $emit = defineEmits<{ (e: 'update:model-value', val: string | number): void }>();

function updateValue(ev: Event) {
    $emit('update:model-value', (ev.target as HTMLInputElement)?.value)
}
</script>

<template>
    <div class="mb-6">
        <div class="text-gray-200 py-2 text-justify w-full" v-if="label">
            <label :for="idKey">{{ label }}</label>
        </div>
        <input :id="idKey" :value="modelValue" @input="updateValue" :type="type" :placeholder="label" class="form-input"
            :required="required" />
    </div>
</template>
