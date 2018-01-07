<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if='showMessage'>Server Details are currently not updated</p>
        <p v-else>Server status: {{selectedServer.status}} 
            <button
                :class='{criticalBtn: !disableButton, btn: disableButton}'
                :disabled="disableButton"
                @click='statusNormal'
            >
            Status -> Normal</button>
        </p>
    </div>

</template>

<script>
    import {serverBus} from './../../main';

    export default {
        computed: {
            disableButton() {
                return this.selectedServer.status === 'Normal' ? true : false
            }
        },
        data() {
            return {
                showMessage: true,
                selectedServer: {}
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.selectedServer = server;
                this.showMessage = false;
            })
        },
        methods: {
            statusNormal() {
                this.selectedServer.status = 'Normal';
            }
        }
    }
</script>

<style>
    .criticalBtn {
        background-color: rgb(176, 136, 136);
    }
    .btn {
        background-color: rgba(0, 0, 0, .5);
    }
</style>
