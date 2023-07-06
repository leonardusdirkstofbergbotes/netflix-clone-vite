<template>
    <div class="carousel-wrapper">
        <h2>{{ name }}</h2>
        <div class="carousel">
            <div class="previous" @click="previous()">&lt;</div>
            <div v-for="(show, index) in items" :key="show.id">
                <show-card :show-details="show" />
            </div>
            <div class="next" @click="next()">></div>
        </div>
    </div>
</template>

<script src="./Carousel.ts" />
<style lang="scss" src="./Carousel.scss" scoped />