<template>
  <div>
    <div class="content" v-on:click="Submit">content</div>
    <div class="s">ddddddddddddddddddd</div>
    <div class="content"   v-html="item()"></div>
    <div class="s">ddddddddddddddddddd</div>
    <div class="content"   >{{authors}}</div>
    <div class="s">ddddddddddddddddddd</div>
    <router-link to="/foo">Bar</router-link>
    <br>
    <router-link to="/Login">Main</router-link>
    <br>
    <router-link to="/cs">cs</router-link>
    <br>
  </div>
</template>
<style src="./main.scss" lang="scss"/>
