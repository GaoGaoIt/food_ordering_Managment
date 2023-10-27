<template>
    <q-card class="card">
      <q-card-section>
        <div class="personal-info-header">
          <h2 class="section-title">
            <span class="larger-text">Personal Information</span>
          </h2>
          <q-btn
            @click="logout()"
            color="primary"
            label="Logout"
            class="logout-button"
          />
        </div>
        <div class="avatar-section">
          <img
            src="/assets/images/personalAvatar.png"
            alt="Avatar"
            class="avatar"
          />
          <q-btn
            label="Edit Avatar"
            icon="edit"
            color="primary"
            @click="editAvatar"
          />
        </div><br>
        <q-item>
          <q-item-section>
            <q-item-label class="label">Name:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="info">Your Name</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label class="label">Email:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="info">your@email.com</q-item-label>
          </q-item-section>
        </q-item>
        <!-- You can add more personal information fields here -->
      </q-card-section>
      <hr class="table-separator" />
      <q-card-section>
        <h2 class="section-title">Wallet</h2>
        <q-item>
          <q-item-section>
            <q-item-label class="label">Balance:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="info">RM 100</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <hr class="table-separator" />
      <q-card-section>
        <h2 class="section-title">Change Password</h2>
        <!-- Create a form to change the password -->
        <q-btn
          label="Change Password"
          icon="arrow_forward"
          color="primary"
          @click="changePassword"
        />
      </q-card-section>
    </q-card>
  </template>
  
  <style scoped>
  .card {
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .personal-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .section-title {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  .label {
    font-weight: bold;
    font-size: 16px;
  }
  
  .info {
    font-style: italic;
    font-size: 16px;
  }
  
  .avatar {
    width: 100px; /* Adjust the size as needed */
    height: 100px; /* Adjust the size as needed */
    border-radius: 50%;
  }
  
  .table-separator {
    border: 0;
    height: 2px;
    background-color: #ddd; /* Adjust the color as needed */
    margin: 10px 0;
  }
  
  .logout-button {
    margin-left: 10px; /* Add space between the button and the title */
  }
  </style>
  
  <script setup>
  const { signOut } = useAuth();
  
  async function logout() {
    await signOut({ callbackUrl: '/' });
  }
  
  function editAvatar() {
    // Add your code to handle avatar editing
  }
  
  function changePassword() {
    // Add your code to handle password change
  }
  </script>
  