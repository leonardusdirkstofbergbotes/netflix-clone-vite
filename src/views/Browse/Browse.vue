<template>
    <vue-header />
    <div class="browse">
        <search-results class="search-results-wrapper" v-if="hasSearchResults"></search-results>
        <div v-else>
            <landing-page-show />
            <carousel name="Top Trending" :items="shows" />
        </div>
    </div>
    <vue-footer></vue-footer>
</template>

<script src="./Browse.ts" />
<style lang="scss" src="./Browse.scss" scoped />