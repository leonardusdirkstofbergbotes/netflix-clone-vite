<template>
    <div class="carousel-wrapper">
        <h2>{{ title }}</h2>
        <div class="carousel" @mouseenter="showNavigation = true" @mouseleave="showNavigation = false">
            <div v-if="showNavigation" @mouseenter="showTotalPages = true" @mouseleave="showTotalPages = false" class="previous" @click="previous()">&lt;</div>
            <div v-for="(show, index) in items" :key="show.id">
                <show-card :show-details="show" />
            </div>
            <div v-if="showNavigation" @mouseenter="showTotalPages = true" @mouseleave="showTotalPages = false" class="next" @click="next()">></div>
            <div class="total-pages" v-if="showTotalPages">
                <span v-for="page in totalPagesAvailable" :class="{'active-page': currentPage == page}"></span>    
            </div>
        </div>
    </div>
</template>

<script src="./Carousel.ts" />
<style lang="scss" src="./Carousel.scss" scoped />