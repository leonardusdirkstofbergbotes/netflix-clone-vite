<template>
    <nav>
        <div>Icon left</div>

        <ul class="menu-links">
            <li v-for="link in 6">
                item {{ link }}
            </li>
        </ul>

        <div class="actions">
            <search />
            <div><icon-button :is-button="false" icon="notifications" /></div>
            <div>Profile</div>
        </div>
    </nav>
</template>

<script src="./Header.ts" />
<style lang="scss" src="./Header.scss" scoped />