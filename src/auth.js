// auth.js

import { ref } from 'vue';

export const isAuthenticated = ref(false);
export const userId = ref(null);

export const login = (userData) => {
  // Simulating a login process where user data is validated
  // In a real application, this would involve an API call
  if (userData.correo === 'test@example.com' && userData.password === 'password') {
    isAuthenticated.value = true;
    userId.value = 1; // Replace with actual user ID obtained from the server
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userId', userId.value);
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  isAuthenticated.value = false;
  userId.value = null;
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('userId');
};

// Check if the user was authenticated previously on page load
if (localStorage.getItem('isAuthenticated') === 'true') {
  isAuthenticated.value = true;
  userId.value = localStorage.getItem('userId');
}
