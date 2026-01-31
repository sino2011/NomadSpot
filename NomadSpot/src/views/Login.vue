<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    
    <div class="login-container">
        <div class="login-card">
            <h1>Login</h1>
            
            <div class="input-group">
                <label>Email or Phone number</label>
                <input type="text" placeholder="e.g. name@mail.com">
            </div>

            <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••">
            </div>

            <RouterLink to="/Home" class="Look">Explore !</RouterLink>
        </div>
    </div>
</template>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>

<style scoped>
    /* 1. Layout Container */
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* Centers the card on the screen */
        background-color: #f8fafc;
    }

    .login-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        background: white;
        border-radius: 24px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        width: 100%;
        max-width: 400px;
    }

    /* 2. Typography Spacing */
    h1 {
        font-family: "Poppins", sans-serif;
        color: #0F766E;
        margin-bottom: 32px; /* Gap after title */
        font-size: 2rem;
    }

    /* 3. Input Grouping */
    .input-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px; /* Space between the two input blocks */
    }

    .input-group label {
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        color: #475569;
        margin-bottom: 8px; /* Space between label and its input */
        padding-left: 12px;
    }

    .login-card input {
        font-family: "Roboto", sans-serif;
        border-radius: 999px;
        border: 1px solid #e2e8f0;
        padding: 14px 24px;
        width: 100%; /* Spans the full width of the card */
        box-sizing: border-box; /* Ensures padding doesn't break width */
        outline: none;
        transition: all 0.2s;
        font-size: 1rem;
    }

    .login-card input:focus {
        border-color: #0F766E;
        box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.1);
    }

    /* 4. Button Spacing */
    /* 4. Link Button Style */
    .login-card .Look {
        background-color: #0F766E;
        color: white;
        padding: 14px 40px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 999px;
        
        /* These 3 lines are the key fixes */
        display: block;        
        width: 100%;           
        text-align: center;    
        
        box-sizing: border-box; /* Keeps padding inside the width */
        margin-top: 12px;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .login-card .Look:hover {
        background-color: #0D9488;
        transform: translateY(-2px);
        box-shadow: 0 8px 15px -3px rgba(15, 118, 110, 0.3);
    }

    .login-card .Look:active {
        transform: translateY(0);
    }
</style>