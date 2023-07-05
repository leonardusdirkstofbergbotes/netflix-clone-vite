<template>
    <vue-header />
    <div style="height: 80vh;  border: 1px solid pink">Hero Video</div>
    <carousel name="Top Trending">
        <template #items>
            <show-card v-for="show in shows" :key="show.id" :show-details="show" />
        </template>
    </carousel>
    <!-- <div style="display: flex; gap: 1rem">
        <show-card v-for="show in shows" :key="show.id" :show-details="show" />
    </div> -->
    <vue-footer></vue-footer>
</template>

<script src="./Browse.ts" />
<style lang="scss" src="./Browse.scss" scoped />