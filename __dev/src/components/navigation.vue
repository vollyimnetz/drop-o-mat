<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        
        <v-toolbar app>
            <v-toolbar-items>
                <router-link :to="{ name: 'home' }" class="v-toolbar__title v-btn v-btn--flat text-none">drop-o-mat </router-link>
            </v-toolbar-items>
            <v-chip color="orange" v-if="!isOnline">OFFLINE</v-chip>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <router-link :to="{ name: 'why' }" class="v-btn v-btn--flat">why</router-link>
            </v-toolbar-items>
        </v-toolbar>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: () => ({
    }),
    methods: {
        
    },
    computed: {
        ...mapGetters({
            isOnline: 'online'
        }),
        
    },
}
</script>