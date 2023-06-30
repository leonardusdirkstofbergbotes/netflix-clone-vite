<template>
    <div class="card" @mouseenter="hoverHandler($event)" @mouseleave="mouseLeaveHandler()" :class="{ 'active': active, 'expanded': expanded }">
        <img src="/" />

        <div class="hover-actions" v-if="active">
            <div class="card-actions">
                <div><icon-button filled icon="play" /></div>
                <div><icon-button icon="done" /></div>
                <div><icon-button icon="thumb_up" /></div>
                <div style="margin-left: auto;"><icon-button @click="expandCard()" icon="arrow_down" /></div>
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

        <div v-if="expanded" class="expanded-actions">
            <div class="grid">
                <div class="left">
                    left content
                </div>
                <div class="right">
                    right content
                </div>                
            </div>
        </div>
    </div>
</template>

<script src="./ShowCard.ts" />
<style lang="scss" src="./ShowCard.scss" scoped />