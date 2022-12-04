<script setup lang='ts'>
async function onSubmit() {}
</script>

<template>
    <form>
        <div class="mb-6">
            <div class="text-gray-200 py-2 text-justify w-full">
                <label for="">Email</label>
            </div>
            <input type="text" placeholder="Email"
                class="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
        </div>
        <div class="mb-6">
            <div class="text-gray-200 py-2 text-justify w-full">
                <label for="">Password</label>
            </div>
            <input type="password" placeholder="Password"
                class="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
        </div>
        <div class="mb-10">
            <button type="submit" @click.prevent="onSubmit"
                class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90">
                Sign In</button>
        </div>
    </form>

</template>
