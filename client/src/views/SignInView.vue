<template>
  <main>
    <div class="hero__section">
      <div class="logo"><img src="../assets/images/logo.png" /></div>
      <div class="title">
        <h1>Sign In</h1>
        <p>Please login to use platform</p>
      </div>
      <form>
        <div class="box">
          <input type="email" placeholder="Enter your email">
          <p class="form-error"></p>
        </div>
        <div class="box">
          <input type="password" placeholder="Enter your password" />
          <p class="form-error"></p>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="check" />
          <label for="check">Remenber me</label>
          <a href="">Forgot password?</a>
        </div>
        <button class="btn-primary ">Sign In</button>
        <p>Don't have an account? <RouterLink to="/signup">Sing up</RouterLink></p>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

a {
  color: var(--primary-2);
}

input {
  border: 2px solid var(--gray-1);
}

.hero__section {
  width: 400px;
  padding: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 70px;
  }
}

.title {
  margin-bottom: 50px;

  p {
    font-size: 14px;
  }
}

form {
  display: grid;
  gap: 20px;
}

.box input {
  width: 100%;
  padding: 15px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
}

.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-left: auto;
  }
}

input[type='checkbox'] {
  accent-color: var(--primary-2);
}

button {
  border-radius: 999px;
  padding: 12px;
  font-size: 1rem;
}
.form-error {
  color: var(--danger-1);
}
</style>
