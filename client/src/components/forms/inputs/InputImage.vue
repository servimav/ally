<script setup lang='ts'>

const $props = defineProps<{ img?: string }>()
const $emit = defineEmits<{ (e: 'update:model-value', v: File | null): void }>();


function updateValue(ev: Event) {
    const target = ev.target;
    const files = (ev.target as HTMLInputElement)?.files;
    if (files?.length)
        $emit('update:model-value', files[0])
}
</script>

<template>
    <div class="shrink-0" v-if="img">
        <img class="object-cover w-32 h-32 rounded-full" :src="img" alt="profile photo" />
    </div>
    <label class="block">
        <span class="sr-only">Seleccionar Avatar</span>
        <input type="file" accept="image/x-png,image/gif,image/jpeg"
            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            @input="updateValue" />
    </label>
</template>
