<template>
    <div ref="cardRef" class="card-wrapper" @mouseleave="mouseLeaveHandler()">
        <div class="card" @mouseenter="hoverHandler($event)" :class="{ 'active': active }">
            <img v-if="!playTrailer" :src="`https://image.tmdb.org/t/p/w300${showDetails.backdrop_path}`" />
            <embed v-else :src="`https://www.youtube-nocookie.com/embed/${youtubeKey}?controls=0&autoplay=1&start=0&rel=0&fs=0&mute=1`" frameborder="0" />

            <div class="hover-actions" v-if="active">
                <div class="card-actions">
                    <div><icon-button filled icon="play" /></div>
                    <div><icon-button icon="done" /></div>
                    <div><icon-button icon="thumb_up" /></div>
                    <div style="margin-left: auto;"><icon-button @click="$refs.popupRef.openPopup()" icon="arrow_down" /></div>
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

        <more-info
            ref="popupRef" 
            :show-details="showDetails" 
            :youtube-key="youtubeKey" 
            :time-played-already="playTimeCount"
            @toggled="popupActive = $event" :cardRef="$refs.cardRef" 
        />
    </div>
</template>

<script src="./ShowCard.ts" />
<style lang="scss" src="./ShowCard.scss" scoped />