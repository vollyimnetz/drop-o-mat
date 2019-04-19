<template>
    <div class="clockwatch">
        <p v-if="offset" class="timeOutput">
            <span class="seconds">{{ offset.seconds }}</span><span class="divider">:</span><span class="millis">{{ ('00'+offset.milliseconds).slice(-3) }}</span>
        </p>
        <p v-if="!offset" class="timeOutput">
            <span class="seconds">0</span><span class="divider">:</span><span class="millis">000</span>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        time : {
            required: true,
            type: Date
        },
        stop : {
            required: true,
            type: Boolean
        }
    },
    data: () => ({
        offset: null,
        clockInterval:null,
    }),
    mounted() {
        let that = this;
        this.clockInterval = setInterval(function() {
            that.currentOffset();
        }, 1000/30 );
    },
    beforeDestroy() {
        this.stopTimer();
    },
    methods: {
        stopTimer() {
            if(this.clockInterval) {
                clearInterval(this.clockInterval);
            }
        },
        currentOffset() {
            if(this.stop===true) {
                this.stopTimer();
            }

            //calculation
            var current = new Date();
            var offset = current.getTime() - this.time.getTime();
            let milliseconds = offset % 1000;
            this.offset = {
                seconds : ((offset - milliseconds) / 1000),
                milliseconds : milliseconds
            };

            //renerate result
            if(this.stop===true) {
                this.$emit('result', {
                    start : this.time,
                    stop : current,
                    offset : offset,
                    seconds : this.offset.seconds,
                    milliseconds : this.offset.milliseconds,
                });
            }
        }
    }
}
</script>

