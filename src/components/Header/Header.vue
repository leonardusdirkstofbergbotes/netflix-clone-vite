<template>
    <nav :class="{'transparent': transparentNavbar}">
        <div>Icon left</div>

        <ul class="menu-links">
            <li v-for="link in 6">
                item {{ link }}
            </li>
        </ul>

        <div class="actions">
            <search />
            <icon-button :is-button="false" icon="notifications" />
            <div>Profile</div>
        </div>
    </nav>
</template>

<script src="./Header.ts" />
<style lang="scss" src="./Header.scss" scoped />