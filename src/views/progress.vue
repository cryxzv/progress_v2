<template>
  <div id="main">
    <div id="test">
      <div id="title">Progress</div>
    </div>
    <div id="bg-rect-1"></div>
    <div id="bg-rect-2"></div>
    <div class="bar-contain">
      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Next Minute</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">e</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Next Hour</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Tomorrow</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Next Month</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Next Christmas</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Next April's Fools</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Next Leap Day</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Hailey's Comet Returns</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>

      <div class="event">
        <div class="text-containL">
          <span class="event-textL">Death of Universe</span>
        </div>
        <div class="full-bar">
          <div class="inc-bar">
            <div class="comp-bar"></div>
          </div>
        </div>
        <div class="text-containR">
          <span class="event-textR">EEEEEEE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { start } from '@/script.js'
import { onMounted } from 'vue'
onMounted(() => {
  start()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

/* html {
  overflow: scroll;
  overflow-x: hidden;
} */

body {
  margin: 0%;
  font-size: 20px;
}

#main {
  background: #191919;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
}

#title {
  position: relative;
  top: 2rem;
  font-family: 'Manrope';
  font-size: 4.8rem;
  color: #dedede;
  z-index: 2;
  width: 100%;
  font-weight: 300;
  text-align: center;
}

#bg-rect-1 {
  position: fixed;
  width: 65vw;
  height: 125vh;
  left: -22vw;
  top: -4vw;
  background: #1d1d1d;
  transform: rotate(-45deg);
}

#bg-rect-2 {
  position: fixed;
  width: 80vw;
  height: 165vh;
  left: 30vw;
  top: -10vh;
  background: #212121;
  transform: rotate(-135deg);
}

.full-bar {
  display: flex;
  position: relative;
  transform: translateX(33.3%);
  width: 60vw;
  height: 1rem;
  border-radius: 0.2rem;
  margin-top: 4rem;
}

.inc-bar {
  position: relative;
  width: 100%;
  height: 100%;
  background: #363636;
  border-radius: 0.2rem;
}

.comp-bar {
  position: relative;
  width: 20%;
  height: 100%;
  background: #d9d9d9;
  border-radius: 0.2rem;
  transition: width 0.2s ease-in-out;
}

.text-containL {
  position: relative;
  width: 20vw;
  text-align: center;
}

.event {
  position: relative;
}

.event-textL {
  position: relative;
  font-family: 'Manrope';
  font-weight: 200;
  color: #dedede;
  font-size: 1rem;
  top: 5.05rem;
}

.text-containR {
  width: 20vw;
  /* background-color: #D9D9D9; */
  margin-left: 80vw;
  text-align: center;
}

.event-textR {
  position: relative;
  font-family: 'Manrope';
  font-weight: 200;
  color: #dedede;
  font-size: 1rem;
  top: -1.3rem;
}

.bar-contain {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  justify-content: center;
  padding-bottom: 6rem;
}

#start {
  top: 20vh;
  width: 20vmin;
  height: 20vmin;
  background-color: #8a8a8a;
  position: relative;
  transform: rotate(45deg);
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  background-clip: content-box;
  border: 0.25rem solid #8a8a8a;
  scale: 1;
  transition:
    scale 2s ease-in,
    top 2s ease-in,
    border 2s ease-in,
    background-color 2s ease-in;
}

#line {
  position: relative;
  top: -18.2vh;
  width: 50vw;
  height: 0.1rem;
  background-color: #dedede;
  margin-left: auto;
  margin-right: auto;
}
</style>
