<template>
  <div id="app">
      <div class="wrapper">
          <header>
              <nav class="navigation-bar">
                  <brand-component></brand-component>
                  <mobile-nav-component></mobile-nav-component>
                  <div class="nav__links">
                      <ul class="nav__links__list">
                          <li class="nav__links__list__item" v-for="(item, index) in navItems" v-bind:key="index">
                              <router-link :to="item.url" class="nav__links__list__item__link" :key="index">{{item.name}}</router-link>
                          </li>
                      </ul>
                  </div>
              </nav>

          </header>
          <contact-component></contact-component>
          <div class="container">
              <router-view class="content"></router-view>
          </div>
          <footer-component></footer-component>
      </div>
  </div>
</template>

<script>
import BrandComponent from './components/BrandComponent'
import ContactComponent from './components/ContactComponent'
import FooterComponent from './components/FooterComponent'
import MobileNavComponent from './components/MobileNavComponent'
import nav from '@/data/routes'

export default {
  components: {BrandComponent, ContactComponent, FooterComponent, MobileNavComponent},
    data(){
      return{
        navItems: nav.items
    }},
}
</script>

<style lang="scss">

    .nav{
        &__links {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            @media only screen and (max-width: 48em) {
                display: none;
            }
            &__list {
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                align-items: center;

                &__item {
                    position: relative;
                    font-size: 2em;
                    counter-increment: item 1;
                    margin: 0px 10px;

                    &__link {
                        padding: 12px 10px;
                        color: $color-white;
                        display: inline-block;
                        text-decoration-skip-ink: auto;
                        color: inherit;
                        position: relative;
                        cursor: pointer;
                        text-decoration: none;
                        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                    }
                }
            }
        }
    }
</style>