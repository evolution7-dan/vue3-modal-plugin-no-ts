import Modal from '../components/Modal.vue'
import { provide, ref } from 'vue'

export const ModalPlugin = {
    install(Vue) {
        Vue.component('Modal', Modal)
        const activeModals = ref([])

        Vue.provide('$modal', {
            activeModals,
            show(modalName) {
                activeModals.value.push(modalName)
            },
            hide(modalName) {
                activeModals.value = activeModals.value.filter((item) => {
                    item !== modalName
                })
            }
        })
    }
}
