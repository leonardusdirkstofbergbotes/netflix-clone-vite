<template>
    <div ref="cardRef" class="card-wrapper">
        <div class="card" @mouseenter="hoverHandler($event)" @mouseleave="mouseLeaveHandler()" :class="{ 'active': active }">
            <img v-if="!playTrailer" :src="`https://image.tmdb.org/t/p/w300${showDetails.poster_path}`" />
            <iframe v-else :src="`https://www.youtube-nocookie.com/embed/${youtubeKey}?controls=0&autoplay=1&start=0&rel=0&fs=0&mute=1`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <div class="hover-actions" v-if="active">
                <div class="card-actions">
                    <div><icon-button filled icon="play" /></div>
                    <div><icon-button icon="done" /></div>
                    <div><icon-button icon="thumb_up" /></div>
                    <div style="margin-left: auto;"><icon-button @click="toggleCard($event)" icon="arrow_down" /></div>
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

        <div :class="{ 'expanded': expanded }" class="expanded-card" :style="positionOfPopup">
            <img src="/" />
            <icon-button icon="close" class="close-expanded" @click="toggleCard($event)"></icon-button>
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
    </div>
</template>

<script src="./ShowCard.ts" />
<style lang="scss" src="./ShowCard.scss" scoped />