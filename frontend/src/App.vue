<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import Upload from './components/Upload/Upload.vue'

    export default defineComponent({
        setup() {

        },
        components: {
            Upload,
        },
    })
</script>

<template>
    <div>
        <p>Upload Data</p>
        <Upload />
    </div>
</template>