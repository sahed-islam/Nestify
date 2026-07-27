const sampleListings = [
  {
    title: "Beachfront Cottage in Cox's Bazar",
    description:
      "Wake up to the sound of waves at this cozy cottage steps away from the world's longest natural sea beach. Walking distance to Laboni Point and local seafood restaurants.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1665805397302-79f6419c2bdb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Cox's Bazar",
  },
  {
    title: "Hill View Resort in Bandarban",
    description:
      "Nestled among the hills of Bandarban, this resort offers sweeping views of the Chittagong Hill Tracts, cool mountain air, and easy access to Nilachal and Golden Temple.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1751769539073-d675c0ac98d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Bandarban",
  },
  {
    title: "Lakeside Cottage in Rangamati",
    description:
      "Relax by the tranquil Kaptai Lake in this peaceful cottage, perfect for boat rides to hanging bridges and quiet sunset views over the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Rangamati",
  },
  {
    title: "Tea Garden Bungalow in Sreemangal",
    description:
      "Stay amid rolling tea gardens in the tea capital of Bangladesh. Wake up to misty mornings, sip Seven-Color tea, and explore Lawachara nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1751769539073-d675c0ac98d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Sreemangal",
  },
  {
    title: "Riverside Forest Lodge in Sundarbans",
    description:
      "Stay by the world's largest mangrove forest on a riverside lodge, home to the Royal Bengal Tiger. Boat safaris into the forest depart nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Sundarbans",
  },
  {
    title: "Riverside Villa in Sylhet",
    description:
      "Surrounded by lush greenery and winding rivers, this villa is a comfortable base for exploring Sylhet's tea estates and natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Sylhet",
  },
  {
    title: "Riverside Cottage in Jaflong",
    description:
      "Wake up to the sound of the Piyain River with views of the hills of Meghalaya just across the border. A short walk to the stone-collecting river banks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558673810-9b0b6316d4f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Jaflong",
  },
  {
    title: "Serviced Apartment in Gulshan, Dhaka",
    description:
      "Stay in the heart of Dhaka's diplomatic zone with easy access to fine dining, shopping, and the city's business districts. Ideal for both leisure and work trips.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Dhaka",
  },
  {
    title: "Beach Resort in Saint Martin's Island",
    description:
      "Bangladesh's only coral island offers crystal-clear water and a laid-back island escape unlike anywhere else in the country. Best visited November through February.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1665805397302-79f6419c2bdb?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Saint Martin's Island",
  },
  {
    title: "Forest Lodge near Lawachara National Park",
    description:
      "Stay within earshot of hoolock gibbons at this eco-lodge bordering one of Bangladesh's last patches of rainforest, close to Sreemangal's tea trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1751769539073-d675c0ac98d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Lawachara, Moulvibazar",
  },
  {
    title: "Historic Riverside House in Old Dhaka",
    description:
      "Stay near the Buriganga River in a house that captures the character of Old Dhaka's centuries-old streets, close to Ahsan Manzil and Sadarghat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Old Dhaka",
  },
  {
    title: "Hilltop Cottage in Khagrachari",
    description:
      "A quiet hilltop escape with panoramic views over the valleys of the Chittagong Hill Tracts, near Alutila Cave and Risang Waterfall.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1751769539073-d675c0ac98d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Khagrachari",
  },
  {
    title: "Beach Bungalow in Kuakata",
    description:
      "Watch both sunrise and sunset over the sea from this bungalow on Bangladesh's 'Daughter of the Sea' beach, a quieter alternative to Cox's Bazar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1665805397302-79f6419c2bdb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Kuakata",
  },
  {
    title: "Boutique Hotel in Chittagong",
    description:
      "A comfortable stay in Bangladesh's major port city, close to the hills, harbor, Patenga Beach, and colonial-era architecture of the old town.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Chittagong",
  },
  {
    title: "Riverside Cottage in Barisal",
    description:
      "Experience the 'Venice of Bengal' from a cottage along the Kirtankhola River, surrounded by canals, floating guava markets, and rice paddies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Barisal",
  },
  {
    title: "Farmhouse Stay in Mymensingh",
    description:
      "A rustic farmhouse experience surrounded by paddy fields near the Brahmaputra river basin, a peaceful break from city life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1751769539073-d675c0ac98d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Mymensingh",
  },
  {
    title: "Heritage House in Sonargaon",
    description:
      "Stay near the ancient capital of Bengal, surrounded by centuries-old architecture, the Panam City ruins, and folk art museums.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657984906170-70878d43ef0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Sonargaon",
  },
  {
    title: "Panoramic Suite in Nilgiri, Bandarban",
    description:
      "Sleep above the clouds at one of Bangladesh's highest-altitude resorts, with sweeping views of the hill ranges — a favorite for sunrise chasers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1751769539073-d675c0ac98d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Nilgiri, Bandarban",
  },
  {
    title: "Riverside Camp in Teknaf",
    description:
      "Stay at Bangladesh's southernmost tip, where the hills meet the sea near the Naf River, close to the ferry point for Saint Martin's Island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1665805397302-79f6419c2bdb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Teknaf",
  },
  {
    title: "Eco Resort in Bisnakandi",
    description:
      "Surrounded by crystal-clear streams and views of the Meghalaya hills, this eco-resort near Sylhet is a monsoon-season favorite for its waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558673810-9b0b6316d4f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Bisnakandi, Sylhet",
  },
];

module.exports = { data: sampleListings };