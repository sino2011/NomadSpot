<script setup>
    import { RouterLink } from 'vue-router';
    import Logo from "@/assets/images/Logo.avif";

</script>

<template>
    <nav>
        <div class="Navbar">
            <div class="Nav-in">
                <img class="Navbar-img" v-bind:src="Logo" alt="">
                <RouterLink to="/Home" class="nav-item">Home</RouterLink>
                <RouterLink to="/explore" class="nav-item">Explore</RouterLink>
                <button class="Login">Login</button>
            </div>

        </div>
    </nav>
</template>

<style scoped>
    .Navbar{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 20px;
        margin: 10px 20px;
        justify-content: center;
        background: #F8FAFC;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .Navbar-img {
        width: 40px; 
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }

    .nav-item {
        color: #0F766E;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(1);
        transition: transform 0.3s ease;
    }

    .nav-item:hover {
        transform: scale(1.2);
    }

    .Login {
      background-color: #0F766E;
      color: white;
      padding: 10px 24px;       /* Top/Bottom, Left/Right */
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 999px;     /* Perfect pill shape */
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgba(15, 118, 110, 0.2);
      transition: all 0.2s ease;
    }

    .Login:hover {
      background-color: #0D9488; /* Slightly lighter teal */
      transform: translateY(-2px); /* Lifts up slightly */
      box-shadow: 0 10px 15px -3px rgba(15, 118, 110, 0.3);
    }

    .Login:active {
      transform: translateY(0); /* Presses back down when clicked */
    }

    .Nav-in {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1100px;
    }
</style>