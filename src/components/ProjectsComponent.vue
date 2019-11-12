<template>
    <div class="portfolio">
        <project-component v-for="(project, index) in projects" :key="index" :project="project"></project-component>
    </div>
</template>

<script>
import ProjectComponent from "@/components/ProjectComponent";

import {projects} from '@/data/projects'
export default {
    components: {ProjectComponent},
    data(){return{
        loading: true,
        projects: projects
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 400)
    }
}
</script>

<style lang="scss">
    .portfolio
    {
        display: grid;
        grid-gap: 15em 5em;
        padding: 5em;
        grid-template-columns: repeat(2, 1fr);
    }

    .slide-left
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-5rem)
    }
    .slide-right
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(5rem)
    }
</style>