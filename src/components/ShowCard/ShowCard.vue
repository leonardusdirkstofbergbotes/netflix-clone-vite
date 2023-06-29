<template>
    <div class="card" @mouseenter="hoverHandler($event)" @mouseleave="mouseLeaveHandler()" :class="{ 'active': active }">
        <img src="/" />

        <div class="hover-actions" :class="{ 'active': active }">
            <div class="card-actions">
                <div><icon-button filled icon="play" /></div>
                <div><icon-button icon="done" /></div>
                <div><icon-button icon="thumb_up" /></div>
                <div style="margin-left: auto;"><icon-button icon="arrow_down" /></div>
            </div>
            <div class="card-disclaimer">
                <div>93 % match</div>
                <div>fp 16</div>
                <div>10 Episodes</div>
                <div>HD</div>
            </div>
            <div class="card-categories">
                <div>Dark</div>
                <div>Suspensefull</div>
                <div>Teen</div>
            </div>
        </div>
    </div>
</template>

<script src="./ShowCard.ts" />
<style lang="scss" src="./ShowCard.scss" scoped />