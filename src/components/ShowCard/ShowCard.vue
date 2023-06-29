<template>
    <div class="card" @mouseenter="hoverHandler($event)" @mouseleave="active = false" :class="{ 'active': active }">
        <img />
    </div>
</template>

<script src="./ShowCard.ts" />
<style lang="scss" src="./ShowCard.scss" scoped />