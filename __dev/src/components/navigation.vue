<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        
        <v-toolbar app>
            <v-toolbar-title><router-link :to="{ name: 'home' }" class="navbar-brand">drop-o-mat </router-link></v-toolbar-title>
            <v-toolbar-items>
                <small v-if="!isOnline" class="badge badge-warning">OFFLINE</small>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <router-link :to="{ name: 'why' }" class="nav-link">why</router-link>
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