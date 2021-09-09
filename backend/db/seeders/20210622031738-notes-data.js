"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          userId: 1,
          notebookId: 1,
          title: "Crispy Gau Gee",
          content: JSON.stringify({
            ops: [
              {
                attributes: {
                  italic: true,
                },
                insert:
                  "Crispy Gau Gee is a fun-to-make delicious local favorite that's great to share at your next potluck or family gathering!",
              },
              {
                insert: "\n\n",
              },
              {
                insert: {
                  image:
                    "https://www.foodland.com/files/styles/688_466/public/fl13_1180crispygaugee.jpg?itok=fXf2Jx4D",
                },
              },
              {
                insert: "\n",
              },
              {
                attributes: {
                  background: "#f2fbb1",
                  color: "#000000",
                },
                insert:
                  "Recipe from: https://www.foodland.com/recipe/crispy-gau-gee",
              },
              {
                insert: "\n\nIngredients",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert: "1 pound ground pork",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1⁄4 cup chopped green onion",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 can sliced water chestnuts drained (chopped)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert:
                  "1⁄4 pound fresh raw shrimp, peeled and deveined (chopped fine)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert:
                  "1 thumb sized piece of fresh ginger (peeled and chopped fine)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 cloves garlic (peeled and minced)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 tablespoons oyster sauce",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 tablespoons shoyu",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "48 won ton wrappers",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "\nInstructions",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert:
                  "In a mixing bowl, add all ingredients except the won-ton wrappers. Mix well.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "When done, lay out won-ton wrappers in batches of 12 and fill each with one rounded tablespoon of mixed pork hash in center of each wrapper.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Using water and a moistened finger, wet edges of won-ton, fold in half and press edges to seal. Finish all 48 wrappers.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Heat vegetable oil to 350 degrees and deep fry until won-tons are golden brown. Drain on paper towels.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Serve with shoyu-mustard sauce.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "\n",
              },
            ],
          }),
          color: "#fffcb3",
        },

        {
          userId: 1,
          notebookId: 1,
          title: "Meat Jun",
          content: JSON.stringify({
            ops: [
              {
                attributes: {
                  italic: true,
                },
                insert:
                  "Hard to resist this local favorite, Chef Keoni Chang shares his delicious recipe for Meat Jun!",
              },
              {
                insert: "\n\n",
              },
              {
                insert: {
                  image:
                    "https://www.foodland.com/files/styles/688_466/public/meat-jun_1.jpg?itok=SnLRgqeZ",
                },
              },
              {
                insert: "\n\nIngredients",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert:
                  "1 pound premium choice certified angus beef® rib eye, top sirloin, cross rib, etc; very thinly sliced",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "3⁄4 cups soy sauce",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 cloves garlic, minced",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "3⁄4 cups sugar",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1⁄2 cup water",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "8 eggs, beaten",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "flour, as needed",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "canola oil, as needed",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "\n",
              },
              {
                attributes: {
                  italic: true,
                },
                insert: "Dipping Sauce",
              },
              {
                insert: "\n1⁄3 cup soy sauce",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 tablespoon rice wine vinegar",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 teaspoon sesame oil",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "pinch red pepper or black pepper",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "\nInstructions",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert: "Flour meat, dip in beaten eggs, and pan fry in oil.\n",
              },
            ],
          }),
          color: "#ff9e9e",
        },

        {
          userId: 1,
          notebookId: 1,
          title: "Portuguese Bean Soup",
          content: {
            ops: [
              {
                attributes: {
                  italic: true,
                },
                insert:
                  "Packed with smoked ham hocks, portuguese sausage, veggies and pasta, there's nothing more cozy than a bowl of Portuguese Bean Soup! Chef Keoni shares a few tips on how to make this Hawaii favorite. ",
              },
              {
                insert: "\n\n",
              },
              {
                insert: {
                  image:
                    "https://www.foodland.com/files/styles/688_466/public/Soup%209.jpg?itok=eAVsqblW",
                },
              },
              {
                insert:
                  "\nRecipe from: https://www.foodland.com/recipe/portuguese-bean-soup-0\n\nIngredients",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert: "2 tablespoons canola oil",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 Portuguese sausage (sliced or cubed 1/2 inch)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 garlic cloves (minced)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 medium onion (chopped)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 large carrots (peeled and diced 1/2 inch)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 celery stalks (diced 1/2 inch)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "3 smoked ham hocks",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 cans kidney beans (15 ounce, liquid included)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 can crushed tomatoes (16 ounce)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 tablespoon Chinese chili sauce (sambal olek)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 can tomato sauce (16 ounce)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 quarts chicken broth or water",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert:
                  "1⁄2 medium head of cabbage (core removed, cubed 1 inch)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 large potatoes (peeled, cubed 3/4 inch)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 cup elbow macaroni (cooked al dente)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 teaspoon salt",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1⁄2 teaspoon pepper",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "\nInstructions",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert: "Heat oil in the pot and add the sausage.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Once lightly browned, add the onions, carrots, garlic, and celery to the pot.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Add the ham hocks, kidney beans, crushed tomatoes, tomato sauce, chili sauce and chicken stock to the pot.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Bring to a simmer and cook for 1 hour.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Remove the ham hocks from the pot and let cool. Add the cabbage and potatoes and let it simmer for 10 minutes.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Remove the meat from the ham hocks. Dice the meat and add it back to the soup.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Adjust consistency and seasoning with additional chicken stock, salt, pepper, and chili sauce.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Add cooked macaroni as desired.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "\n",
              },
            ],
          },
          color: "#ffc37d",
        },

        {
          userId: 1,
          notebookId: 1,
          title: "Spam Musubi",
          content: {
            ops: [
              {
                attributes: {
                  italic: true,
                },
                insert:
                  "Chef Keoni makes an island classic - Spam Musubi! Add a layer of takuan (pickled daikon) or ume (Japanese pickled plum) for added flavor. ",
              },
              {
                insert: "\n\n",
              },
              {
                insert: {
                  image:
                    "https://www.foodland.com/files/styles/688_466/public/DSC_5397.JPG?itok=ic5Gs-aO",
                },
              },
              {
                insert:
                  "\nRecipe from: https://www.foodland.com/recipe/spam-musubi\n\nIngredients",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert: "8 slices spam (one can will yield 8 thick slices)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1⁄4 cup shoyu",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "3 tablespoons granulated sugar",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "4 cups cooked calrose rice",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "4 sheet nori, toasted and cut in half lengthwise",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "furikake, as needed",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "\nInstructions",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert:
                  "Heat a saute pan large enough to hold the slices of spam in a single layer.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Place the slices of spam into the pan and allow it to lightly brown. Flip the pieces and allow them to brown.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Pour the shoyu over the spam and drizzle in the sugar.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Allow the Shoyu/sugar reduce and glaze the spam. When the shoyu is syrupy, remove from heat.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Wet the musubi mold with water and place on a working surface.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Place 1 cup of rice into the mold. Press it down with the included press so the rice is nicely molded and firmly packed. Be careful not to overly press it and overly compact the rice. Remove the mold.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Sprinkle the top of the rice with a little furikake.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Place a slice of spam on the rice.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Take a piece of nori and wrap the spam/rice block. To seal, lightly wet the edge of the nori.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Repeat with the other 7 slices.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "\nNote: The spam can be easily cut with a spam cutter, which typically yields 10 thinner slices. You may also adjust the thickness of spam, and amount of rice to achieve your personal preference.\nThere are many variations off of this basic recipe. You may eliminate the shoyu glaze, add in sriracha. Many also add in a slice of fried egg into their musubi.\n",
              },
            ],
          },
          color: "#85ecd9",
        },

        {
          userId: 1,
          notebookId: 1,
          title: "Ultimate Laulau",
          content: {
            ops: [
              {
                attributes: {
                  italic: true,
                },
                insert:
                  "Get ready to feast your eyes! Chef Keoni combines the delicious flavors of pork, beef, butterfish & sweet potato to make the Ultimate Laulau.",
              },
              {
                insert: "\n\n",
              },
              {
                insert: {
                  image:
                    "https://www.foodland.com/files/styles/688_466/public/LauLau.DSC_7415.jpg?itok=oLOwvvtA",
                },
              },
              {
                insert:
                  "\nRecipe from: https://www.foodland.com/recipe/ultimate-laulau\n\nIngredients",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert: "10 ti leaves (washed and ribs removed)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 packages lu",
              },
              {
                attributes: {
                  background: "#d1ebb8",
                  color: "#000000",
                },
                insert: "’",
              },
              {
                insert:
                  "au (taro) leaves (washed and stems removed, peeled and cut into 2 in. sections)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert:
                  "1 pound beef boneless short ribs or chuck or pork butt (cut into 2 in. chunks)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert:
                  "1 pound pork belly (skin removed and cut into 1 in. chunks)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "1 pound salted butterfish (cut into 1 in. chunks)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "2 medium sweet potatoes (washed and cut into chunks)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "ala",
              },
              {
                attributes: {
                  background: "#d1ebb8",
                  color: "#000000",
                },
                insert: "’",
              },
              {
                insert: "e salt (as needed)",
              },
              {
                attributes: {
                  list: "bullet",
                },
                insert: "\n",
              },
              {
                insert: "\nInstructions",
              },
              {
                attributes: {
                  header: 2,
                },
                insert: "\n",
              },
              {
                insert:
                  "Divide luau leaves into 5 portions. That is how many leaves will be used per laulau.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Take 2 ti leaves and place them on a flat surface in an X pattern.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "In one hand, stack 1 portion of luau leaves. In the center of the top leaf, place 1/5 of the pork butt, pork belly, butterfish and sweet potato in a mound. Sprinkle with a teaspoon of ala",
              },
              {
                attributes: {
                  background: "#d1ebb8",
                  color: "#000000",
                },
                insert: "’",
              },
              {
                insert: "e salt.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Wrap the the lu’au leaves around the meat mixture into a tight bundle.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Place the bundle in the center of the Ti leaves.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Wrap the ti leaves around the lu’au leaf bundle.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Using the stem end of one of the Ti leaves, cinch a knot around the top of the bundle, creating a little wrapped package.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Finish with the other 4 laulau.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "In a pot large enough to hold the 5 laulau, create a steamer. Place a 1 inch oven proof dish in the bottom, upside down and fill with 1 inch of water.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Place the laulau on the inverted oven proof dish.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Bring the water to a boil and then lower to a simmer.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert:
                  "Steam for 4 hours, checking the water level making sure the pot doesn’t go dry.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "Remove and serve.",
              },
              {
                attributes: {
                  list: "ordered",
                },
                insert: "\n",
              },
              {
                insert: "\n",
              },
            ],
          },
          color: "#d1ebb8",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
