<template>
  <div><br>
    <q-card class="edit-profile-card">
      <q-card-section class="text-center">
        <h3>Edit Profile</h3>
      </q-card-section>
      <div class="tw-col-span-6">
        <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
          <q-avatar size="92px">
            <q-img src="https://picsum.photos/id/1/200/300" />
          </q-avatar>
        </div>
      </div>
      <q-card-section>
        <form @submit="updateProfile" class="edit-profile-form">
            <div class="col">
                <label for="phoneNumber">Profile Picture:</label><br>
                  <div class="input-group">
                  <div class="input-prefixs text-center">Choose File</div>
                  <input type="file" id="phoneNumber" class="input-field" />
              </div>
            </div><br>
            <div class="col">
              <label for="username">Username:</label><br>
              <input type="text" id="username" v-model="editedProfile.username" class="input-field" />
            </div><br>

            <div class="col">
              <label for="email">Email:</label><br>
              <input type="email" id="email" v-model="editedProfile.email" class="input-field" />
            </div><br>

          <div class="row">
            <div class="col">
              <label for="phoneNumber">Phone Number:</label><br>
                <div class="input-group">
                <div class="input-prefix text-center">+60 </div>
                <input type="text" id="phoneNumber" v-model="editedProfile.phoneNumber" class="input-field" />
            </div>
            </div>

            <div class="col">
              <label for="password">Password:</label><br>
              <div class="input-group">
                <input type="password" id="password" v-model="editedProfile.password" class="input-field" />
                <div class="eye-icon" @click="togglePasswordVisibility">
                  <q-icon
                    name="visibility"
                    class="password-toggle"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Change the button color to "primary" -->
          <q-btn type="submit" label="Save Changes" color="primary" />

        </form>
      </q-card-section>
    </q-card>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        editedProfile: {
            file: '',
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
        },
        showPassword: false,
      };
    },
    methods: {
      updateProfile() {
        
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-profile-card {

    max-width: 800px; 
    margin: 0 auto; 
  }
  
  .edit-profile-form {
    padding: 16px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  
  .col {
    flex: 1;
    margin-right: 8px; 
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc; 
    border-radius: 4px;
    outline: none;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .eye-icon {
    position: relative;
  }
  
  .password-toggle {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
  
  .input-group {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .input-prefix {
    background-color: #eee;
    padding: 8px;
    border: 1px solid #ccc;
    border-right: none;
    border-radius: 4px 0 0 4px;
    width: 50px;
  }

  .input-prefixs {
    background-color: #eee;
    padding: 10.8px;
    border: 1px solid #ccc;
    border-right: none;
    border-radius: 4px 0 0 4px;
    width: 150px;
  }

    #phoneNumber {
    border-radius: 0 4px 4px 0; 
  }
  
  </style>
  