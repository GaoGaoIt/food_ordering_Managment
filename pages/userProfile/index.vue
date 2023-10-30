<template>
    <div>
        <q-btn @click="logout()">logout</q-btn>





<!--  -->
    </div>
</template>
<script setup>
const { signOut } = useAuth();

async function logout() {



    await signOut({ callbackUrl: '/' });
    
}

</script>