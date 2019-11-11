<template>
    <div>
        <div class="hamburger">
            <div class="hamburger__box">
                <div class="hamburger__box__inner" :class="{ 'close': !isHidden } " @click="toggleNavigation"></div>
            </div>
        </div>
        <div class="menu__container" :class="{ 'hide': isHidden } ">
            <div class="menu__sidebar">
                <nav class="menu__sidebar__links">
                    <ul class="menu__sidebar__links__list">
                        <li class="menu__sidebar__links__list__item" v-for="(item, index) in navItems" v-bind:key="index">
                            <router-link :to="item.url" class="menu__sidebar__links__list__item__link" :key="index" @click.native="hideNavigation">{{item.name}}</router-link>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </div>
</template>

<script>
import nav from '@/data/routes'
export default {
    data(){return{
        isHidden: true,
        navItems: nav.items
    }},
    methods: {
        toggleNavigation: function () {
            this.isHidden = !this.isHidden;
        },
        hideNavigation: function () {
            this.isHidden = true;
        }
    }
}
</script>