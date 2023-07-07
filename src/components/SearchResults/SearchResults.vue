<template>
    <div class="search-results" v-if="searchedshows.length > 0">
        <div class="suggestions">Suggestions come here</div>
        <div class="shows">
            <div v-for="show in searchedshows" :key="show.id">
                <show-card :show-details="show" />
            </div>
        </div>
    </div>
    <div class="no-results" v-else>
        No results found
    </div>
</template>

<script src="./SearchResults.ts" />
<style lang="scss" src="./SearchResults.scss" scoped />