<template>
    <vue-header />
    <div class="browse">
        <search-results class="search-results-wrapper" v-if="hasSearchResults"></search-results>
        <div v-else>
            <div class="video-wrapper">
                <iframe ref="iframeRef" src="https://www.youtube-nocookie.com/embed/R8xepj9wpi4?controls=0&autoplay=1&start=0&rel=0&fs=0&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <carousel name="Top Trending" :items="shows" />
        </div>
    </div>
    <vue-footer></vue-footer>
</template>

<script src="./Browse.ts" />
<style lang="scss" src="./Browse.scss" scoped />