<template>
    <div :class="{ 'filled': filled, 'is-button': isButton }" class="icon">
        <img :src="`/src/assets/images/icons/${icon}.svg`" loading="lazy" :alt="icon" />
    </div>
</template>

<script src="./IconButton.ts" />
<style lang="scss" src="./IconButton.scss" scoped />