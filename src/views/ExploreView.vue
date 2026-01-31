<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const Placeholder_img = ref("https://picsum.photos/200/300")

    function Explore(Map) {
        console.log("Btn CLicked")
    }
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <div class="Discovery">
        <div class="Left">
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Spirit Cafe</h3>
                <p>Description</p>
                <RouterLink to="/Spirit" class="Look">Explore !</RouterLink>
                <!-- <button id="Look" @click="Explore('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.64607542947!2d29.90194037431639!3d31.21156450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49aa865b23f%3A0x42ca9fdb8c68551b!2sSpirit!5e0!3m2!1sen!2seg!4v1769460945682!5m2!1sen!2seg')" class="Look">Explore !</button> -->
            </div>
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Blanco Cafe</h3>
                <p>Description</p>
                <RouterLink to="/Blanco" class="Look">Explore !</RouterLink>
                <!-- <button @click="Explore('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.85426970888!2d29.9012647743164!3d31.210843299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c500392fff15%3A0x7001d6d47edd6354!2sBlanco%20cafe%20%26%20PlayStation!5e0!3m2!1sen!2seg!4v1769462222784!5m2!1sen!2seg')" class="Look">Explore !</button> -->
            </div>
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Owl Cafe</h3>
                <p>Description</p>
                <RouterLink to="/Owl" class="Look">Explore !</RouterLink>
                <!-- <button @click="Explore('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.85426970888!2d29.9012647743164!3d31.210843299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c57ae9f402eb%3A0x64abd16241f399cf!2sOWL%20Coffee%20Club%20(%20Smouha%20Branch%20)!5e0!3m2!1sen!2seg!4v1769462350887!5m2!1sen!2seg')" class="Look">Explore !</button> -->
            </div>
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Joy Corner Cafe</h3>
                <p>Description</p>
                <RouterLink to="/Joy" class="Look">Explore !</RouterLink>
                <!-- <button @click="Explore('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.85426970888!2d29.9012647743164!3d31.210843299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5275a13ddf3%3A0x829a6d875c47107f!2sJoy%20Corner%20Coffee!5e0!3m2!1sen!2seg!4v1769462396576!5m2!1sen!2seg')" class="Look">Explore !</button> -->
            </div> 
        </div>    
    </div>
</template>

<style scoped>
    h3 {
        font-family: "Poppins", serif;
    }

    p {
        font-family: "Roboto", serif;
    }   

    a {
        text-decoration: none;
    }

    .Discovery {
        display: flex;
        padding: 40px 20px;
        align-items: stretch;
        gap: 20px;
        height: 100%;
        width: 97%;
        overflow: hidden;
    }

    .Left {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 8px;
        gap: 35px;
        width: 100%;
    }

    .Card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        border-radius: 16px;
        padding: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        width: 100%;
        max-width: 300px;
        text-align: center;
    }

    .Card:hover {
        transform: translateY(-5px); /* Lifts the element 5px up */
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
    }

    .Card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 15px;
    }

    /* Adjusted Explore Button */
    .Look {
        margin-top: 15px;
        border-radius: 999px;
        border: none;
        color: white;
        background-color: #0D9488;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.9rem;
        padding: 8px 25px; /* Wider button for better click-ability */
        transition: all 0.2s ease;
    }

    .Look:hover {
        background-color: #0F766E;
        transform: scale(1.05);
    }

    .Card button {
        border-radius: 999px;
        border: none;
        color: white;
        background-color: #0D9488;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.95rem;
        padding: 2px 10px;
        box-shadow: 0 4px 6px -1px rgba(15, 118, 110, 0.2);
        transition: all 0.2s ease;
    }

    .Card button:hover {
        background-color: #0D9488; /* Slightly lighter teal */
        transform: translateY(-2px); /* Lifts up slightly */
        box-shadow: 0 10px 15px -3px rgba(15, 118, 110, 0.3);
    }

    .Right {
        width: 60%;
    }

    .Map {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .Map iframe {
        height: 100%;
        width: 100%;
        border-radius: 16px;
        border: none;
    }
</style>