<template>
    <div class="expanded-card" :class="{ 'expanded': expanded }" :style="positionOfPopup">
        <img v-if="!expanded || !youtubeKey" :src="`https://image.tmdb.org/t/p/w300${showDetails.backdrop_path}`" />
        <iframe v-else :src="`https://www.youtube-nocookie.com/embed/${youtubeKey}?controls=0&autoplay=1&start=0&rel=0&fs=0&mute=1&start=${startPlayingVideoFrom}`" frameborder="0"></iframe>
        <icon-button icon="close" class="close-expanded" @click="closeCard()"></icon-button>
        <div class="expanded-card-actions">
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

<script src="./MoreInfo.ts" />
<style lang="scss" src="./MoreInfo.scss" scoped />