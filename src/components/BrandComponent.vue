<template>
    <div class="logo">
        <router-link to="/about" class="logo__link">
            <picture class="logo__link__img">
                <source srcset="img/brand_2x.png 1x, img/brand_large_2x.png 2x" media="(min-width: 120em)">
                <img class="logo__link__img" srcset="img/brand_1x.png 1x, img/brand_2x.png 2x" alt="Jugal Kariya">
            </picture>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .logo {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;

        &__link
        {
            display: block;
            width: 42px;
            height: 42px;
            &__img
            {
                height: 100%;
                margin: 0 auto;
            }
        }
    }


</style>