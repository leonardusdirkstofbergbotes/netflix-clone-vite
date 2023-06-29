<template>
    <h1>Who's watching?</h1>
    <div class="whos-whatching">
        <div v-for="profile in profiles" :key="profile.id" class="card-wrapper" @click="selectProfile(profile)">
            <profile-card></profile-card>
            <span class="profile-name">{{profile.name}}</span>
        </div>
    </div>

    <vue-button class="manage-profiles" text="Manage Profiles" />
</template>

<script src="./WhosWatching.ts" />
<style lang="scss" src="./WhosWatching.scss" scoped />