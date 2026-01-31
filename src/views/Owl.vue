<script setup>
    import { ref } from 'vue';

    const Placeholder_img = ref("https://picsum.photos/200/300")
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <div class="Main">
        <div class="Left">
            <img v-bind:src="Placeholder_img" alt="">
            <h2>Owl Cafe</h2>
            <p>Description</p>
            <button class="Book">Book Now !</button>
        </div>
        <div class="Map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13649.427211020187!2d29.926777865670726!3d31.210842772307696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c57ae9f402eb%3A0x64abd16241f399cf!2sOWL%20Coffee%20Club%20(%20Smouha%20Branch%20)!5e0!3m2!1sen!2seg!4v1769500852409!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<style scoped>
    h2 {
        font-family: "Poppins", serif;
    }

    p {
        font-family: "Roboto", serif;
    }

    .Main {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 100px;
    }

    .Left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 16px;
        padding: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .Left img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 15px;
    }

    .Book {
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
        margin-top: 10px;
    }

    .Book:hover {
      background-color: #0D9488; /* Slightly lighter teal */
      transform: translateY(-2px); /* Lifts up slightly */
      box-shadow: 0 10px 15px -3px rgba(15, 118, 110, 0.3);
    }

    .Book:active {
      transform: translateY(0); /* Presses back down when clicked */
    }

    .Map{
        width: 60%;
    }

    iframe {
        height: 100%;
        width: 100%;
        border-radius: 16px;
        border: none;
        overflow: hidden;
    }
</style>