<template>
    <vue-header />
    <div style="height: 80vh;  border: 1px solid pink">Hero Video</div>
    <carousel name="Top Trending" :items="shows" />
    <vue-footer></vue-footer>
</template>

<script src="./Browse.ts" />
<style lang="scss" src="./Browse.scss" scoped />