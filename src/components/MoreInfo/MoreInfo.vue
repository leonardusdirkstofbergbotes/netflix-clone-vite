<template>
    <div>
        <img src="/" />
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