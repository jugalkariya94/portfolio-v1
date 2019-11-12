<template>
    <div class="about">
        <h1 class="primary-header "><span>Hi, I'm </span> <span> Jugal Kariya</span></h1>
        <primary-sub-component text="I'm a full-stack developer from India"></primary-sub-component>
        <primary-sub-component text="Hit me up and let's create something special"></primary-sub-component>
        <button-component>View Projects</button-component>
    </div>
</template>

<script>
import PrimarySubComponent from '@/components/PrimarySubComponent'
import ButtonComponent from '@/components/ButtonComponent'

import '@/scss/page/about.scss'
export default {
    components: {PrimarySubComponent, ButtonComponent},
}
</script>