<template>
    <div>
        <q-btn @click="logout()">logout</q-btn>
    </div>
</template>
<script setup>
const { signOut } = useAuth();

async function logout() {

    console.log('click click');

    await signOut({ callbackUrl: '/' });
    
}

</script>