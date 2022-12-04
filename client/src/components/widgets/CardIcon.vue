<script setup lang='ts'>

defineProps<{ icon: string; label?: string }>()

</script>

<template>
    <Card
        class="text-primary-low text-center shadow-slate-400 dark:bg-primary dark:text-gray-300 hover:shadow-slate-500 hover:shadow-xl">
        <BaseIcon :path="icon" class="mx-auto" size="16" />
        <div class="mt-2">
            <div class="text-lg">{{ label }}</div>
        </div>
    </Card>
</template>
