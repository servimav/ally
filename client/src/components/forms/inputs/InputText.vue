<script setup lang='ts'>
import { computed } from 'vue';

const $props = withDefaults(defineProps<{ modelValue: string | number; type?: 'text' | 'email' | 'number' | 'password', label?: string }>(), {
    type: 'text'
})
const $emit = defineEmits<{ (e: 'update:model-value', val: string | number): void }>();
const inputId = computed(() => Symbol(`${Date.now()} ${$props.label}`).toString())

function updateValue(ev: Event) {
    $emit('update:model-value', (ev.target as HTMLInputElement)?.value)
}
</script>

<template>
    <div class="mb-6">
        <div class="text-gray-200 py-2 text-justify w-full" v-if="label">
            <label :for="inputId">{{ label }}</label>
        </div>
        <input :id="inputId" :value="modelValue" @input="updateValue" :type="type" :placeholder="label"
            class="form-input" />
    </div>
</template>
