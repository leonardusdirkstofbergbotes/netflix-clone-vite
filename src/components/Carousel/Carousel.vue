<template>
    <div class="carousel-wrapper">
        <h2>{{ name }}</h2>
        <div class="carousel">
            <slot name="items"></slot>
        </div>
    </div>
</template>

<script src="./Carousel.ts" />
<style lang="scss" src="./Carousel.scss" scoped />