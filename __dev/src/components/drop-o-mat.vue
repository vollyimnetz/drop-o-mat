<template>
    <section class="drop-o-mat-wrap">
        <button class="startButton btn btnMain" type="button" @click="startClock" v-if="!startTime">drop</button>
        <button class="stopButton btn btnMain" type="button" @click="stopClock" v-if="startTime">land</button>
        <clockwatch v-if="startTime" :time="startTime" :stop="stop" @result="result"></clockwatch>

        <div v-if="resultData">
            <h3>Result</h3>
            <p>
                The total time in free fall was <span class="timeOutput"><span class="seconds">{{ resultData.seconds }}</span><span class="divider">,</span><span class="millis">{{ ('00'+resultData.milliseconds).slice(-3) }}</span> <span class="unit">seconds</span></span>.
            </p>
            <p>
                That means a height of <span class="resultHeight">{{resultData.height.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}} meter</span>.
            </p>
            <p>
                The resulting velocity on impact is {{resultData.velocity.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}} m/s (or {{(resultData.velocity * 3.6).toLocaleString(undefined, {maximumFractionDigits: 0})}} km/h).
            </p>
        </div>
    </section>
</template>

<script>
import clockwatch from './clockwatch.vue';
export default {
    components: {
        clockwatch
    },
    data:() => ({
        startTime:null,
        stop:false,
        resultData: null,
    }),
    methods: {
        startClock() {
            this.startTime = new Date();
        },
        stopClock() {
            this.stop = true;
        },
        result(resultData) {
            this.resultData = resultData;
            let acceleration = 9.81;//in m/s²
            this.resultData.height = 0.5 * acceleration * Math.pow(resultData.offset/1000, 2);//height in m/s
            this.resultData.velocity = acceleration * resultData.offset/1000;

            this.stop = false;
            this.startTime = null;
        }
    }
}
</script>

