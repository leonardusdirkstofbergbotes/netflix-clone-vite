<template>
    <nav>
        <div>Icon left</div>

        <ul class="menu-links">
            <li v-for="link in 6">
                item {{ link }}
            </li>
        </ul>

        <div class="actions">
            <div>Search</div>
            <div>Bell</div>
            <div>Profile</div>
        </div>
    </nav>
</template>

<script src="./Header.ts" />
<style lang="scss" src="./Header.scss" scoped />