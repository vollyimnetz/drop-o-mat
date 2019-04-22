<template>
    <v-app>
        <div id="page">
            <navigation></navigation>

            <v-content>
                <v-container fluid>
                    <router-view :key="$route.fullPath"></router-view>
                </v-container>
            </v-content>

            <v-footer app class="pa-3">
                <v-spacer></v-spacer>
                <div><v-icon @click="doReload">autorenew</v-icon></div>
                <div class="versionInfo"><small><span class="text">Version:</span> <span v-html="versionDate"></span></small></div>
            </v-footer>
        </div>
    </v-app>
</template>

<script>
import navigation from '~/components/navigation.vue';
export default {
    components:{ navigation },
    computed: {
        versionDate() {
            let value = MY_WEBAPP_VERSION_DATE
            if(value!=='DYNAMIC') {
                value = new Date(value);
                value = '<span class="date">'+ ('0'+value.getDate()).slice(-2)+'.'+('0'+(value.getMonth()+1)).slice(-2)+'.'+value.getFullYear()+'</span> <span class="time">'+('0'+value.getHours()).slice(-2)+':'+('0'+value.getMinutes()).slice(-2)+'</span>';
            }
            return value;
        }
    },
    methods:{
        doReload() {
            location.reload();
        }
    }
}
</script>