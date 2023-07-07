<template>
    <vue-header />
    <div class="browse">
        <search-results class="search-results-wrapper" v-if="hasSearchResults"></search-results>
        <div v-else>
            <div style="height: 80vh;  border: 1px solid pink">Hero Video</div>
            <carousel name="Top Trending" :items="shows" />
        </div>
    </div>
    <vue-footer></vue-footer>
</template>

<script src="./Browse.ts" />
<style lang="scss" src="./Browse.scss" scoped />