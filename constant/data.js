const products = [
     {
          image: "https://static.freshtohome.com/images/mobile/home/categories/new-ui/seafood.png",
          title: "Marine Fish, Freshwater Fish, Shellfish",
          tag: "Fish Seafood",
          category: "Fish_Seafood",
          mrp: "375.00",
          weight: "500g",
          price: 99,
          desc: "The mackerel is one of the most abused fish by the local market as its often shined in ammonia given its very soft & decay prone nature. Our mackerels in comparison will actually look more tame but the taste will be nothing like what you have eaten in the local market - most of our customers have written to us as they rediscover the mackerel from their childhood days when things were fresh - if you experience this, please let us know",
          lignThroughMrp: "599.00",
          storageInstructions: "40% cold",
          marketedBy: "FCI",
          cartQuantity: 0,
          flash_sale: false,
          combo_Packs: false,
          deal_of_the_day: false,
     },
     {
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/a/sardine_cleaned___2_1_1.jpeg",
          title: "Kerala Sardine / Naadan Mathi / Tarli",
          mrp: "375.00",
          weight: "500g",
          price: 169,
          desc: "The mackerel is one of the most abused fish by the local market as its often shined in ammonia given its very soft & decay prone nature. Our mackerels in comparison will actually look more tame but the taste will be nothing like what you have eaten in the local market - most of our customers have written to us as they rediscover the mackerel from their childhood days when things were fresh - if you experience this, please let us know",
          category: "Fish_Seafood",
          lignThroughMrp: "599.00",
          storageInstructions: "40% cold",
          marketedBy: "FCI",
          cartQuantity: 0,
          flash_sale: false,
     },
     {
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/p/i/pink_perch_whole_1_6.jpg",
          title: "Pink Perch / Kilimeen / Sankara Meen / Thread Finned Bream (Large) - Whole (440g to 520g Pack)",
          mrp: "236.00",
          weight: "500g",
          price: 99,
          desc: "The mackerel is one of the most abused fish by the local market as its often shined in ammonia given its very soft & decay prone nature. Our mackerels in comparison will actually look more tame but the taste will be nothing like what you have eaten in the local market - most of our customers have written to us as they rediscover the mackerel from their childhood days when things were fresh - if you experience this, please let us know",
          category: "Fish_Seafood",
          lignThroughMrp: "599.00",
          storageInstructions: "40% cold",
          marketedBy: "FCI",
          cartQuantity: 1,
          flash_sale: false,
     },
     {
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/r/e/red_snipper_curry_cut_large_1.jpg",
          title: "Red Snapper / Chempalli / Rane (Large) ",
          mrp: "375.00",
          weight: "500g",
          price: 344,
          desc: "The mackerel is one of the most abused fish by the local market as its often shined in ammonia given its very soft & decay prone nature. Our mackerels in comparison will actually look more tame but the taste will be nothing like what you have eaten in the local market - most of our customers have written to us as they rediscover the mackerel from their childhood days when things were fresh - if you experience this, please let us know",
          category: "Fish_Seafood",
          lignThroughMrp: "599.00",
          storageInstructions: "40% cold",
          marketedBy: "FCI",
          cartQuantity: 0,
          flash_sale: false,
     },
     {
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/p/i/pinkperch_4_4.jpg",
          title: " Trevally / Vatta/ Shitap / Parai (Large) - Steaks (480g to 500g Pack)",
          category: "Fish_Seafood",
          mrp: "149.00 ",
          lignThroughMrp: "398.00",
          desc: "This true swadeshi product has rose coloured meat and is nothing like the frozen, many months old, bleached white Vietnam Baasa available in retail stores. Has a lot of tasty & healthy fish oil and doesn't really require extra oil for cooking",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          cartQuantity: 0,
          flash_sale: false,
     },
     {
          title: "Premium Goat CurryCut + Premium Chicken Skinless CurryCut",
          category: "Mutton",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/p/r/premium_tender_goat_curry_cut.jpg",
          cartQuantity: 1,
          flash_sale: true,
     },
     {
          title: "Premium Goat - Shanks (3 piece / 380g to 420g Pack)",
          category: "Mutton",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/g/o/goat_legs_2.jpg",
          cartQuantity: 0,
          flash_sale: false,
     },
     {
          title: "Premium Goat Neck Steak (480 - 500g Pack)",
          category: "Mutton",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/g/o/goat_neck_steaks.jpg",
          cartQuantity: 0,
          flash_sale: true,
     },
     {
          title: "Premium Goat - Ribs Cut (480g to 500g pack)",
          category: "Mutton",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/u/mutton_rib.jpeg",
          cartQuantity: 0,
          flash_sale: false,
     },
     {
          title: " Premium Tender Goat - Curry Cut (480g to 500g Pack)",
          category: "Mutton",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/p/r/premium_tender_goat_curry_cut.jpg",
          cartQuantity: 2,
          flash_sale: false,
     },
     {
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_curry_cut_mutton_curry_cut_6_5.jpg",
          title: " Premium Tender Goat - Curry Cut (480g to 500g Pack)",
          category: "poultry",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          cartQuantity: 2,
          flash_sale: false,
     },
     {
          title: " Premium Tender Goat - Curry Cut (480g to 500g Pack)",
          category: "poultry",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/600x400/18ae109e34f485bd0b0c075abec96b2e/t/h/thighs_1.jpg",
          cartQuantity: 2,
          flash_sale: true,
     },
     {
          title: " Premium Tender Goat - Curry Cut (480g to 500g Pack)",
          category: "poultry",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_liver_1_2.jpg",
          cartQuantity: 2,
          flash_sale: true,
     },
     {
          title: " Premium Tender Goat - Curry Cut (480g to 500g Pack)",
          category: "poultry",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/400x267/18ae109e34f485bd0b0c075abec96b2e/p/r/premium_tender_goat_curry_cut.jpg",
          cartQuantity: 2,
          flash_sale: false,
     },
     {
          title: " Premium Tender Goat - Curry Cut (480g to 500g Pack)",
          category: "poultry",
          mrp: "375.00",
          lignThroughMrp: "599.00",
          desc: "They say we are choosy with our meats - you will believe it when we tell you that we only serve the very premium young male goat approximately 6-8 months old with meat so tender that it will melt in your mouth. We apologise in advance to the non-goat eaters who may find the description gory, but our meat is simply the finest in town!",
          storageInstructions:
               "Store under refrigeration at 4°C or below, in hygienic conditions",
          marketedBy:
               "Freshalicious Super Bazaar Pvt. Ltd. No. 42, Chikkagubbi Village, Bangalore East Taluk, Bangalore Urban, Karnataka - 560077",
          weight: "250g",
          image: "https://static.freshtohome.com/media/catalog/product/cache/93/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_skin.jpg",
          cartQuantity: 2,
          flash_sale: true,
     },
];

module.exports = { products };
