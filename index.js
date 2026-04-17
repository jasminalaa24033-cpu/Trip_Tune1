let darkBtn=document.getElementById('moon') 
darkBtn.addEventListener('click',(e)=>{
     e.preventDefault() 
     document.body.classList.toggle('dark') 
     setItem() }) 
     
     function setItem(){ 
        if(document.body.classList.contains('dark')){ localStorage.setItem('theme','dark') 
            darkBtn.classList.remove('bi-moon') 
            darkBtn.classList.add('bi-sun') } 
        else{ localStorage.setItem('theme','light') 
            darkBtn.classList.remove('bi-sun') 
            darkBtn.classList.add('bi-moon') } } 
            
        function get(){ 
            if(localStorage.getItem('theme')==='dark'){ 
                document.body.classList.add('dark') 
                darkBtn.classList.remove('bi-moon') 
                darkBtn.classList.add('bi-sun') } } 
get()

const hotelsData = {
  1: {
    name: "Tropitel Sahl Hasheesh Resort",
    description: "Tropitel Sahl Hasheesh Resort – 5★ beachfront resort in the Red Sea with stunning sea views. Features modern, air-conditioned rooms with balconies or terraces. Guests enjoy 3 outdoor pools, children’s aqua park, 5 restaurants (Italian, Mexican, Indian, Turkish, and Oriental), spa and fitness center, and a variety of activities including diving, sailing, biking, tennis, and more. Free parking and shuttle service available.",
    facilities: "Private beach, multiple pools, spa, restaurants, Wi-Fi, kids activities",
    price: "$100 - $180+ per night (varies with season)",
    rating: "4.7/5",
    images: ["pool of hotel 1.jpg","room hotel 1.jpg","bathroom2 hotel1.jpg","double bed hotel 1.jpg","dining room hotel 1.jpg"], // add real images
    mapLink: "https://www.google.com/travel/hotels/entity/ChkIn-SNtamhmq2-ARoML2cvMWhtM2cxX3M5EAE?g2lb="
  },
  2: {
    name: "Premier Le Reve Hotel & Spa",
    description: "Premier Le Reve Hotel & Spa – 5★ adults-only resort in Sahl Hasheesh Bay featuring freshwater and saltwater pools, a glass-domed sky pool, private beach, spa, and health club. Spacious rooms with furnished balconies, luxury fabrics, and pillow menu. Enjoy 5 restaurants (Italian, Chinese, Japanese, seafood, and international), Long Bar, and Vitamin Bar. Free parking and 22 km from Hurghada Airport. Couples love the location (9.3/10).",
    facilities: "Adults only, spa, pools, beachfront, gym, dining",
    price: "$150 - $280+ per night (varies with season)",
    rating: "4.8/5",
    images: ["فندق2.jpg","bofe hotel2.jpg","bath room hotel2.jpg","room hotel2.jpg"],
    mapLink: "https://maps.google.com/?q=Premier+Le+Reve+Hotel+%26+Spa+Sahl+Hasheesh"
  },
  3: {
    name: "Old Cataract Hotel Aswan",
    description: "Sofitel Legend Old Cataract Aswan – Luxury historic hotel on the Nile with spacious rooms offering breathtaking river views. Features elegant décor, pools, fine dining, and professional service. Perfect for a unique, memorable stay with a touch of history and comfort.",
    facilities: "Nile views, historic architecture, fine dining, spa, pool",
    price: "$220 - $380+ per night (varies with season)",
    rating: "4.6/5",
    images: ["view hotel3.jpg","garden hotel 3.jpg","bathroom hotel 3.jpg","balcony hotel 3.jpg"],
    mapLink: "https://maps.google.com/?q=Sofitel+Legend+Old+Cataract+Aswan"
  },
  4: {
    name: "Steigenberger Cecil Hotel Alexandria",
    description: "Steigenberger Cecil Hotel Alexandria – Elegant hotel in Alexandria’s business district, overlooking the bay and yacht club. Spacious rooms with French beds, chandeliers, and stylish décor. Enjoy historic restaurants, the Monty Bar, and impeccable service. Free WiFi available. Couples love the central location (9.5/10 for two-",
    facilities: "Sea views, historic style, dining, rooftop",
    price: "$120 - $240+ per night",
    rating: "4.5/5",
    images: ["Steigenberger Cecil Hotel.jpg","balcony hotel 4.jpg","out of hotel 4.jpg","resiption hotel4.jpg","room hotel 4.jpg"],
    mapLink: "https://maps.google.com/?q=Steigenberger+Cecil+Hotel+Alexandria"
  },
  5: {
    name: "Hilton Marsa Alam Nubian Resort",
    description: "Hilton Marsa Alam Nubian Resort – 5★ beachfront resort on Egypt’s Red Sea West Coast with 4 outdoor pools, gym, and rooms with Red Sea views. Elegant rooms with balconies, flat-screen TVs, and mosaic bathrooms. Enjoy diverse dining options, diving excursions in Abu Dabab Bay, kids’ club, and playground. 30 km from Marsa Alam International Airport. Couples love the location (9.3/10).",
    facilities: "Coral reef snorkeling, private beach, pools, gym, bars",
    price: "$180 - $350+ per night",
    rating: "4.7/5",
    images: ["Hilton Marsa Alam Nubian Resort.jpg","pool of hotel 5.jpg","room of hotel 5.jpg","bath of hotel 5.jpg"],
    mapLink: "https://maps.google.com/?q=Hilton+Marsa+Alam+Nubian+Resort+Marsa+Alam"
  },
  6: {
    name: "Mena House Hotel Giza",
    description: "Marriott Mena House, Cairo – Historic luxury hotel near the Great Pyramids of Giza, surrounded by lush gardens. Features spa, pool, fitness center, and elegant rooms with handcrafted furniture. Enjoy Italian cuisine, daily buffet breakfast, and cocktails with pyramid views. Concierge arranges camel and horse rides. 30 km from Cairo Airport. Couples love the location (9.6/10).",
    facilities: "Pyramid views, gardens, spa, dining",
    price: "$200 - $400+ per night",
    rating: "4.5/5",
    images: ["Mena House Hotel.jpg","pool of hotel 6.jpg","bath of hotel 6.jpg","room of hotel 6.jpg"],
    mapLink: "https://maps.google.com/?q=Mena+House+Hotel+Giza"
  }
};

const hotelButtons = document.querySelectorAll("[data-hotel]");

hotelButtons.forEach(btn => {
  btn.addEventListener("click", function () {

    const id = this.getAttribute("data-hotel");
    const hotel = hotelsData[id];

    // Title
    document.getElementById("hotelModalLabel2").innerText = hotel.name;

    // Info
    document.getElementById("hotelDescription2").innerText = hotel.description;
    document.getElementById("hotelFacilities2").innerText = hotel.facilities;
    document.getElementById("hotelPrice2").innerText = hotel.price;
    document.getElementById("hotelRating2").innerText = hotel.rating;

    // Images Carousel
    const carousel = document.getElementById("carouselImages2");
    carousel.innerHTML = "";

    hotel.images.forEach((imgSrc, index) => {
      const div = document.createElement("div");
      div.className = index === 0 ? "carousel-item active" : "carousel-item";

      div.innerHTML = `<img src="./images/${imgSrc}" class="d-block w-100" alt="${hotel.name} image">`;

      carousel.appendChild(div);
    });

    // Map
    document.getElementById("hotelMapLink2").href = hotel.mapLink;

  });
});

// index.js
const destinationsData = {
  1: { // Grand Egyptian Museum
    name: "Grand Egyptian Museum",
    description: "The Grand Egyptian Museum, located in Giza near the Pyramids, is the world's largest archaeological museum dedicated to a single civilization. It displays over 100,000 artifacts, including the complete Tutankhamun collection, showcasing Egypt's history from prehistoric times to the Roman era.",
    bestTime: "October to April",
    crowdedTime: "Winter holidays, weekends",
    ticket: "Entry: 200 EGP; Tutankhamun exhibition extra 100 EGP",
    kids: "Yes, educational and suitable for all ages",
    facilities: "Cafe, gift shop, parking, guided tours, wheelchair access",
    rating: "⭐ 4.8 / 5",
    tips: "Book tickets online, visit early morning to avoid crowds",
    warnings: "Summer can be very hot outside",
    value: "Learn about ancient Egyptian history and see the Tutankhamun treasures",
    map: "https://www.google.com/maps?q=Grand+Egyptian+Museum",
    video: "images/videoplayback.mp4",
    images: [
      "images/المتحف.jpg",
      "images/ال.jpeg",
      "images/المتحف3.webp",
      "images/المتحف 4.jpeg"
    ]
  },
  2: { // Khan El-Khalili
    name: "Khan El-Khalili",
    description: "Khan El-Khalili is a famous bazaar in Cairo, offering traditional Egyptian crafts, spices, souvenirs, and jewelry. It's a vibrant cultural experience and a must-visit for shopping and photography enthusiasts.",
    bestTime: "Morning and early afternoon",
    crowdedTime: "Evenings and weekends",
    ticket: "Free entry",
    kids: "Yes, but be careful in crowded areas",
    facilities: "Restaurants, cafes, souvenir shops, guided tours",
    rating: "⭐ 4.5 / 5",
    tips: "Bargain politely, watch your belongings, visit nearby Al-Hussein Mosque",
    warnings: "Crowded, especially during holidays",
    value: "Experience authentic Egyptian market culture and practice bargaining",
    map: "https://www.google.com/maps?q=Khan+El-Khalili+Cairo",
    video: "images/خان الخليلي مصر _ khan alkhalili egypt 🇪🇬.mp4",
    images: [
      "images/خان الخليلي 4.jpg",
      "images/خان الخليلي.jpg",
      "images/خان الخليلي 3.jpg",
      "images/خان الخليلي 2.jpg"
    ]
  },
  3: { // Fayoum Art Center Workshops
    name: "Fayoum Art Center Workshops",
    description: "Fayoum Art Center offers hands-on workshops in traditional Egyptian arts such as pottery, weaving, painting, and embroidery. Visitors can create their own art pieces while learning about Fayoum's heritage.",
    bestTime: "All year round, best in cooler months",
    crowdedTime: "School holidays",
    ticket: "100–200 EGP per workshop",
    kids: "Yes, workshops suitable for children with supervision",
    facilities: "Art supplies, café, exhibition gallery",
    rating: "⭐ 4.7 / 5",
    tips: "Book workshops in advance, wear comfortable clothes for painting",
    warnings: "Limited English-speaking instructors",
    value: "Learn traditional crafts and create your own souvenir",
    map: "https://www.google.com/maps?q=Fayoum+Art+Center",
    video: "images/0404.mp4",
    images: [
      "images/art center.jpg",
      "images/Fayoum Art Center Workshops 2.jpg",
      "images/Fayoum Art Center Workshops 3.jpg"
    ]
  },
  4: { // Egyptian Therapeutic Baths
    name: "Egyptian Therapeutic Baths",
    description: "Egyptian Therapeutic Baths, such as those in Siwa Oasis and Fayoum, are natural mineral-rich hot springs and mud baths. Visitors can enjoy healing waters, relax, and experience wellness rituals.",
    bestTime: "October to April",
    crowdedTime: "Weekends and holidays",
    ticket: "50–150 EGP per person",
    kids: "Yes, with adult supervision",
    facilities: "Spa, changing rooms, guided treatments, refreshments",
    rating: "⭐ 4.6 / 5",
    tips: "Bring swimwear, towels, and water shoes",
    warnings: "Not recommended for people with certain medical conditions",
    value: "Relax, rejuvenate, and learn about natural therapeutic traditions",
    map: "https://www.google.com/maps?q=Siwa+Oasis+Thermal+Baths",
    video: "images/الساحه العلاجيه.mp4",
    images: [
      "images/oases.jpg",
      "images/oases2.jpg",
      "images/sand.webp"
    ]
  }
};

// Function to open modal
function openModal(id) {
  const place = destinationsData[id];

  // Update modal content
  document.getElementById("hotelModalLabel").innerText = place.name;
  document.getElementById("hotelDescription").innerText = place.description;

  document.getElementById("bestTime").innerText = place.bestTime;
  document.getElementById("crowdedTime").innerText = place.crowdedTime;
  document.getElementById("ticket").innerText = place.ticket;
  document.getElementById("kids").innerText = place.kids;

  document.getElementById("hotelFacilities").innerText = place.facilities;
  document.getElementById("hotelRating").innerText = place.rating;

  document.getElementById("tips").innerText = place.tips;
  document.getElementById("warnings").innerText = place.warnings;
  document.getElementById("value").innerText = place.value;

  document.getElementById("hotelMapLink").href = place.map;
const videoEl = document.getElementById("placeVideo");
videoEl.querySelector("source").src = place.video; // مكان الفيديو المحلي
videoEl.load();
videoEl.play();
  // Update carousel images
  const carousel = document.getElementById("carouselImages");
  carousel.innerHTML = "";
  place.images.forEach((img, index) => {
    carousel.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${img}" class="d-block w-100" alt="${place.name} image ${index+1}">
      </div>
    `;
  });

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("hotelModal1"));
  modal.show();
}


