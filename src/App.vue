<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { inject } from 'vue'

const $modal = inject('$modal')
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>
    </header>

    <!-- <main>
        <TheWelcome />
    </main> -->
    <button @click="$modal.show('TestModal')">Open Modal</button>
    <button @click="$modal.hide('TestModal')">Close Modal</button>
    <Modal name="TestModal">
        <h1>This is a test modal</h1>
        <p>
            lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum
            lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum
            lorum lorum
        </p>
    </Modal>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
