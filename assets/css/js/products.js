// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initTouchSwipe();
  shuffleAllCards();
  initAutoSlider();
  initSavedPins();
});


// ══════════════════════════════════════════════════════════════
//  PRODUCT DATA
// ══════════════════════════════════════════════════════════════

const PRODUCTS = {
  shopee_best_1: [
    { title: "Stainless Stove Rack Keeps Small Pots Stable", alt: "Stainless Stove Rack", href: "https://invl.me/clngowe", img: "20bestimages/s1.png" },
    { title: "Waterproof School Backpack Fits Laptop & Books", alt: "Waterproof School Backpack", href: "https://invl.me/clngowg", img: "20bestimages/s2.png" },
    { title: "10pcs Gel Pens Write Smooth & Dry Fast", alt: "Gel Pens", href: "https://invl.me/clngowi", img: "20bestimages/s3.png" },
    { title: "Cotton Mid-Cut Socks Keep Feet Fresh All Day", alt: "Cotton Mid-Cut Socks", href: "https://invl.me/clngowj", img: "20bestimages/s4.png" },
    { title: "Mini USB Humidifier Adds Calm to Any Space", alt: "Mini USB Humidifier", href: "https://invl.me/clngowo", img: "20bestimages/s5.png" },
    { title: "7-in-1 Stationery Set Has 7 Tools in One Pack", alt: "7-in-1 Stationery Set", href: "https://invl.me/clngowq", img: "20bestimages/s6.png" },
    { title: "10 Pairs Cotton Socks Keep Feet Cool & Comfy", alt: "10 Pairs Cotton Socks", href: "https://invl.me/clngowr", img: "20bestimages/s7.png" },
    { title: "A5 Spiral Notebook Set Smooth Writing & Thick Pages", alt: "A5 Spiral Notebook Set", href: "https://invl.me/clngowt", img: "20bestimages/s8.png" },
    { title: "VeryMall Crew Socks 5–10 Pairs for Daily Comfort", alt: "VeryMall Crew Socks", href: "https://invl.me/clngowu", img: "20bestimages/s9.png" },
    { title: "EVO GT-PRO Helmet with Dual Visor Protection", alt: "EVO GT-PRO Helmet", href: "https://invl.me/clngowv", img: "20bestimages/s10.png" }
  ],
  shopee_best_2: [
    { title: "Korean Nylon Backpack Is Waterproof & Stylish", alt: "Korean Nylon Backpack", href: "https://invl.me/clngoww", img: "20bestimages/s11.png" },
    { title: "MPMG Oversized Tees Buy 1 Get 3 Deal", alt: "MPMG Oversized Tees", href: "https://invl.me/clngowy", img: "20bestimages/s12.png" },
    { title: "Korean Running Shoes Feel Light & Comfortable", alt: "Korean Running Shoes", href: "https://invl.me/clngowz", img: "20bestimages/s13.png" },
    { title: "Korean Sneakers Are Breathable & Comfortable", alt: "Korean Sneakers", href: "https://invl.me/clngox0", img: "20bestimages/s14.png" },
    { title: "E88 Pro Drone Has 4K Camera & 150m Range", alt: "E88 Pro Drone", href: "https://invl.me/clngox2", img: "20bestimages/s15.png" },
    { title: "Light Sole Sports Shoes Feel Comfortable All Day", alt: "Light Sole Sports Shoes", href: "https://invl.me/clngox3", img: "20bestimages/s16.png" },
    { title: "Naviforce NF9117 Watch Looks Premium & Sporty", alt: "Naviforce NF9117 Watch", href: "https://invl.me/clngox4", img: "20bestimages/s17.png" },
    { title: "Casual Leather Shoes Match Any Everyday Outfit", alt: "Casual Leather Shoes", href: "https://invl.me/clngox5", img: "20bestimages/s18.png" },
    { title: "Lovito Striped Jumpsuit Is Perfect for Warm Days", alt: "Lovito Striped Jumpsuit", href: "https://invl.me/clngox7", img: "20bestimages/s19.png" },
    { title: "Retro Striped Tee Gives Effortless Streetwear Style", alt: "Retro Striped Tee", href: "https://invl.me/clngox9", img: "20bestimages/s20.png" }
  ],
  shopee_fashion: [
    { title: "Lovito Boho Dress Adds Effortless Summer Charm", alt: "Lovito Boho Dress", href: "https://invl.me/clngv3j", img: "Shopee/Fashion/sfash1.webp" },
    { title: "3pcs Ladies Boxer Shorts Feel Soft & Comfy", alt: "3pcs Ladies Boxer Shorts", href: "https://invl.me/clngv3k", img: "Shopee/Fashion/sfash2.webp" },
    { title: "Lovito Resort Dress Perfect for Summer Getaways", alt: "Lovito Resort Dress", href: "https://invl.me/clngv3l", img: "Shopee/Fashion/sfash3.webp" },
    { title: "Lovito Belted Dress Has Pockets & Easy Style", alt: "Lovito Belted Dress", href: "https://invl.me/clngv3n", img: "Shopee/Fashion/sfash4.webp" },
    { title: "Lovito Mesh Dress Gives Elegant Feminine Style", alt: "Lovito Mesh Dress", href: "https://invl.me/clngv3o", img: "Shopee/Fashion/sfash5.webp", imgClass: "pin-portrait" },
    { title: "Lovito Elegant Cardigan Matches Every Outfit Easily", alt: "Lovito Elegant Cardigan", href: "https://invl.me/clngv3p", img: "Shopee/Fashion/sfash6.webp" },
    { title: "Lovito Button Cardigan Adds Effortless Casual Style", alt: "Lovito Button Cardigan", href: "https://invl.me/clngv3r", img: "Shopee/Fashion/sfash7.webp" },
    { title: "INSPI Textured Cardigan Gives Effortless Clean Style", alt: "INSPI Textured Cardigan", href: "https://invl.me/clngv3s", img: "Shopee/Fashion/sfash8.webp" },
    { title: "Harmony Maxi Dress Gives Elegant Flowy Style", alt: "Harmony Maxi Dress", href: "https://invl.me/clngv3v", img: "Shopee/Fashion/sfash9.webp" },
    { title: "YISO Pajama Set Feels Soft & Extra Comfy", alt: "YISO Pajama Set", href: "https://invl.me/clngv3w", img: "Shopee/Fashion/sfash10.webp" }
  ],
  shopee_electronics: [
    { title: "Orashare Mini Fan Fits Anywhere & Cools Fast", alt: "Orashare Mini Fan", href: "https://invl.me/clngv3y", img: "Shopee/Electronics/selec1.webp" },
    { title: "GOOJODOQ Turbo Mini Fan Has Strong Cooling Power", alt: "GOOJODOQ Turbo Mini Fan", href: "https://invl.me/clngv3z", img: "Shopee/Electronics/selec2.webp" },
    { title: "TECNO SPARK GO 3 Has 120Hz Display & 5000mAh Battery", alt: "TECNO SPARK GO 3", href: "https://invl.me/clngv40", img: "Shopee/Electronics/selec3.webp" },
    { title: "Orashare Capsule Powerbank Fits in Your Pocket", alt: "Orashare Capsule Powerbank", href: "https://invl.me/clngv42", img: "Shopee/Electronics/selec4.webp" },
    { title: "Cordless Rechargeable Fan Runs for Hours Anywhere", alt: "Cordless Rechargeable Fan", href: "https://invl.me/clngv43", img: "Shopee/Electronics/selec5.webp", imgClass: "pin-portrait" },
    { title: "HUAWEI Band 11 Makes Fitness Tracking Effortless", alt: "HUAWEI Band 11", href: "https://invl.me/clngv44", img: "Shopee/Electronics/selec6.webp" },
    { title: "Samsung Galaxy A25/A26 Delivers Smooth Everyday Performance", alt: "Samsung Galaxy A25/A26", href: "https://invl.me/clngv45", img: "Shopee/Electronics/selec7.webp" },
    { title: "Xiaomi Mi Pad Handles Gaming, Streaming & Multitasking", alt: "Xiaomi Mi Pad", href: "https://invl.me/clngv46", img: "Shopee/Electronics/selec8.webp" },
    { title: "Galaxy Tab S9 Is Built for Gaming & Productivity", alt: "Galaxy Tab S9", href: "https://invl.me/clngv48", img: "Shopee/Electronics/selec9.webp" },
    { title: "EMEET C60E Webcam Delivers Crisp 4K Video Quality", alt: "EMEET C60E Webcam", href: "https://invl.me/clngv49", img: "Shopee/Electronics/selec10.webp" }
  ],
  shopee_health: [
    { title: "Originote Ceramella Sunscreen SPF50 Is a Bestseller", alt: "Originote Ceramella Sunscreen SPF50", href: "https://invl.me/clngv4i", img: "Shopee/Health/sheal1.webp" },
    { title: "SKINEVER Sunscreen Lotion Is Buy 1 Take 1", alt: "SKINEVER Sunscreen Lotion", href: "https://invl.me/clngv4j", img: "Shopee/Health/sheal2.webp" },
    { title: "Luxe Organix Maxshield Sunscreen Protects Face & Body", alt: "Luxe Organix Maxshield Sunscreen", href: "https://invl.me/clngv4k", img: "Shopee/Health/sheal3.webp" },
    { title: "MinoxiPlus 5% Helps Support Hair Growth Routine", alt: "MinoxiPlus 5%", href: "https://invl.me/clngv4m", img: "Shopee/Health/sheal4.webp" },
    { title: "Kérastase Genesis Serum Helps Reduce Hair Fall", alt: "Kérastase Genesis Serum", href: "https://invl.me/clngv4n", img: "Shopee/Health/sheal5.webp" },
    { title: "Black Sesame Hair Serum Supports Healthier Hair Growth", alt: "Black Sesame Hair Serum", href: "https://invl.me/clngv4o", img: "Shopee/Health/sheal6.webp" },
    { title: "Bodywise Rosemary Serum Supports Stronger-Looking Hair", alt: "Bodywise Rosemary Serum", href: "https://invl.me/clngv4r", img: "Shopee/Health/sheal7.webp" },
    { title: "Rogaine 5% Foam Supports Hair Regrowth Routine", alt: "Rogaine 5% Foam", href: "https://invl.me/clngv4x", img: "Shopee/Health/sheal8.webp" },
    { title: "Dermorepubliq Niacinamide Serum Helps Brighten Skin", alt: "Dermorepubliq Niacinamide Serum", href: "https://invl.me/clngv4y", img: "Shopee/Health/sheal9.webp" },
    { title: "Dermorepubliq Glycolic Toner Helps Smooth & Refresh Skin", alt: "Dermorepubliq Glycolic Toner", href: "https://invl.me/clngv4z", img: "Shopee/Health/sheal10.webp" }
  ],
  shopee_groceries: [
    { title: "DUJOSOO Black Coffee Has High Protein & Zero Fat", alt: "DUJOSOO Black Coffee", href: "https://invl.me/clngv5l", img: "Shopee/Groceries/scons1.webp" },
    { title: "Mood Food Peanut Butter Packs High Protein Energy", alt: "Mood Food Peanut Butter", href: "https://invl.me/clngv5m", img: "Shopee/Groceries/scons2.webp" },
    { title: "ON Gold Standard Whey Is a Top Protein Pick", alt: "ON Gold Standard Whey", href: "https://invl.me/clngv5n", img: "Shopee/Groceries/scons3.webp" },
    { title: "Blitz Protein Bars Make High Protein Snacking Easy", alt: "Blitz Protein Bars", href: "https://invl.me/clngv5o", img: "Shopee/Groceries/scons4.webp" },
    { title: "Anchor Protein Plus Milk Is Buy 2 Take 1", alt: "Anchor Protein Plus Milk", href: "https://invl.me/clngv5q", img: "Shopee/Groceries/scons5.webp" },
    { title: "Pure Form Creatine Helps Support Strength & Muscle Growth", alt: "Pure Form Creatine", href: "https://invl.me/clngv5r", img: "Shopee/Groceries/scons6.webp" },
    { title: "ON Creatine Powder Supports Strength & Workout Performance", alt: "ON Creatine Powder", href: "https://invl.me/clngv5s", img: "Shopee/Groceries/scons7.webp" },
    { title: "ATC Fish Oil Supports Everyday Wellness & Nutrition", alt: "ATC Fish Oil", href: "https://invl.me/clngv5t", img: "Shopee/Groceries/scons8.webp" },
    { title: "VTEAY Omega 3 Combines Fish Oil & Collagen Support", alt: "VTEAY Omega 3", href: "https://invl.me/clngv5u", img: "Shopee/Groceries/scons9.webp" },
    { title: "Herbalife F1 Shake Makes High Protein Nutrition Easy", alt: "Herbalife F1 Shake", href: "https://invl.me/clngv5v", img: "Shopee/Groceries/scons10.webp" }
  ],
  shein_best_1: [
    { title: "Shimmery Knit Shawl Adds Effortless Summer Style", alt: "Shimmery Knit Shawl", href: "https://onelink.shein.com/6/5oro8c2supf6", img: "20bestimages/sh1.jpg" },
    { title: "Off-Shoulder Knit Mini Dress Turns Heads Instantly", alt: "Off-Shoulder Knit Mini Dress", href: "https://onelink.shein.com/6/5oroptho5jxz", img: "20bestimages/sh2.jpg" },
    { title: "Minimalist Knit Cardigan Perfect for Everyday Layers", alt: "Minimalist Knit Cardigan", href: "https://onelink.shein.com/6/5orp5tmp1kqw", img: "20bestimages/sh3.jpg" },
    { title: "V-Neck Knit Top Gives Effortless Elegant Style", alt: "V-Neck Knit Top", href: "https://onelink.shein.com/6/5orpbcwtfthv", img: "20bestimages/sh4.jpg" },
    { title: "Sequin Knit Cover Up Elevates Beach Outfits", alt: "Sequin Knit Cover Up", href: "https://onelink.shein.com/6/5orpf13vlg63", img: "20bestimages/sh5.jpg" },
    { title: "Backless Halter Dress Made for Summer Vacations", alt: "Backless Halter Dress", href: "https://onelink.shein.com/6/5orpjyoo4fmf", img: "20bestimages/sh6.jpg" },
    { title: "Hollow-Out Knit Tee Elevates Everyday Outfits", alt: "Hollow-Out Knit Tee", href: "https://onelink.shein.com/6/5orpnouruz45", img: "20bestimages/sh7.jpg" },
    { title: "Retro Knit Polo Shirt Gives Effortless Summer Style", alt: "Retro Knit Polo Shirt", href: "https://onelink.shein.com/6/5orpriyxnaz0", img: "20bestimages/sh8.jpg" },
    { title: "Lace Patchwork Bodysuit Gives Bold Y2K Vibes", alt: "Lace Patchwork Bodysuit", href: "https://onelink.shein.com/6/5orpudkjiux0", img: "20bestimages/sh9.jpg" },
    { title: "V-Neck Printed Dress Flatters for Summer Days", alt: "V-Neck Printed Dress", href: "https://onelink.shein.com/6/5orpyxc3y82", img: "20bestimages/sh10.jpg" }
  ],
  shein_best_2: [
    { title: "Striped Colorblock Shirt Perfect for Summer Fits", alt: "Striped Colorblock Shirt", href: "https://onelink.shein.com/6/5otjx38x09cs", img: "20bestimages/sh11.jpg" },
    { title: "Striped Button Shirt Gives Clean Old Money Style", alt: "Striped Button Shirt", href: "https://onelink.shein.com/6/5otk1qyj6voy", img: "20bestimages/sh12.jpg" },
    { title: "Textured Knit Polo Gives Effortless Old Money Style", alt: "Textured Knit Polo", href: "https://onelink.shein.com/6/5otk64t0km2k", img: "20bestimages/sh13.jpg" },
    { title: "Elegant White Dress Shirt for Office & Formal Wear", alt: "Elegant White Dress Shirt", href: "https://onelink.shein.com/6/5otkauhocu8f", img: "20bestimages/sh14.jpg" },
    { title: "Colorblock Polo Shirt Gives Classic Summer Style", alt: "Colorblock Polo Shirt", href: "https://onelink.shein.com/6/5otkdd932iah", img: "20bestimages/sh15.jpg" },
    { title: "Textured Knit Polo Gives Effortless Vacation Style", alt: "Textured Knit Polo", href: "https://onelink.shein.com/6/5otkghpuuzbi", img: "20bestimages/sh16.jpg" },
    { title: "Vintage Bowling Shirt Gives Relaxed Summer Style", alt: "Vintage Bowling Shirt", href: "https://onelink.shein.com/6/5otkphaxfhr9", img: "20bestimages/sh17.jpg" },
    { title: "Striped Polo & Shorts Set Makes Summer Easy", alt: "Striped Polo & Shorts", href: "https://onelink.shein.com/6/5otkt3iyrlln", img: "20bestimages/sh18.jpg" },
    { title: "Acid Wash Tee Gives Effortless Streetwear Style", alt: "Acid Wash Tee", href: "https://onelink.shein.com/6/5otkwvo3k37v", img: "20bestimages/sh19.jpg" },
    { title: "Japanese Crane Tee Gives Clean Minimalist Style", alt: "Japanese Crane Tee", href: "https://onelink.shein.com/6/5otl214zr787", img: "20bestimages/sh20.jpg" }
  ],
  shein_mens: [
    { title: "Textured Polo Shirt Gives Clean Minimalist Style", alt: "Textured Polo Shirt", href: "https://onelink.shein.com/7/5p9fza9557vu", img: "Shein/MensFashion/shmen1.jpg" },
    { title: "Mountain Print Tee Gives Clean Outdoor Style", alt: "Mountain Print Tee", href: "https://onelink.shein.com/7/5p9g8jpd6hoz", img: "Shein/MensFashion/shmen2.jpg" },
    { title: "SWAVVY Cargo Shirt Gives Modern Streetwear Style", alt: "SWAVVY Cargo Shirt", href: "https://onelink.shein.com/7/5p9gfo7dsx7x", img: "Shein/MensFashion/shmen3.jpg" },
    { title: "Contrast Trim Polo Gives Effortless Old Money Style", alt: "Contrast Trim Polo", href: "https://onelink.shein.com/7/5p9grgf0x7hh", img: "Shein/MensFashion/shmen4.jpg" },
    { title: "Manfinity Overcoat Gives Effortless Old Money Style", alt: "Manfinity Overcoat", href: "https://onelink.shein.com/7/5p9gzqcok5e3", img: "Shein/MensFashion/shmen5.jpg" }
  ],
  shein_womens: [
    { title: "SHEIN LUNE Cardigan Adds Effortless Cozy Style", alt: "SHEIN LUNE Cardigan", href: "https://onelink.shein.com/7/5p9h9dm4unt6", img: "Shein/WomensFashion/shwmen1.jpg" },
    { title: "Rhinestone Jeans Add Glam to Casual Outfits", alt: "Rhinestone Jeans", href: "https://onelink.shein.com/7/5p9hiszg83m7", img: "Shein/WomensFashion/shwmen2.jpg" },
    { title: "Y2K Cropped Tee Gives Effortless Streetwear Style", alt: "Y2K Cropped Tee", href: "https://onelink.shein.com/7/5p9hrwikxwrg", img: "Shein/WomensFashion/shwmen3.jpg" },
    { title: "Black Fitted Shorts Match Every Summer Outfit", alt: "Black Fitted Shorts", href: "https://onelink.shein.com/7/5p9i6p8xcq3w", img: "Shein/WomensFashion/shwmen4.jpg" },
    { title: "Off Shoulder Knit Cardigan Gives Soft Girl Vibes", alt: "Off Shoulder Knit Cardigan", href: "https://onelink.shein.com/7/5p9ifkvxkwtq", img: "Shein/WomensFashion/shwmen5.jpg" }
  ],
  shein_decor: [
    { title: 'Funny "My World" Rug Adds Personality to Any Room', alt: "Funny My World Rug", href: "https://onelink.shein.com/7/5p9iv39ogfto", img: "Shein/Decor/shdec1.jpg" },
    { title: "Tufted Duvet Cover Set Gives Luxury Hotel Vibes", alt: "Tufted Duvet Cover Set", href: "https://onelink.shein.com/7/5p9j5s0pfub6", img: "Shein/Decor/shdec2.jpg" },
    { title: "Ruffled Bed Skirt Makes Bedrooms Look More Elegant", alt: "Ruffled Bed Skirt", href: "https://onelink.shein.com/7/5p9je5wfo8ic", img: "Shein/Decor/shdec3.jpg" },
    { title: "Plush Thick Carpet Makes Any Room Feel Cozier", alt: "Plush Thick Carpet", href: "https://onelink.shein.com/7/5p9jo3111gqr", img: "Shein/Decor/shdec4.jpg" },
    { title: "Geometric Pillow Covers Instantly Elevate Your Space", alt: "Geometric Pillow Covers", href: "https://onelink.shein.com/7/5p9jyfxvcjd5", img: "Shein/Decor/shdec5.jpg" }
  ],
  shein_accessories: [
    { title: "Vintage Pearl Earrings Add Elegant French Girl Style", alt: "Vintage Pearl Earrings", href: "https://onelink.shein.com/7/5p9kb3pzvnkq", img: "Shein/Accessories/shacc1.jpg" },
    { title: "Vintage Sunflower Ring Adds a Soft Feminine Touch", alt: "Vintage Sunflower Ring", href: "https://onelink.shein.com/7/5p9kon2n6rk0", img: "Shein/Accessories/shacc2.jpg" },
    { title: "Luxury CZ Earrings Add Instant Glam to Any Outfit", alt: "Luxury CZ Earrings", href: "https://onelink.shein.com/7/5p9kvxhr1ukt", img: "Shein/Accessories/shacc3.jpg" },
    { title: "Minimalist Pendant Necklace Completes Any Casual Look", alt: "Minimalist Pendant Necklace", href: "https://onelink.shein.com/7/5p9l4l8muip8", img: "Shein/Accessories/shacc4.jpg" },
    { title: "800pcs Jewelry Kit Makes DIY Accessories More Fun", alt: "800pcs Jewelry Kit", href: "https://onelink.shein.com/7/5p9lc3jve90i", img: "Shein/Accessories/shacc5.jpg" }
  ],
  amazon_best_1: [
    { title: "Why Everyone Is Buying This Owala Water Bottle", alt: "Owala Water Bottle", href: "https://amzn.to/48FxKfk", img: "20bestimages/1.jpg" },
    { title: "This Stanley Tumbler Has 91,000+ Reviews - And It's 38% Off Right Now", alt: "Stanley Tumbler", href: "https://amzn.to/4ul4JOf", img: "20bestimages/2.jpg" },
    { title: "Etekcity Kitchen Scale Is a Meal Prep Bestseller", alt: "Etekcity Kitchen Scale", href: "https://amzn.to/4waDUxW", img: "20bestimages/3.jpg" },
    { title: "HydroJug Traveler Tumbler Is 32oz On-the-Go Must", alt: "HydroJug Traveler Tumbler", href: "https://amzn.to/4d2fbDv", img: "20bestimages/4.jpg" },
    { title: "Bella Slim Toaster Fits Anywhere - 6 Shade Settings", alt: "Bella Slim Toaster", href: "https://amzn.to/4urOS0m", img: "20bestimages/5.jpg" },
    { title: "2-in-1 Olive Oil Sprayer Controls Every Pour", alt: "Olive Oil Sprayer", href: "https://amzn.to/4d2Cehd", img: "20bestimages/6.jpg" },
    { title: "Instant Read Meat Thermometer in 2 Seconds", alt: "Meat Thermometer", href: "https://amzn.to/4w4X9Jz", img: "20bestimages/7.jpg" },
    { title: "Hanes Boxer Briefs Keep You Cool All Day", alt: "Hanes Boxer Briefs", href: "https://amzn.to/3P05TzS", img: "20bestimages/8.jpg" },
    { title: "OEAK Deep V Wireless Bra Shapes & Lifts Comfortably", alt: "OEAK Deep V Wireless Bra", href: "https://amzn.to/3P6mtOz", img: "20bestimages/9.jpg" },
    { title: "Crocs Classic Clogs Everyone Loves for Comfort", alt: "Crocs Classic Clogs", href: "https://amzn.to/4nb7385", img: "20bestimages/10.jpg" }
  ],
  amazon_best_2: [
    { title: "OFEEFAN V Neck Blouse Is a Casual Style Favorite", alt: "OFEEFAN V Neck Blouse", href: "https://amzn.to/49cOrik", img: "20bestimages/11.jpg" },
    { title: "Hanes Undershirts Stay Tucked All Day Comfort", alt: "Hanes Undershirts", href: "https://amzn.to/4cWiX0U", img: "20bestimages/12.jpg" },
    { title: "LetsJoli Wireless Bra Offers Full Support & Comfort", alt: "LetsJoli Wireless Bra", href: "https://amzn.to/4d6ZNpu", img: "20bestimages/13.jpg" },
    { title: "COCOMARTS Jelly Bra Feels Like Wearing Nothing", alt: "COCOMARTS Jelly Bra", href: "https://amzn.to/4tgG0d0", img: "20bestimages/14.jpg" },
    { title: "OEAK Jelly Bra Gives Full Support Without Wires", alt: "OEAK Jelly Bra", href: "https://amzn.to/4tOkk9d", img: "20bestimages/15.jpg" },
    { title: "Owala SmoothSip Tumbler Keeps Drinks Hot 6 Hrs", alt: "Owala SmoothSip Tumbler", href: "https://amzn.to/3QPXbVo", img: "20bestimages/16.jpg" },
    { title: "Fullstar Pro Chopper Dices Veggies in 30 Sec", alt: "Fullstar Pro Chopper", href: "https://amzn.to/3RlLIwR", img: "20bestimages/17.jpg" },
    { title: "Socomi Gauze Table Runner Elevates Any Table", alt: "Socomi Gauze Table Runner", href: "https://amzn.to/4tRA6Ad", img: "20bestimages/18.jpg" },
    { title: "Old Money V Neck Tee Is a Go-To for Casual Outfits", alt: "Old Money V Neck Tee", href: "https://amzn.to/4newOVj", img: "20bestimages/19.jpg" },
    { title: "WIHOLL Mock Neck Blouse Elevates Any Outfit", alt: "WIHOLL Mock Neck Blouse", href: "https://amzn.to/4neBJp1", img: "20bestimages/20.jpg" }
  ],
  amazon_fashion: [
    { title: "PRETTYGARDEN Dress Looks Elegant for Any Occasion", alt: "PRETTYGARDEN Dress", href: "https://amzn.to/4dGmWQT", img: "Amazon/Fashion/fash1.jpg" },
    { title: "Eyelet Lace Dress Gives Soft Feminine Summer Style", alt: "Eyelet Lace Dress", href: "https://amzn.to/4dltKlv", img: "Amazon/Fashion/fash2.jpg" },
    { title: "AUTOMET Two Piece Set Makes Summer Outfits Easy", alt: "AUTOMET Two Piece Set", href: "https://amzn.to/4nowJ18", img: "Amazon/Fashion/fash3.jpg" },
    { title: "AUTOMET Lounge Set Gives Effortless Clean Girl Style", alt: "AUTOMET Lounge Set", href: "https://amzn.to/4woBps4", img: "Amazon/Fashion/fash4.jpg" },
    { title: "MARZXIN Lounge Set Is Perfect for Summer Trips", alt: "MARZXIN Lounge Set", href: "https://amzn.to/4ubvDZr", img: "Amazon/Fashion/fash5.jpg" }
  ],
  amazon_electronics: [
    { title: "Raycon Fitness Earbuds Deliver Powerful Workout Audio", alt: "Raycon Fitness Earbuds", href: "https://amzn.to/42tl73w", img: "Amazon/Electronics/elec1.jpg" },
    { title: "Bluetooth 5.4 Earbuds Give Clear Sound Anywhere", alt: "Bluetooth 5.4 Earbuds", href: "https://amzn.to/4eL9v3i", img: "Amazon/Electronics/elec2.jpg" },
    { title: "Smart Touchscreen Earbuds Bring Premium Audio Features", alt: "Smart Touchscreen Earbuds", href: "https://amzn.to/4uKYF1I", img: "Amazon/Electronics/elec3.jpg" },
    { title: "Liphisy Tripod Makes Content Creation Easier Anywhere", alt: "Liphisy Tripod", href: "https://amzn.to/432gMEC", img: "Amazon/Electronics/elec4.jpg" },
    { title: "Mini Mic Pro Gives Clear Audio for Content Creation", alt: "Mini Mic Pro", href: "https://amzn.to/4d8Td31", img: "Amazon/Electronics/elec5.jpg" }
  ],
  amazon_health: [
    { title: "BIODANCE Hydrogel Mask Gives Glass Skin Glow", alt: "BIODANCE Hydrogel Mask", href: "https://amzn.to/4uIVis2", img: "Amazon/Health/heal1.jpg" },
    { title: "MAREE V Line Mask Helps Sculpt & Firm Skin", alt: "MAREE V Line Mask", href: "https://amzn.to/4fetUxK", img: "Amazon/Health/heal2.jpg" },
    { title: "Medicube Collagen Jelly Cream Gives a Glass Skin Glow", alt: "Medicube Collagen Jelly Cream", href: "https://amzn.to/4ttOJJb", img: "Amazon/Health/heal3.jpg" },
    { title: "SeoulCeuticals Vitamin C Serum Brightens & Hydrates", alt: "SeoulCeuticals Vitamin C Serum", href: "https://amzn.to/4trb4qx", img: "Amazon/Health/heal4.jpg" },
    { title: "TruSkin Vitamin C Serum Helps Brighten & Smooth Skin", alt: "TruSkin Vitamin C Serum", href: "https://amzn.to/4dv6IZQ", img: "Amazon/Health/heal5.jpg" }
  ],
  amazon_groceries: [
    { title: "Nutricost Creatine Helps Support Strength & Performance", alt: "Nutricost Creatine", href: "https://amzn.to/4trbLjD", img: "Amazon/Groceries/cons1.jpg" },
    { title: "Triple Strength Omega 3 Supports Daily Wellness Goals", alt: "Triple Strength Omega 3", href: "https://amzn.to/4dlelSb", img: "Amazon/Groceries/cons2.jpg" },
    { title: "DripDrop Hydration Packets Make Staying Hydrated Easier", alt: "DripDrop Hydration Packets", href: "https://amzn.to/4dHXN8k", img: "Amazon/Groceries/cons3.jpg" },
    { title: "LMNT Electrolytes Help Support Daily Hydration", alt: "LMNT Electrolytes", href: "https://amzn.to/4ufMjPA", img: "Amazon/Groceries/cons4.jpg" },
    { title: "Pure Protein Shake Packs 30g Protein Per Bottle", alt: "Pure Protein Shake", href: "https://amzn.to/4noJPeS", img: "Amazon/Groceries/cons5.jpg" }
  ]
};


// ══════════════════════════════════════════════════════════════
//  CARD RENDERER
// ══════════════════════════════════════════════════════════════

function renderCards(containerId, productArray, platform) {
  const container = document.getElementById(containerId);
  if (!container || !productArray) return;
  container.innerHTML = productArray.map(p => `
    <a class="card" href="${p.href}" target="_blank" rel="noopener nofollow">
      <img class="card-img${p.imgClass ? ' ' + p.imgClass : ''}" src="${p.img}" alt="${p.alt}" loading="lazy" width="300" height="300" />
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="card-footer">
          <span class="card-cta">View on ${platform} <span>→</span></span>
          <button class="save-btn" aria-label="Save product" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </a>
  `).join('');
}


// ══════════════════════════════════════════════════════════════
//  RENDER ALL CARDS
// ══════════════════════════════════════════════════════════════

renderCards('shopee-best-1',       PRODUCTS.shopee_best_1,       'Shopee');
renderCards('shopee-best-2',       PRODUCTS.shopee_best_2,       'Shopee');
renderCards('shopee-fashion',      PRODUCTS.shopee_fashion,      'Shopee');
renderCards('shopee-electronics',  PRODUCTS.shopee_electronics,  'Shopee');
renderCards('shopee-health',       PRODUCTS.shopee_health,       'Shopee');
renderCards('shopee-groceries',    PRODUCTS.shopee_groceries,    'Shopee');
renderCards('shein-best-1',        PRODUCTS.shein_best_1,        'SHEIN');
renderCards('shein-best-2',        PRODUCTS.shein_best_2,        'SHEIN');
renderCards('shein-mens',          PRODUCTS.shein_mens,          'SHEIN');
renderCards('shein-womens',        PRODUCTS.shein_womens,        'SHEIN');
renderCards('shein-decor',         PRODUCTS.shein_decor,         'SHEIN');
renderCards('shein-accessories',   PRODUCTS.shein_accessories,   'SHEIN');
renderCards('amazon-best-1',       PRODUCTS.amazon_best_1,       'Amazon');
renderCards('amazon-best-2',       PRODUCTS.amazon_best_2,       'Amazon');
renderCards('amazon-fashion',      PRODUCTS.amazon_fashion,      'Amazon');
renderCards('amazon-electronics',  PRODUCTS.amazon_electronics,  'Amazon');
renderCards('amazon-health',       PRODUCTS.amazon_health,       'Amazon');
renderCards('amazon-groceries',    PRODUCTS.amazon_groceries,    'Amazon');


// ══════════════════════════════════════════════════════════════
//  CARD RANDOMIZATION
// ══════════════════════════════════════════════════════════════

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleContainer(container) {
  if (!container) return;
  const cards = Array.from(container.children);
  if (cards.length < 2) return;
  const shuffled = shuffle(cards);
  const fragment = document.createDocumentFragment();
  shuffled.forEach(card => fragment.appendChild(card));
  container.innerHTML = '';
  container.appendChild(fragment);
}

function shuffleAllCards() {
  document.querySelectorAll('.shop-section').forEach(section => {
    const grids = section.querySelectorAll('.slider-grid');
    if (grids.length < 2) return;

    const allCards = [];
    grids.forEach(grid => allCards.push(...Array.from(grid.children)));

    const shuffledCards = shuffle(allCards);
    grids.forEach(grid => { grid.innerHTML = ''; });

    const maxPerRow = 10;
    shuffledCards.forEach((card, index) => {
      const rowIndex = Math.floor(index / maxPerRow);
      if (grids[rowIndex]) grids[rowIndex].appendChild(card);
    });
  });

  document.querySelectorAll('.category-cards').forEach(grid => {
    shuffleContainer(grid);
  });
}


// ══════════════════════════════════════════════════════════════
//  CATEGORY FILTER
// ══════════════════════════════════════════════════════════════

function toggleCategoryPanel(label) {
  const section    = label.closest('.shop-section');
  const panel      = section.querySelector('.category-panel');
  const catSection = label.closest('.category-section');
  const isOpen     = panel.classList.contains('open');

  if (isOpen) {
    const anim = panel.animate(
      [{ maxHeight: panel.scrollHeight + 'px' }, { maxHeight: '0px' }],
      { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
    );
    anim.onfinish = () => {
      panel.classList.remove('open');
      panel.style.maxHeight = '';
      anim.cancel();
    };
    section.querySelectorAll('.cat-tag').forEach(t => t.classList.remove('active'));
    section.querySelectorAll('.category-cards').forEach(g => g.classList.remove('active'));
    catSection.classList.remove('cat-open');
  } else {
    panel.classList.add('open');
    catSection.classList.add('cat-open');
    panel.animate(
      [{ maxHeight: '0px' }, { maxHeight: panel.scrollHeight + 'px' }],
      { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    ).onfinish = () => { panel.style.maxHeight = '4000px'; };
  }
}

function filterCategory(tag, category) {
  const section  = tag.closest('.shop-section');
  const allTags  = section.querySelectorAll('.cat-tag');
  const allGrids = section.querySelectorAll('.category-cards');
  const panel    = section.querySelector('.category-panel');
  const isActive = tag.classList.contains('active');

  allTags.forEach(t  => t.classList.remove('active'));
  allGrids.forEach(g => g.classList.remove('active'));

  if (isActive) {
    const anim = panel.animate(
      [{ maxHeight: panel.scrollHeight + 'px' }, { maxHeight: '0px' }],
      { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
    );
    anim.onfinish = () => {
      panel.classList.remove('open');
      panel.style.maxHeight = '';
      anim.cancel();
    };
    const catSection = section.querySelector('.category-section');
    if (catSection) catSection.classList.remove('cat-open');
    return;
  }

  tag.classList.add('active');
  const target = section.querySelector(`.category-cards[data-category="${category}"]`);
  if (target) target.classList.add('active');

  if (!panel.classList.contains('open')) {
    panel.classList.add('open');
    const catSection = section.querySelector('.category-section');
    if (catSection) catSection.classList.add('cat-open');
    panel.animate(
      [{ maxHeight: '0px' }, { maxHeight: panel.scrollHeight + 'px' }],
      { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    ).onfinish = () => { panel.style.maxHeight = '4000px'; };
  }
}

function routeTo(target) {
  let sectionEl, categoryKey;

  if (target === 'shein-best') {
    sectionEl = document.querySelector('.shop-section[data-section="shein"]');
  } else if (target === 'shopee-best') {
    sectionEl = document.querySelector('.shop-section[data-section="shopee"]');
  } else if (target === 'shopee-electronics') {
    sectionEl = document.querySelector('.shop-section[data-section="shopee"]');
    categoryKey = 'electronics';
  } else if (target === 'shopee-health') {
    sectionEl = document.querySelector('.shop-section[data-section="shopee"]');
    categoryKey = 'health';
  } else if (target === 'shopee-groceries') {
    sectionEl = document.querySelector('.shop-section[data-section="shopee"]');
    categoryKey = 'groceries';
  }

  if (!sectionEl) return;

  if (categoryKey) {
    const panel      = sectionEl.querySelector('.category-panel');
    const catSection = sectionEl.querySelector('.category-section');
    if (!panel.classList.contains('open')) {
      panel.classList.add('open');
      if (catSection) catSection.classList.add('cat-open');
      panel.animate(
        [{ maxHeight: '0px' }, { maxHeight: panel.scrollHeight + 'px' }],
        { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
      ).onfinish = () => { panel.style.maxHeight = '4000px'; };
    }
    setTimeout(() => {
      const tag = sectionEl.querySelector(`.cat-tag[onclick*="${categoryKey}"]`);
      if (tag && !tag.classList.contains('active')) filterCategory(tag, categoryKey);
    }, 460);
  }

  setTimeout(() => {
    sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function toggleSection(header) {
  // no-op: sections are always open; stub prevents console errors
}