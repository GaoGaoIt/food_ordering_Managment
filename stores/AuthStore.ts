import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: useStorage('user', []),
        userSession: useStorage('userSession', []),
        identifier: useStorage('identifier', ''),
        userPhone: useStorage('userPhone', ''),
    }),
    actions: {
        setUser(user: any) {
            this.user = user;
        },
        getUser() {
            return this.user;
        },
        setUserSession(userSession: any) {
            this.userSession = userSession;
        },
        getUserSession() {
            return this.userSession;
        },
        setIdentifier(identifier: string) {
            this.identifier = identifier;
        },
        getIdentifier() {
            return this.identifier;
        },
        setUserPhone(userPhone: string) {
            this.userPhone = userPhone;
        },
        getUserPhone() {
            return this.userPhone;
        }

    },
    persist: true,
});
