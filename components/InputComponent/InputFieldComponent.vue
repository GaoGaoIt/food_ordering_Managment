<template>
    <q-input dense filled :class="classinput" :type="type" :label="label">

    </q-input>

        
    
</template>

<script>
export default {
    props: {classInput:{}, label:{},type:{require:false}},
    setup() {
        
    }
}
</script>