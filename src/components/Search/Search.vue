<template>
    <div class="search-wrapper" :class="{ 'open': open }">
        <icon-button :is-button="false" icon="search" @click="toggleSearch()" />
        <input type="text" v-model="searchValue" placeholder="Titles, people, genres" />
        <icon-button class="reset-search" v-if="open && searchValue != ''" :is-button="false" icon="close" @click="removeText()" />
    </div>
</template>

<script src="./Search.ts" />
<style lang="scss" src="./Search.scss" scoped />