<template lang="pug">
    .autu-pop-up-win(v-show="show")
        .position-re
            .modification
                .title(v-if="options.title") {{options.title}}
                .content(v-if="options.content") {{options.content}}
                .bottom_box
                    .bottom.cancel( @click.stop="cancelBtn" v-if="options.cancel") {{options.cancel}}
                    .bottom.sure( @click.stop="successBtn($event)" v-if="options.confirm") {{options.confirm}}
</template>
