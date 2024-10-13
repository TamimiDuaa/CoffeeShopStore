const menu ={
    "coffeeMenu": [
      {
        "id": 1,
        "name": "Flat White",
        "imgSrc":"https://static.toiimg.com/thumb/86699095.cms?imgsize=59654&width=800&height=800",
        "price": 4.5,
        "description": "A smooth and velvety coffee made with espresso and steamed milk, known for its rich microfoam.",
        "nutrition": {
          "calories": 120,
          "fat": "6g",
          "carbs": "10g",
          "protein": "6g"
        }
      },
      {
        "id": 2,
        "name": "Macchiato",
        "imgSrc":"https://dinnerthendessert.com/wp-content/uploads/2023/10/Caramel-Macchiato-10.jpg",
        "price": 3.8,
        "description": "An espresso 'stained' with a small amount of steamed milk or foam, delivering a strong coffee flavor.",
        "nutrition": {
          "calories": 15,
          "fat": "0g",
          "carbs": "3g",
          "protein": "1g"
        }
      },
      {
        "id": 3,
        "name": "Affogato",
        "imgSrc":"https://www.recipetineats.com/uploads/2023/06/Affogato_0.jpg",
        "price": 5.5,
        "description": "A delightful dessert featuring a scoop of vanilla ice cream topped with a shot of hot espresso.",
        "nutrition": {
          "calories": 250,
          "fat": "12g",
          "carbs": "30g",
          "protein": "4g"
        }
      },
      {
        "id": 4,
        "name": "Turkish Coffee",
        "imgSrc":"https://www.foodandwine.com/thmb/BB2xE0QOdX_3CxcZiga035-NB-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Everything-You-Need-To-Know-About-Turkish-Coffee-FT-1-BLOG0822-2000-81998ccec0b845fa8d3174584a2eef5d.jpg",
        "price": 4,
        "description": "A strong and rich coffee brewed from finely ground coffee beans, typically served unfiltered.",
        "nutrition": {
          "calories": 20,
          "fat": "0g",
          "carbs": "0g",
          "protein": "1g"
        }
      },
      {
        "id": 5,
        "name": "Café au Lait",
        "imgSrc":"https://www.thespruceeats.com/thmb/YEI_JAfLHd6fbfCYUukcW5E2TYg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cafe-au-lait-recipe-1374920-hero-01-b1463e806a7947e7b8b17979ab70eab3.jpg",
        "price": 4.2,
        "description": "A French coffee drink made with equal parts brewed coffee and steamed milk for a creamy texture.",
        "nutrition": {
          "calories": 100,
          "fat": "5g",
          "carbs": "10g",
          "protein": "5g"
        }
      },
      {
        "id": 6,
        "name": "Ristretto",
        "imgSrc":"https://parachutecoffee.com/cdn/shop/articles/what_is_a_ristretto_1200x1200.jpg?v=1666621566",
        "price": 3.2,
        "description": "A short shot of espresso made with the same amount of coffee but less water, resulting in a more concentrated flavor.",
        "nutrition": {
          "calories": 10,
          "fat": "0g",
          "carbs": "0g",
          "protein": "1g"
        }
      },
      {
        "id": 7,
        "name": "Cortado",
        "imgSrc":"https://perfectdailygrind.com/wp-content/uploads/2020/03/Cortado-Gibraltar-glass.jpg",
        "price": 4.3,
        "description": "A balanced coffee drink made with equal parts espresso and steamed milk, perfect for coffee lovers.",
        "nutrition": {
          "calories": 70,
          "fat": "4g",
          "carbs": "6g",
          "protein": "3g"
        }
      },
      {
        "id": 8,
        "name": "Cold Brew",
        "imgSrc":"https://smallfarmbiglife.com/wp-content/uploads/2022/07/Dunkin-Copycat-Brown-Sugar-Cream-Cold-Brew-2135-scaled.jpg",
        "price": 4.7,
        "description": "Coffee brewed with cold water over an extended period, resulting in a smooth, less acidic flavor.",
        "nutrition": {
          "calories": 5,
          "fat": "0g",
          "carbs": "1g",
          "protein": "0g"
        }
      },
      {
        "id": 9,
        "name": "Iced Latte",
        "imgSrc":"https://buildyourbite.com/wp-content/uploads/2024/04/iced-latte-recipe-featured-500x500.jpg",
        "price": 5,
        "description": "A refreshing coffee drink made with espresso, milk, and ice, perfect for warm days.",
        "nutrition": {
          "calories": 120,
          "fat": "5g",
          "carbs": "10g",
          "protein": "6g"
        }
      },
      {
        "id": 10,
        "name": "Frappe",
        "imgSrc":"https://www.ibcsimply.com/wp-content/uploads/2022/07/Coffee-Frappe.jpg",
        "price": 5.5,
        "description": "A frothy iced coffee blended with milk and sugar, often topped with whipped cream for a sweet treat.",
        "nutrition": {
          "calories": 250,
          "fat": "10g",
          "carbs": "35g",
          "protein": "5g"
        }
      },
      {
        "id": 11,
        "name": "Doppio",
        "imgSrc":"https://www.nestleprofessional.in/sites/default/files/2021-08/Doppio.jpg",
        "price": 3.5,
        "description": "A double shot of espresso, providing a robust flavor and higher caffeine content for an extra kick.",
        "nutrition": {
          "calories": 20,
          "fat": "0g",
          "carbs": "0g",
          "protein": "1g"
        }
      },
      {
        "id": 12,
        "name": "Espresso Con Panna",
        "imgSrc":"https://www.acouplecooks.com/wp-content/uploads/2021/12/Espresso-Con-Panna-005.jpg",
        "price": 4.8,
        "description": "A shot of espresso topped with a dollop of whipped cream, combining rich coffee with a sweet finish.",
        "nutrition": {
          "calories": 100,
          "fat": "8g",
          "carbs": "5g",
          "protein": "1g"
        }
      },
      {
        "id": 13,
        "name": "Red Eye",
        "imgSrc":"https://www.acouplecooks.com/wp-content/uploads/2021/09/Red-Eye-Coffee-003.jpg",
        "price": 4.1,
        "description": "A brewed coffee topped with a shot of espresso, delivering a potent caffeine boost.",
        "nutrition": {
          "calories": 20,
          "fat": "0g",
          "carbs": "5g",
          "protein": "1g"
        }
      },
      {
        "id": 14,
        "name": "Nitro Cold Brew",
        "imgSrc":"https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qygwsptl/054a2236-0a4d-4df0-9836-de7fca8aad98.jpg",
        "price": 5.2,
        "description": "Cold brew coffee infused with nitrogen for a creamy texture and frothy head, served cold.",
        "nutrition": {
          "calories": 5,
          "fat": "0g",
          "carbs": "1g",
          "protein": "0g"
        }
      },
      {
        "id": 15,
        "name": "Mocha",
        "imgSrc":"https://www.folgerscoffee.com/folgers/recipes/_Hero%20Images/Detail%20Pages/5598/image-thumb__5598__schema_image/MochaIced-hero.58f3878d.jpg",
        "price": 4.5,
        "description": "A delightful blend of espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
        "nutrition": {
          "calories": 300,
          "fat": "10g",
          "carbs": "45g",
          "protein": "8g"
        }
      },
      {
        "id": 16,
        "name": "Irish Cream Cold Brew",
        "imgSrc":"https://feastandwest.com/wp-content/uploads/2023/03/Irish-cream-cold-brew-foam-photo.jpg",
        "price": 5.5,
        "description": "A cold brew coffee with a splash of Irish cream flavor, served over ice for a refreshing treat.",
        "nutrition": {
          "calories": 80,
          "fat": "3g",
          "carbs": "12g",
          "protein": "1g"
        }
      },
      {
        "id": 17,
        "name": "Chai Latte",
        "imgSrc":"https://masalaandchai.com/wp-content/uploads/2022/11/Chai-Tea-Latte.jpg",
        "price": 4.5,
        "description": "A spiced tea latte made with black tea, steamed milk, and a blend of warming spices.",
        "nutrition": {
          "calories": 150,
          "fat": "5g",
          "carbs": "25g",
          "protein": "4g"
        }
      },
      {
        "id": 18,
        "name": "Vanilla Latte",
        "imgSrc":"https://www.forkinthekitchen.com/wp-content/uploads/2022/08/220629.iced_.latte_.vanilla-9009.jpg",
        "price": 5,
        "description": "A sweetened coffee drink made with espresso, steamed milk, and vanilla syrup, finished with foam.",
        "nutrition": {
          "calories": 180,
          "fat": "7g",
          "carbs": "25g",
          "protein": "6g"
        }
      },
      {
        "id": 19,
        "name": "Cinnamon Roll Latte",
        "imgSrc":"https://i0.wp.com/kaylaskitchandfix.com/wp-content/uploads/2023/03/CinnamonRollLatte2.jpg?resize=720%2C960&ssl=1",
        "price": 5.2,
        "description": "A delicious blend of espresso, steamed milk, cinnamon syrup, and whipped cream, reminiscent of a cinnamon roll.",
        "nutrition": {
          "calories": 220,
          "fat": "8g",
          "carbs": "30g",
          "protein": "5g"
        }
      },
      {
        "id": 20,
        "name": "Peanut Butter Mocha",
        "imgSrc":"https://www.kerryfoodservice.com/cdn/shop/products/mtrxd1bwvntch85evpyi_1000x.jpg?v=1604006653",
        "price": 5.5,
        "description": "A rich mocha made with espresso, chocolate syrup, steamed milk, and a hint of creamy peanut butter.",
        "nutrition": {
          "calories": 350,
          "fat": "12g",
          "carbs": "45g",
          "protein": "10g"
        }
      }
    ],
    "nonCoffeeMenu": [
        {
            "id": 1,
            "name": "Chai Tea Latte",
            "imgSrc": "https://fitfoodiefinds.com/wp-content/uploads/2021/09/Chai-Tea-Latte-05sq.jpg",
            "price": 4.5,
            "description": "A spiced tea latte made with black tea, steamed milk, and a blend of aromatic spices like cinnamon and cardamom.",
            "nutrition": { "calories": 150, "fat": "5g", "carbs": "25g", "protein": "4g" }
        },
        {
            "id": 2,
            "name": "Matcha Latte",
            "imgSrc": "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg",
            "price": 5,
            "description": "A creamy blend of matcha green tea powder and steamed milk, known for its vibrant color and health benefits.",
            "nutrition": { "calories": 120, "fat": "4g", "carbs": "15g", "protein": "6g" }
        },
        {
            "id": 3,
            "name": "Golden Turmeric Latte",
            "imgSrc": "https://plantbasedrdblog.com/wp-content/uploads/2022/04/vegan-golden-turmeric-latte_1.jpg",
            "price": 4.8,
            "description": "A warm and comforting drink made with turmeric, ginger, and steamed milk, offering anti-inflammatory properties.",
            "nutrition": { "calories": 100, "fat": "5g", "carbs": "15g", "protein": "3g" }
        },
        {
            "id": 4,
            "name": "Iced Hibiscus Tea",
            "imgSrc": "https://thealmondeater.com/wp-content/uploads/2017/08/Raspberry-Hibiscus-Iced-Tea-Recipe-1.jpg",
            "price": 3.5,
            "description": "A refreshing iced tea made from hibiscus flowers, known for its tangy flavor and vibrant red color.",
            "nutrition": { "calories": 30, "fat": "0g", "carbs": "7g", "protein": "0g" }
        },
        {
            "id": 5,
            "name": "Strawberry Banana Smoothie",
            "imgSrc": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-12-strawberry-banana-smoothie%2Fstrawberry-banana-smoothie-221",
            "price": 5.5,
            "description": "A delicious blend of fresh strawberries, bananas, and yogurt, perfect for a nutritious breakfast or snack.",
            "nutrition": { "calories": 200, "fat": "2g", "carbs": "36g", "protein": "6g" }
        },
        {
            "id": 6,
            "name": "Mango Lassi",
            "imgSrc": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe.jpg",
            "price": 4.5,
            "description": "A traditional Indian drink made with yogurt and fresh mango, providing a sweet and tangy flavor.",
            "nutrition": { "calories": 180, "fat": "3g", "carbs": "30g", "protein": "5g" }
        },
        {
            "id": 7,
            "name": "Coconut Water",
            "imgSrc": "https://assets.wakefern.com/is/image/wakefern/89899901000-001?$Mi9Product_detail$",
            "price": 3,
            "description": "A refreshing drink packed with electrolytes and natural sweetness, perfect for hydration.",
            "nutrition": { "calories": 60, "fat": "0g", "carbs": "15g", "protein": "1g" }
        },
        {
            "id": 8,
            "name": "Lemonade",
            "imgSrc": "https://i2.wp.com/lmld.org/wp-content/uploads/2022/04/Lemonade-4.jpg",
            "price": 3.5,
            "description": "A classic refreshing drink made with fresh lemon juice, water, and a touch of sweetness.",
            "nutrition": { "calories": 100, "fat": "0g", "carbs": "26g", "protein": "0g" }
        },
        {
            "id": 9,
            "name": "Berry Smoothie Bowl",
            "imgSrc": "https://bakerita.com/wp-content/uploads/2016/05/Berry-Pitaya-Smoothie-Bowl-5.jpg",
            "price": 6,
            "description": "A smoothie served in a bowl topped with granola, fresh fruits, and seeds for added texture and flavor.",
            "nutrition": { "calories": 250, "fat": "7g", "carbs": "45g", "protein": "8g" }
        },
        {
            "id": 10,
            "name": "Mint Lemonade",
            "imgSrc": "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Mint-Lemonade-10b.jpg",
            "price": 4,
            "description": "A refreshing twist on classic lemonade, infused with fresh mint leaves for a cooling effect.",
            "nutrition": { "calories": 90, "fat": "0g", "carbs": "22g", "protein": "0g" }
        },
        {
            "id": 11,
            "name": "Peach Iced Tea",
            "imgSrc": "https://delight-fuel.com/wp-content/uploads/2020/07/Peach_Ice_Tea_3-735x1103.jpg",
            "price": 3.5,
            "description": "A refreshing iced tea infused with peach flavor, perfect for hot summer days.",
            "nutrition": { "calories": 40, "fat": "0g", "carbs": "10g", "protein": "0g" }
        },
        {
            "id": 12,
            "name": "Vanilla Chai",
            "imgSrc": "https://www.halfbakedharvest.com/wp-content/uploads/2017/11/Vanilla-Chai-Tea-White-Russian-1.jpg",
            "price": 4.7,
            "description": "A blend of spiced chai tea with creamy vanilla, served hot or iced for a delightful drink.",
            "nutrition": { "calories": 160, "fat": "6g", "carbs": "25g", "protein": "5g" }
        },
        {
            "id": 13,
            "name": "Cucumber Mint Cooler",
            "imgSrc": "https://yestoyolks.com/wp-content/uploads/2020/06/IMG_9088.jpg",
            "price": 4,
            "description": "A refreshing drink made with fresh cucumber, mint, and lemon, perfect for hydration.",
            "nutrition": { "calories": 30, "fat": "0g", "carbs": "7g", "protein": "1g" }
        },
        {
            "id": 14,
            "name": "Watermelon Smoothie",
            "imgSrc": "https://www.wellplated.com/wp-content/uploads/2020/07/Creamy-Watermelon-Smoothie.jpg",
            "price": 5,
            "description": "A light and refreshing smoothie made with fresh watermelon and a splash of lime juice.",
            "nutrition": { "calories": 80, "fat": "0g", "carbs": "20g", "protein": "1g" }
        },
        {
            "id": 15,
            "name": "Raspberry Lemon Sparkler",
            "imgSrc": "https://poppresto.com/wp-content/uploads/2018/12/presto-rose-cocktail-sm-80.jpg",
            "price": 4.5,
            "description": "A sparkling beverage made with fresh raspberries, lemon juice, and soda water for a bubbly refreshment.",
            "nutrition": { "calories": 50, "fat": "0g", "carbs": "12g", "protein": "0g" }
        },
        {
            "id": 16,
            "name": "Tropical Green Smoothie",
            "imgSrc": "https://fraicheliving.com/wp-content/uploads/2021/01/fraiche-living-tropical-green-smoothie.jpg",
            "price": 5.5,
            "description": "A vibrant smoothie made with spinach, pineapple, and banana for a nutritious and energizing drink.",
            "nutrition": { "calories": 150, "fat": "2g", "carbs": "34g", "protein": "4g" }
        },
        {
            "id": 17,
            "name": "Peach Lemonade",
            "imgSrc": "https://www.alphafoodie.com/wp-content/uploads/2022/03/Peach-Lemonade-square-two.jpeg",
            "price": 4,
            "description": "A sweet and tangy lemonade infused with fresh peach puree for a refreshing summer drink.",
            "nutrition": { "calories": 100, "fat": "0g", "carbs": "25g", "protein": "0g" }
        },
        {
            "id": 18,
            "name": "Spiced Apple Cider",
            "imgSrc": "https://www.allrecipes.com/thmb/FO4exL3Hpl212Ci9OWsRbcqk8cI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9423-hot-spiced-cider-vat-4X3-1-c78c3b4cfaed467fb5ac331a42e4d071.jpg",
            "price": 4.5,
            "description": "A warm drink made with fresh apple cider and spices like cinnamon and cloves, perfect for fall.",
            "nutrition": { "calories": 120, "fat": "0g", "carbs": "30g", "protein": "0g" }
        },
        {
            "id": 19,
            "name": "Berry Detox Water",
            "imgSrc": "https://s23209.pcdn.co/wp-content/uploads/2016/04/FruitInfusedWater_8179edit.jpg",
            "price": 3,
            "description": "Infused water with fresh berries and mint leaves for a refreshing and hydrating drink.",
            "nutrition": { "calories": 15, "fat": "0g", "carbs": "4g", "protein": "0g" }
        },
        {
            "id": 20,
            "name": "Honey Lemon Ginger Tea",
            "imgSrc": "https://simplegreensmoothies.com/wp-content/uploads/ginger-lemon-honey-tea-home-remedies-for-cough-sore-throat-homemade.jpg",
            "price": 4,
            "description": "A soothing tea made with fresh ginger, lemon juice, and honey, known for its immune-boosting properties.",
            "nutrition": { "calories": 60, "fat": "0g", "carbs": "15g", "protein": "0g" }
        }
    ],
    "dessertsMenu":[
        {
            "id": 1,
            "name": "Chocolate Lava Cake",
            "imgSrc": "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
            "price": 6.5,
            "description": "A rich chocolate cake with a gooey molten chocolate center, served warm with a side of vanilla ice cream.",
            "nutrition": {
                "calories": 450,
                "fat": "25g",
                "carbs": "50g",
                "protein": "6g"
            }
        },
        {
            "id": 2,
            "name": "Tiramisu",
            "imgSrc": "https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg",
            "price": 5.5,
            "description": "A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and a dusting of cocoa powder.",
            "nutrition": {
                "calories": 350,
                "fat": "18g",
                "carbs": "42g",
                "protein": "6g"
            }
        },
        {
            "id": 3,
            "name": "Cheesecake",
            "imgSrc": "https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg",
            "price": 5,
            "description": "A creamy New York-style cheesecake with a graham cracker crust, available with various fruit toppings like strawberry or blueberry.",
            "nutrition": {
                "calories": 400,
                "fat": "24g",
                "carbs": "40g",
                "protein": "7g"
            }
        },
        {
            "id": 4,
            "name": "Macarons (6 pieces)",
            "imgSrc": "https://robinchocolates.com/wp-content/uploads/2019/08/6-macaron.jpg",
            "price": 7,
            "description": "Delicate French almond cookies filled with a variety of flavored creams, including pistachio, raspberry, and chocolate.",
            "nutrition": {
                "calories": "90 per piece",
                "fat": "4g",
                "carbs": "11g",
                "protein": "1g"
            }
        },
        {
            "id": 5,
            "name": "Apple Pie",
            "imgSrc": "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Apple-Pie-Recipe-Video.jpg",
            "price": 4.5,
            "description": "A classic slice of warm apple pie made with sweet apples, cinnamon, and a flaky crust. Served with whipped cream or ice cream on the side.",
            "nutrition": {
                "calories": 350,
                "fat": "16g",
                "carbs": "48g",
                "protein": "3g"
            }
        },
        {
            "id": 6,
            "name": "Baklava",
            "imgSrc": "https://www.simplyrecipes.com/thmb/3S8HtOSKvpoQmw4wgo5yCW2qjVE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Baklava-LEAD-11-b2a228e6db9f43d697ae3aed378d0b2a.jpg",
            "price": 4,
            "description": "A rich Middle Eastern pastry made with layers of phyllo dough, chopped nuts, and honey syrup.",
            "nutrition": {
                "calories": 300,
                "fat": "20g",
                "carbs": "33g",
                "protein": "4g"
            }
        },
        {
            "id": 7,
            "name": "Brownie Sundae",
            "imgSrc": "https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg",
            "price": 6,
            "description": "A decadent chocolate brownie topped with vanilla ice cream, hot fudge, and whipped cream.",
            "nutrition": {
                "calories": 500,
                "fat": "28g",
                "carbs": "60g",
                "protein": "6g"
            }
        },
        {
            "id": 8,
            "name": "Lemon Tart",
            "imgSrc": "https://www.recipetineats.com/tachyon/2021/06/French-Lemon-Tart_5-main-SQ.jpg",
            "price": 4.5,
            "description": "A zesty lemon tart with a buttery crust and smooth lemon curd filling, topped with a dusting of powdered sugar.",
            "nutrition": {
                "calories": 320,
                "fat": "15g",
                "carbs": "40g",
                "protein": "4g"
            }
        },
        {
            "id": 9,
            "name": "Crème Brûlée",
            "imgSrc": "https://www.imperialsugar.com/sites/default/files/styles/recipe_image_node_full/public/recipe/classic-creme-brulee-imperial.jpg?itok=-SaNVTyr",
            "price": 5.5,
            "description": "A classic French dessert with a rich vanilla custard base topped with a layer of caramelized sugar.",
            "nutrition": {
                "calories": 300,
                "fat": "22g",
                "carbs": "24g",
                "protein": "5g"
            }
        },
        {
            "id": 10,
            "name": "Chocolate Chip Cookies (3 pieces)",
            "imgSrc": "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies-300x300.jpg",
            "price": 3,
            "description": "Freshly baked chocolate chip cookies with gooey chocolate chunks and a crispy exterior.",
            "nutrition": {
                "calories": "150 per cookie",
                "fat": "8g",
                "carbs": "20g",
                "protein": "2g"
            }
        },
        {
            "id": 11,
            "name": "Strawberry Shortcake",
            "imgSrc": "https://celebratingsweets.com/wp-content/uploads/2018/06/Strawberry-Shortcake-Cake-1-1.jpg",
            "price": 5,
            "description": "A light and fluffy shortcake layered with fresh strawberries and whipped cream.",
            "nutrition": {
                "calories": 350,
                "fat": "16g",
                "carbs": "42g",
                "protein": "4g"
            }
        },
        {
            "id": 12,
            "name": "Cinnamon Roll",
            "imgSrc": "https://atsloanestable.com/wp-content/uploads/2020/08/cardamom-cinnamon-rolls15.jpg",
            "price": 4,
            "description": "A warm and soft cinnamon roll topped with cream cheese frosting.",
            "nutrition": {
                "calories": 420,
                "fat": "18g",
                "carbs": "60g",
                "protein": "5g"
            }
        },
        {
            "id": 13,
            "name": "Pistachio Gelato",
            "imgSrc": "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw3f4e9219/images/recipe-Images/pistachio-gelato-recipe.jpg?sw=1200&sh=1200&sm=fit",
            "price": 4.5,
            "description": "A creamy and smooth pistachio-flavored Italian gelato.",
            "nutrition": {
                "calories": 220,
                "fat": "12g",
                "carbs": "24g",
                "protein": "5g"
            }
        },
        {
            "id": 14,
            "name": "Mango Sticky Rice",
            "imgSrc": "https://nutsaboutgreens.com/wp-content/uploads/2023/08/IMG_2526.jpg",
            "price": 5,
            "description": "A traditional Thai dessert made with sweet sticky rice, fresh mango slices, and a drizzle of coconut milk.",
            "nutrition": {
                "calories": 350,
                "fat": "10g",
                "carbs": "60g",
                "protein": "6g"
            }
        },
        {
            "id": 15,
            "name": "Carrot Cake",
            "imgSrc": "https://static01.nyt.com/images/2020/11/01/dining/Carrot-Cake-textless/Carrot-Cake-textless-googleFourByThree-v2.jpg",
            "price": 5,
            "description": "A moist carrot cake with cream cheese frosting, flavored with cinnamon and topped with walnuts.",
            "nutrition": {
                "calories": 400,
                "fat": "22g",
                "carbs": "48g",
                "protein": "5g"
            }
        },
        {
            "id": 16,
            "name": "Chocolate Mousse",
            "imgSrc": "https://richanddelish.com/wp-content/uploads/2024/04/Chocolate-Mousse-Cake-1.jpg",
            "price": 4.5,
            "description": "A light and airy chocolate mousse made with high-quality dark chocolate and whipped cream.",
            "nutrition": {
                "calories": 300,
                "fat": "18g",
                "carbs": "32g",
                "protein": "4g"
            }
        },
        {
            "id": 17,
            "name": "Peach Cobbler",
            "imgSrc": "https://joyfoodsunshine.com/wp-content/uploads/2020/05/peach-cobbler-recipe-7.jpg",
            "price": 5,
            "description": "A Southern favorite made with juicy peaches and a buttery biscuit topping, served warm.",
            "nutrition": {
                "calories": 370,
                "fat": "14g",
                "carbs": "54g",
                "protein": "3g"
            }
        },
        {
            "id": 18,
            "name": "Vanilla Bean Panna Cotta",
            "imgSrc": "https://www.alaskafromscratch.com/wp-content/uploads/2014/07/IMG_93841.jpg",
            "price": 4.5,
            "description": "An Italian dessert of creamy vanilla custard set with gelatin, served with a fruit compote.",
            "nutrition": {
                "calories": 250,
                "fat": "16g",
                "carbs": "28g",
                "protein": "5g"
            }
        },
        {
            "id": 19,
            "name": "Éclair",
            "imgSrc": "https://www.recipetineats.com/uploads/2022/11/Eclairs_0a.jpg",
            "price": 4,
            "description": "A French pastry filled with rich vanilla cream and topped with chocolate icing.",
            "nutrition": {
                "calories": 300,
                "fat": "18g",
                "carbs": "36g",
                "protein": "5g"
            }
        },
        {
            "id": 20,
            "name": "Almond Croissant",
            "price": 3.5,
            "imgSrc": "https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2023/04/French-Almond-Croissants-Bakery-Style-8.jpg?fit=1202%2C1800&ssl=1",
            "description": "A flaky croissant filled with almond paste and topped with toasted almonds and powdered sugar.",
            "nutrition": {
                "calories": 350,
                "fat": "20g",
                "carbs": "38g",
                "protein": "6g"
            }
        }
    ],
    "coldSandwichesMenu":[
            {
                "id": 1,
                "name": "Grilled Chicken & Avocado",
                "imgSrc": "https://media.yardhouse.com/en_us/images/product/grilled-chicken-avocado-sandwich-590x365.jpg",
                "price": 8,
                "description": "Grilled chicken breast, avocado, lettuce, tomato, and mayo on whole wheat bread.",
                "nutrition": {
                    "calories": 500,
                    "fat": "24g",
                    "carbs": "38g",
                    "protein": "30g"
                }
            },
            {
                "id": 2,
                "name": "Falafel Wrap",
                "imgSrc": "https://thelemonbowl.com/wp-content/uploads/2020/09/Falafel-Pita-Wrap.jpg",
                "price": 7,
                "description": "Crispy falafel, hummus, cucumber, tomato, and lettuce wrapped in a whole wheat tortilla.",
                "nutrition": {
                    "calories": 400,
                    "fat": "12g",
                    "carbs": "48g",
                    "protein": "12g"
                }
            },
            {
                "id": 3,
                "name": "Tandoori Chicken Sandwich",
                "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLoiI-qhjSs5Vcy7cGA83GJS710CynwzS8w&s",
                "price": 8.5,
                "description": "Marinated tandoori chicken, cucumber, and yogurt sauce on naan bread.",
                "nutrition": {
                    "calories": 540,
                    "fat": "22g",
                    "carbs": "55g",
                    "protein": "30g"
                }
            },
            {
                "id": 4,
                "name": "Vegetable Hummus Sandwich",
                "imgSrc": "https://simple-veganista.com/wp-content/uploads/2012/07/best-hummus-veggie-sandwich-8.jpg",
                "price": 6.5,
                "description": "Creamy hummus with roasted red peppers, cucumbers, and mixed greens on a whole grain bun.",
                "nutrition": {
                    "calories": 360,
                    "fat": "14g",
                    "carbs": "42g",
                    "protein": "10g"
                }
            },
            {
                "id": 5,
                "name": "Shawarma Chicken Pita",
                "imgSrc": "https://whatsgabycooking.com/wp-content/uploads/Chicken-Shawarma-Stuffed-Pita-Pockets.jpg",
                "price": 7.5,
                "description": "Spiced chicken shawarma with lettuce, tomatoes, and tahini sauce in a warm pita.",
                "nutrition": {
                    "calories": 480,
                    "fat": "20g",
                    "carbs": "42g",
                    "protein": "28g"
                }
            },
            {
                "id": 6,
                "name": "Grilled Veggie & Pesto Wrap",
                "imgSrc": "https://makinglifeblissful.com/wp-content/uploads/2020/09/Pesto-veggie-wrap-2.jpg",
                "price": 7,
                "description": "Grilled zucchini, bell peppers, and eggplant with pesto sauce in a whole wheat wrap.",
                "nutrition": {
                    "calories": 400,
                    "fat": "18g",
                    "carbs": "42g",
                    "protein": "10g"
                }
            },
            {
                "id": 7,
                "name": "Smoked Salmon & Avocado",
                "imgSrc": "https://seafoodbysykes.com/wp-content/uploads/shutterstock_1192802440-500x500.jpg",
                "price": 9,
                "description": "Smoked salmon with avocado, cream cheese, and mixed greens on a bagel.",
                "nutrition": {
                    "calories": 470,
                    "fat": "22g",
                    "carbs": "45g",
                    "protein": "24g"
                }
            },
            {
                "id": 8,
                "name": "Tuna & Cucumber Sandwich",
                "imgSrc": "https://thehealthfulideas.com/wp-content/uploads/2022/05/Tuna-Cucumber-Sandwich-SQUARE.jpg",
                "price": 6.5,
                "description": "Tuna salad with cucumber and lettuce on whole wheat bread.",
                "nutrition": {
                    "calories": 380,
                    "fat": "16g",
                    "carbs": "36g",
                    "protein": "22g"
                }
            },
            {
                "id": 9,
                "name": "Halloumi & Tomato Sandwich",
                "imgSrc": "https://static01.nyt.com/images/2024/06/17/multimedia/cm-halloumi-arugula-tomato-sandwich-chtm/cm-halloumi-arugula-tomato-sandwich-chtm-threeByTwoMediumAt2X.jpg",
                "price": 7,
                "description": "Grilled halloumi cheese with sliced tomatoes and arugula on ciabatta bread.",
                "nutrition": {
                    "calories": 450,
                    "fat": "22g",
                    "carbs": "40g",
                    "protein": "20g"
                }
            },
            {
                "id": 10,
                "name": "Egg & Avocado Sandwich",
                "imgSrc": "https://data.thefeedfeed.com/recommended/posts-8515443.jpg",
                "price": 6,
                "description": "Sliced hard-boiled eggs, avocado, and spinach on sourdough bread.",
                "nutrition": {
                    "calories": 420,
                    "fat": "20g",
                    "carbs": "38g",
                    "protein": "14g"
                }
            }
        
        
    ]
    
    
  }

export default menu