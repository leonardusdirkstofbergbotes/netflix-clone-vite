<template>
    <h1>Who's watching?</h1>
    <div class="whos-whatching">
        <div class="card-wrapper" @click="selectProfile(1)">
            <profile-card></profile-card>
            <span class="profile-name">Leonardus</span>
        </div>
        <div class="card-wrapper" @click="selectProfile(2)">
            <profile-card></profile-card>
            <span class="profile-name">Leonardus</span>
        </div>
        <div class="card-wrapper" @click="selectProfile(3)">
            <profile-card></profile-card>
            <span class="profile-name">Leonardus</span>
        </div>
        <div class="card-wrapper" @click="selectProfile(4)">
            <profile-card></profile-card>
            <span class="profile-name">Leonardus</span>
        </div>
        <div class="card-wrapper" @click="selectProfile(5)">
            <profile-card></profile-card>
            <span class="profile-name">Leonardus</span>
        </div>
    </div>

    <vue-button class="manage-profiles" text="Manage Profiles" />
</template>

<script src="./WhosWatching.ts" />
<style lang="scss" src="./WhosWatching.scss" scoped />