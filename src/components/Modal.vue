<template>
    <div v-if="active" class="Modal">
        <div class="Modal__inner">
            <slot></slot>
            <button @click="$modal.hide(props.name)">x</button>
        </div>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    name: String
})

const $modal = inject('$modal')

const active = computed(() => {
    return $modal.activeModals.value.includes(props.name)
})
</script>
<style scoped>
.Modal {
    position: fixed;
	background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
	top: 0;
	left: 0;
    height: 100vh;
    width: 100vw;
	padding: 30px;
}
.Modal__inner {
	position: relative;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
	max-width: 700px;
}

button {
    position: absolute;
    right: 10px;
    top: 10px;
    border: 1px solid black;
    border-radius: 100%;
}
</style>
