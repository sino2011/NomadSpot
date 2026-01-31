<script setup>
    import Shop from "@/assets/images/CozyShop.png"
    import { ref } from "vue";

    const CurrentMap = ref("https://maps.app.goo.gl/6eko6LHaHgkqWt1x8")
    const hasClicked = ref(false)
    const Placeholder_img = ref("https://picsum.photos/200/300")

    function OpenMap(Cafe_num) {
        hasClicked.value = true
        console.log("Updating map to: ", Cafe_num);
        CurrentMap.value = Cafe_num
    }
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <div class="Hero">
        <div class="Search">
            <input class="SearchBar" type="Text" placeholder="Enter city or zip">
            <button class="SearchBtn">Search</button>
            <button class="Near">Near Me!</button>
        </div>
        <img v-bind:src="Shop">
    </div>

    <div class="Discovery">
        <div class="Left">
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Spirit Cafe</h3>
                <p>Description</p>
                <button id="Look" @click="OpenMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.64607542947!2d29.90194037431639!3d31.21156450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49aa865b23f%3A0x42ca9fdb8c68551b!2sSpirit!5e0!3m2!1sen!2seg!4v1769460945682!5m2!1sen!2seg')" class="Look">Explore !</button>
            </div>
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Blanco Cafe</h3>
                <p>Description</p>
                <button @click="OpenMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.85426970888!2d29.9012647743164!3d31.210843299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c500392fff15%3A0x7001d6d47edd6354!2sBlanco%20cafe%20%26%20PlayStation!5e0!3m2!1sen!2seg!4v1769462222784!5m2!1sen!2seg')" class="Look">Explore !</button>
            </div>
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Owl Cafe</h3>
                <p>Description</p>
                <button @click="OpenMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.85426970888!2d29.9012647743164!3d31.210843299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c57ae9f402eb%3A0x64abd16241f399cf!2sOWL%20Coffee%20Club%20(%20Smouha%20Branch%20)!5e0!3m2!1sen!2seg!4v1769462350887!5m2!1sen!2seg')" class="Look">Explore !</button>
            </div>
            <div class="Card">
                <img v-bind:src="Placeholder_img" alt="">
                <h3>Joy Corner Cafe</h3>
                <p>Description</p>
                <button @click="OpenMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27298.85426970888!2d29.9012647743164!3d31.210843299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5275a13ddf3%3A0x829a6d875c47107f!2sJoy%20Corner%20Coffee!5e0!3m2!1sen!2seg!4v1769462396576!5m2!1sen!2seg')" class="Look">Explore !</button>
            </div>
        </div>

        <div class="Right">
            <div class="Map">
                <iframe
                    v-if="hasClicked"
                    :src="CurrentMap" frameborder="0">
                </iframe>
                <iframe
                    v-else
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14452.373991460661!2d29.918537162344933!3d31.213287301686588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scafes!5e0!3m2!1sen!2seg!4v1769459559904!5m2!1sen!2seg"   
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<style>
  /* This overrides the Login settings only when this component is loaded */
  html, body {
    overflow: auto !important; 
    height: auto !important;
    margin: 0;
  }
</style>

<style scoped>
    h3 {
        font-family: "Poppins", serif;
    }

    p {
        font-family: "Roboto", serif;
    }   

    .Hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* Gap creates consistent space between Search and Image */
        gap: 40px; 
        
        /* Fixed width to be responsive */
        margin: 20px;
        height: 85vh;
        
        background: rgba(192, 168, 168, 0.2);
        border-radius: 24px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 40px;
        overflow: hidden;
    }

    /* Makes the hero image fit nicely without over-stretching */
    .Hero img {
        max-width: 100%;
        max-height: 60%;
        object-fit: contain;
        border-radius: 12px;
    }

    .Search {
        display: flex;
        flex-direction: row;
        gap: 12px; /* Consistent spacing between input and buttons */
        width: 100%;
        justify-content: center;
    }

    .SearchBar {
        border-radius: 999px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 12px 24px; /* More room for text */
        width: 300px;
        outline: none;
        transition: border 0.2s;
    }

    .SearchBar:focus {
        border: 1px solid #0F766E;
    }

    /* Combined Search and Near button styles for consistency */
    .SearchBtn, .Near {
        color: white;
        background-color: #0F766E;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.95rem;
        padding: 10px 24px; /* Balanced padding */
        box-shadow: 0 4px 6px -1px rgba(15, 118, 110, 0.2);
        transition: all 0.2s ease;
        white-space: nowrap;
    }

    .SearchBtn:hover, .Near:hover {
        background-color: #0D9488;
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(15, 118, 110, 0.3);
    }

    /* --- Discovery Section --- */

    .Discovery {
        display: flex;
        padding: 40px 20px;
        align-items: stretch; /* Change from stretch to flex-start */
        gap: 40px;
        max-width: 1200px; /* Optional: keeps it from getting too wide */
        margin: 0 auto;
    }

    .Right {
        width: 60%;
        /* position: sticky; Optional: makes the map stay in view while scrolling cards */
        top: 20px;
    }

    .Map {
        width: 100%;
        /* height: 600px; CRITICAL: The map MUST have a height  */
        background: #e2e8f0; /* Placeholder color while loading */
        border-radius: 16px;
        overflow: hidden;
    }

    .Left {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 40%;
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
        height: 180px; /* Ensure this is set */
        object-fit: cover;
        border-radius: 12px;
        background-color: #f1f5f9; /* Shows a grey box if image fails to load */
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Map {
        width: 100%;
        height: 70vh;
        overflow: hidden;
    }

    .Map iframe {
        height: 100%;
        width: 100%;
        border-radius: 16px;
        border: none;
    }
</style>
