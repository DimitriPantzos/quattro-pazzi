export type MenuItem = {
  name: string
  description?: string
  price?: number
  tags?: string[]
}

export type MenuSection = {
  title: string
  description?: string
  items: MenuItem[]
}

export type MenuCategory = {
  id: string
  label: string
  sections: MenuSection[]
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "prix-fixe",
    label: "Prix Fixe - $20",
    sections: [
      {
        title: "Prix-Fixe Menu",
        description: "Monday to Friday - $20 per person. Choice of cup of Pasta Fagioli or side of House Salad, plus your choice of Salad, Sandwich, Pasta, or Entree",
        items: [],
      },
      {
        title: "Salads",
        items: [
          { name: "Chicken Milanese Caesar", description: "Breaded chicken cutlet topped with romaine caesar salad and shaved Parmigiano" },
          { name: "Tuna Italiano", description: "Italian olive oil tuna, arugula, cannellini beans, red onion, capers, lemon, and cherry tomatoes", tags: ["GF"] },
          { name: "Sliced Filet Mignon & Arugula", price: 8, description: "Shaved fennel, frisée, lemon olive oil, Parmigiano shavings, and cherry tomatoes", tags: ["GF", "+$8"] },
          { name: "Grilled Salmon", price: 4, description: "Mixed greens, cucumber, olives, red onions and shallot vinaigrette", tags: ["GF", "+$4"] },
          { name: "La Scala Chopped Salad", description: "Finely chopped romaine, chickpeas, red onions, italian salami, mozzarella and dijon vinaigrette", tags: ["GF"] },
          { name: "Arugula & Endive", description: "Arugula, endive, candied walnuts, apples and Gorgonzola cheese tossed in shallot vinaigrette", tags: ["GF"] },
        ],
      },
      {
        title: "Sandwiches",
        description: "Served with french fries",
        items: [
          { name: "Short Rib & Burrata", description: "Braised short rib, creamy burrata and caramelized onions on a pesto-seeded italian hero" },
          { name: "Eggplant Parm", description: "Breaded eggplant topped with mozzarella on a seeded italian hero" },
          { name: "Chicken Pesto Genovese", description: "Grilled chicken red peppers, mozzarella, caramelized onions, arugula on a seeded italian hero" },
          { name: "Italian Ham & Fontina", description: "Italian boiled ham with fontina cheese, arugula, peppers and balsamic reduction on a seeded italian hero" },
          { name: "Chicken Spicy Vodka Sauce", description: "Breaded chicken cutlet topped with mozzarella and spicy vodka on a seeded italian hero" },
          { name: "Chicken Caesar Wrap", description: "Grilled chicken, romaine, shaved Parmigiano and creamy caesar dressing wrapped in a wheat wrap" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Rigatoni Amatriciana", description: "Pasta with crispy guanciale, tomato sauce, chili flakes, Pecorino Romano" },
          { name: "Casarecce with Butternut Squash", description: "Short twists shaped pasta, roasted butternut squash pumpkin seeds, sage, asparagus and cream sauce" },
          { name: "Gnocchi Sorrentino", description: "Fresh made gnocchi topped with tomato sauce, mozzarella and basil" },
          { name: "Capellini Piselli & Prosciutto", description: "Peas and prosciutto in a tomato cream sauce and Parmigiano" },
          { name: "Spicy Penne Vodka Sauce", description: "Calabrian chilies in a tomato pink sauce, basil and Parmigiano" },
          { name: "Mafaldine al Limone", description: "Lemon zest, light cream sauce with Parmigiano" },
          { name: "Fettuccine al Pomodoro", description: "Fresh housemade fettuccine with our tomato sauce, basil and Parmigiano" },
          { name: "Cavatelli alla Toscana", description: "Fresh housemade cavatelli with sweet sausage, arugula, cherry tomatoes, tuscan beans and garlic oil" },
          { name: "Burrata Cheese Ravioli", description: "Fresh housemade burrata cheese filled raviolli, campari fresh tomato sauce, Parmigiano and basil" },
        ],
      },
      {
        title: "Entrees",
        items: [
          { name: "Pan Seared Salmon", price: 8, description: "Pan seared salmon over sautéed spinach and white tuscan beans with white wine sauce", tags: ["GF", "+$8"] },
          { name: "Eggplant Parmigiana", description: "Classic italian breaded eggplant and mozzarella in a tomato sauce. Served with penne pasta" },
          { name: "Lemon Herb Grilled Chicken", description: "Grilled chicken breast marinated with fresh herbs and lemon, served with sautéed broccoli", tags: ["GF"] },
          { name: "Veal Milanese", price: 11, description: "Served with arugula, cherry tomatoes, shaved Parmigiano Reggiano, and extra-virgin olive oil", tags: ["+$11"] },
          { name: "Chicken with Mushrooms", description: "Sautéed crimini mushrooms in a rich Sicilian marsala wine reduction, broccoli rabe and garlic oil" },
          { name: "Linguine Frutti di Mare", price: 10, description: "Shrimp, clams, mussels, garlic, white wine, finished with Campari tomatoes, chili flakes, and basil", tags: ["+$10"] },
          { name: "Shrimp Scampi", price: 11, description: "Shrimp sautéed in garlic and olive white wine, lemon, parsley, and a touch of butter, served over Capellini", tags: ["+$11"] },
          { name: "Chicken Bolognese", description: "Breaded chicken cutlet topped with prosciutto cotto, Parmigiano, asparagus and lemon" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    sections: [
      {
        title: "Appetizers & Salads",
        items: [
          { name: "Spicy Shrimp", price: 18, description: "Cherry tomatoes, butter, garlic, white wine, parsley & Calabrian chilies" },
          { name: "Fried Montauk Calamari", price: 18, description: "With spicy marinara sauce" },
          { name: "Bruschetta", price: 13, description: "Toasted Italian sesame bread, tomatoes, onions, basil, balsamic reduction" },
          { name: "Baked Clams Oreganata", price: 18, description: "Breadcrumb oreganata, lemon & white wine" },
          { name: "Breaded Eggplant Tower", price: 15, description: "Topped with mozzarella and tomato sauce" },
          { name: "Classic Caesar", price: 14, description: "House made croutons & parmigiano shaving" },
          { name: "Avocado Salad", price: 16, description: "Endive, tomatoes, onions, Romaine, lemon & parmigiano cheese", tags: ["GF"] },
          { name: "Quattro Salad", price: 15, description: "Endive, radicchio, arugula, frisée, Gorgonzola, white balsamic dressing", tags: ["GF"] },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Rigatoni Buttera", price: 28, description: "Hot sausage & sweet peas in a pink sauce, topped with ricotta cheese" },
          { name: "Cavatelli Marcopolo", price: 29, description: "Chicken, sun dried tomatoes, broccoli in garlic & oil sauce" },
          { name: "Cavatelli w/ Pesto Shrimp", price: 28, description: "White shrimp, pesto sauce & arugula", tags: ["GF"] },
          { name: "Gnocchi w/Pesto", price: 27, description: "Potato gnocchi, burrata cheese, pignoli nuts" },
          { name: "Four Cheese Tortelloni", price: 27, description: "Peas, prosciutto, mushrooms & cream sauce", tags: ["GF"] },
          { name: "Spicy Rigatoni w/Chicken", price: 28, description: "Tender pieces of chicken, sun dried tomatoes in pink sauce", tags: ["GF"] },
          { name: "Linguini Pescatore", price: 32, description: "Shrimp, scallops, mussels & manilla clams in a spicy marinara sauce" },
          { name: "Fettuccine Mitty", price: 30, description: "Chopped scallops, shrimp, crab meat in a pink sauce" },
          { name: "Orecchiette w/Meatballs", price: 28, description: "Beef & pork meatballs in tomato sauce" },
        ],
      },
      {
        title: "Entrees",
        items: [
          { name: "Chicken Sofia Loren", price: 29, description: "Fontina cheese and wine sauce over spinach" },
          { name: "Kicked Up Chicken Milanese", price: 29, description: "Prosciutto, stracciatella cheese and pesto topped with arugula salad" },
          { name: "Chicken Picatta", price: 29, description: "Lemon white wine caper sauce over spinach" },
          { name: "Italian Chicken Parm", price: 29, description: "Tomato sauce, mozzarella & penne pasta", tags: ["GF"] },
          { name: "Veal Sorrentina", price: 31, description: "Sherry wine and tomato sauce over eggplant, prosciutto & mozzarella" },
          { name: "Wild Caught Cod", price: 36, description: "Potato purée, julienne vegetables & lemon butter", tags: ["GF"] },
        ],
      },
    ],
  },
  {
    id: "dinner",
    label: "Dinner",
    sections: [
      {
        title: "Appetizers",
        items: [
          { name: "Chicken Wings Scarpariello Style", price: 15, description: "10pcs. Crispy garlic, hot cherry peppers, lemon zest and parsley" },
          { name: "Fresh Fried Calamari", price: 18, description: "Spicy tomato sauce" },
          { name: "Burrata for Two", price: 18, description: "18 months Prosciutto, roasted peppers and e.v.o.o", tags: ["GF"] },
          { name: "Fritto Misto", price: 23, description: "Fried calamari, shrimp, zucchini and lemon zest aioli" },
          { name: "Baked Clams Oreganata", price: 18, description: "Breadcrumb oreganata, lemon and white wine" },
          { name: "Fried Mozzarella Bocconcini", price: 16, description: "Served with tomato sauce" },
          { name: "Crostoni with Beef Tenderloin", price: 17, description: "Italian Filone bread, caramelized red onions and gorgonzola cheese" },
          { name: "Spicy Shrimp", price: 18, description: "Cherry tomato, butter, garlic, white wine and parsley", tags: ["GF"] },
          { name: "Grilled Calamari", price: 18, description: "Tuscan white beans, red onion, tomato concassé, fresh parsley, and lemon", tags: ["GF"] },
        ],
      },
      {
        title: "Veggies",
        items: [
          { name: "Pasta e Fagioli", price: 14, description: "Bowl Papa's pasta and bean soup" },
          { name: "Buffalo Cauliflower", price: 15, description: "Chives, buffalo sauce, and ranch" },
          { name: "Eggplant Tower", price: 15, description: "Topped with mozzarella and tomato sauce" },
          { name: "Broccoli Rabe with Hot Peppers", price: 11, description: "Sautéed with cherry hot peppers, garlic, and extra-virgin olive oil", tags: ["GF"] },
          { name: "Cannellini Beans & Spinach", price: 11, description: "Braised beans and garlic oil", tags: ["GF"] },
          { name: "Green Asparagus", price: 12, description: "Grilled, topped with Parmigiano Reggiano", tags: ["GF"] },
          { name: "Creamed Spinach", price: 11, description: "Sautéed with garlic, in a light cream Parmigiano" },
          { name: "Truffle Fries", price: 11, description: "Crispy fries tossed with truffle oil topped with Parmigiano housemade aioli" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Classic Caesar", price: 14, description: "House made croutons and Parmigiano shavings" },
          { name: "Arugula & Endive Salad", price: 15, description: "Candied walnuts and apples & Gorgonzola shallot vinaigrette", tags: ["GF"] },
          { name: "Quattro Salad", price: 15, description: "Arugula, radicchio, endive, Frisée, shaved fennel, Gorgonzola and white balsamic vinaigrette", tags: ["GF"] },
          { name: "Caesar Salad Milanese", price: 25, description: "Breaded chicken topped with caesar salad, pesto, croutons, lemon zest and Parmigiano shavings" },
          { name: "Avocado & Tomato Salad", price: 16, description: "Endive, campari tomatoes, red onions, basil, lemon, and Parmigiano", tags: ["GF"] },
          { name: "La Scala Chopped Salad", price: 16, description: "Romaine, chickpeas, salami, shredded mozzarella, red onions and italian dressing" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Spicy Penne Vodka", price: 24, description: "Calabrian chillies in a pink vodka sauce" },
          { name: "Chitarra with Shrimp Scampi", price: 32, description: "Lemon butter wine sauce topped with aromatic bread crumbs" },
          { name: "Burrata Filled Ravioli", price: 27, description: "Fresh Campari tomatoes, basil, and Parmigiano" },
          { name: "Gnocchi with Basil Pesto", price: 27, description: "Topped with burrata cheese, toasted pignoli nuts and Parmigiano" },
          { name: "Pappardelle with Short Rib Ragu", price: 32, description: "Braised beef topped with cacio & pepe sauce" },
          { name: "Mafaldine al Limone", price: 24, description: "Lemon zest, Parmigiano, butter, black pepper and light cream" },
          { name: "Gnocchi Bolognese", price: 28, description: "Beef and pork ragu with a touch of cream" },
          { name: "Casarecce Pasta with Butternut Squash", price: 26, description: "Roasted butternut squash, pumpkin seeds, sage, asparagus and cream sauce" },
          { name: "Cavatelli Marco Polo", price: 29, description: "Chicken, sun dried tomatoes and broccoli in a garlic oil" },
          { name: "Fettucine Mitty", price: 30, description: "Scallops, shrimp and lump crabmeat in a pink cognac sauce" },
          { name: "Pappardelle with Wild Mushrooms", price: 27, description: "Sun dried tomato, gorgonzola cream sauce and white truffle oil" },
          { name: "Capellini with Fall Vegetables", price: 25, description: "Carrots, asparagus, cauliflower, zucchini, fresh tomatoes and garlic oil" },
          { name: "Linguine Pescatore", price: 32, description: "Linguine tossed with shrimp, scallops, Manila clams and mussels in a spicy marinara sauce" },
          { name: "Orecchiette with Tiny Meatballs", price: 28, description: "Beef and pork meatballs in a tomato sauce" },
          { name: "Rigatoni Amatriciana", price: 26, description: "Pasta with crispy guanciale, tomato sauce, chili flakes, Pecorino Romano" },
          { name: "Tagliatelle Prosciutto & Truffle Cream", price: 31, description: "Silky white truffle cream, ribbons of prosciutto, Parmigiano" },
          { name: "Rigatoni Buttera", price: 28, description: "Hot sausage, sweet peas in a pink sauce topped with ricotta" },
          { name: "Orecchiette Broccoli Rabe & Cevelata Sausage", price: 27, description: "Cheese & parsley Italian sausage, broccoli rabe, beans and garlic" },
          { name: "Capellini Peas & Prosciutto", price: 26, description: "Pink tomato sauce" },
          { name: "Paccheri with Nduja & Stracciatella", price: 26, description: "Spicy spreadable calabrian sausage topped with creamy stracciatella cheese in a tomato sauce" },
          { name: "Spaghetti with Cacio e Pepe D.O.P.", price: 25, description: "Cracked pepper and cacio Pecorino Romano D.O.P." },
          { name: "Linguine & Manilla Clams", price: 29, description: "Manila clams, garlic, chili flakes and parsley" },
        ],
      },
      {
        title: "Main Entrees",
        items: [
          { name: "Chicken Sofia Loren", price: 29, description: "Spinach, fontina cheese in a white wine sauce" },
          { name: "Chicken Pazzo", price: 29, description: "Prosciutto cotto, asparagus, burrata cream and cacio e pepe sauce" },
          { name: "Kicked Up Chicken Milanese", price: 29, description: "Prosciutto, stracciatella cheese and pesto topped with arugula salad" },
          { name: "Grilled Salmon", price: 33, description: "Sautéed spinach & tuscan beans and white wine", tags: ["GF"] },
          { name: "Veal Sorrentina", price: 31, description: "Eggplant, prosciutto, mozzarella, tomato sauce and sherry wine" },
          { name: "Parmigiano Encrusted Sole", price: 36, description: "Sautéed spinach in a lemon white sauce" },
          { name: "Medallions of Filet Mignon", price: 42, description: "Gnocchi with peas, mushrooms and Gorgonzola cream sauce" },
          { name: "Chianti Braised Short Rib", price: 37, description: "Yukon gold mashed potatoes and baby carrots" },
          { name: "Chicken Vodka Parm", price: 29, description: "Served with a side penne in a vodka sauce" },
          { name: "Eggplant Parmigiana", price: 27, description: "Served with a side penne in a tomato sauce" },
          { name: "Lemon & Herb Grilled Chicken", price: 28, description: "Sautéed broccoli in garlic and oil" },
          { name: "Italian Chicken Parm", price: 29, description: "Tomato sauce, mozzarella and penne pasta" },
          { name: "Wild Caught Cod", price: 36, description: "Potato purée, julienne vegetables and lemon butter", tags: ["GF"] },
        ],
      },
      {
        title: "Gluten Free Options",
        items: [
          { name: "Cavatelli with Pesto Shrimp", price: 28, description: "White shrimp, pesto sauce and arugula", tags: ["GF"] },
          { name: "Four Cheese Tortelloni", price: 26, description: "Peas, prosciutto, mushrooms and cream sauce", tags: ["GF"] },
          { name: "Gnocchi Sorrentina", price: 26, description: "Topped with fresh mozzarella and tomato sauce", tags: ["GF"] },
        ],
      },
    ],
  },
  {
    id: "wine",
    label: "Wine & Cocktails",
    sections: [
      {
        title: "Prosecco / Rosé",
        items: [
          { name: "Bisol Jeio Valdobbiadene Brut Prosecco", price: 13 },
          { name: "Chiaretto Bardolino Classico Rosé Zeni 2024", price: 13 },
          { name: "Primitivo Rosato Masseria Borgo dei Trulli", price: 13 },
        ],
      },
      {
        title: "White Wines by the Glass",
        items: [
          { name: "Cave Spring Riesling Niagara 2022", price: 13 },
          { name: "La Creama Chardonnay Sonoma Coast 2023", price: 15 },
          { name: "Parolvini Pinot Grigio Venezia 2023", price: 13 },
          { name: "Three Finger Jack Chardonnay 2020", price: 14 },
          { name: "Picollo Ernesto Gavi di Gavi 2024", price: 15 },
          { name: "Fernhook Sauvignon Blanc, NZ 2023", price: 15 },
          { name: "Islan Sancere Blanc, France 2022", price: 17 },
        ],
      },
      {
        title: "Red Wines by the Glass",
        items: [
          { name: "Allumea Organic Nero d'Avola & Merlot Sicily 2023", price: 12 },
          { name: "Duck Pond Pinot Noir Willamette Valley Oregon", price: 14 },
          { name: "Castorani Organic Montepulciano d'Abruzzo 2021", price: 14 },
          { name: "Chianti Classico Tomaiolo Italy 2019", price: 14 },
          { name: "Ziobaffa Organic, Toscan Italy 2020", price: 15 },
          { name: "Educated Guess Cabernet", price: 15 },
          { name: "Freakshow by Michael David 2022", price: 16 },
        ],
      },
      {
        title: "Cocktails",
        description: "$16",
        items: [
          { name: "The Quattro", description: "Kentucky bourbon, peach bellini, thyme" },
          { name: "Cosmo Pazzi", description: "Tito's vodka, malibu rum, cranberry, lime, Coconut rim" },
          { name: "Bourbon Lemon Drop", description: "Bourbon, limoncello, sour mix, mint" },
          { name: "Rubi", description: "Citrus vodka, grapefruit, lime juice, syrup" },
          { name: "Italian Paloma", description: "Tequila, grapefruit, cranberry Juice, lime" },
          { name: "Gunpowder Gimlet", description: "Gunpowder gin, lemon juice, syrup" },
          { name: "Coconut Espresso Martini", description: "Coconut tequila, fresh espresso coffee, kahlua, baileys" },
          { name: "Pisco Sour", description: "Pisco, fresh lime juice, syrup, pasteurized egg white" },
          { name: "Paziamo", description: "Tito's vodka, peach bellini, prosecco" },
          { name: "Paper Plane", description: "Bourbon, aperol, amaro, fresh lemon juice" },
          { name: "Aperol Grapefruit Margarita", description: "Aperol, tequila blanco, grapefruit, lime juice, syrup" },
          { name: "Pallini Lemon Bitters", description: "Pallini Limoncello. Tonic water, aromatic bitters, lemon" },
          { name: "Italian Breeze", description: "Malibu rum, strawberry puree, pineapple juice, prosecco" },
          { name: "Sicilian Negroni", description: "Orange gin, campari, sweet vermouth" },
        ],
      },
      {
        title: "Martinis",
        description: "$16",
        items: [
          { name: "The Quattro", description: "Kentucky bourbon, peach bellini, thyme" },
          { name: "Cosmo Pazzi", description: "Tito's vodka, malibu Rum, cranberry & lime juice, coconut rim" },
          { name: "Bourbon Lemon Drop", description: "Bourbon, limoncello, sour mix, mint" },
          { name: "Rubi", description: "Citrus vodka, grapefruit, lime juice, syrup" },
          { name: "Italian Paloma", description: "Tequila, grapefruit, cranberry Juice, lime" },
          { name: "Gunpowder Gimlet", description: "Gunpowder gin, lemon juice, syrup" },
          { name: "Coconut Espresso Martini", description: "Coconut tequila, fresh espresso coffee, kahlua, baileys" },
          { name: "Pisco Sour", description: "Pisco, fresh lime juice, syrup, pasteurized egg white" },
          { name: "Paziamo", description: "Tito's vodka, peach bellini, prosecco" },
        ],
      },
      {
        title: "Mocktails",
        description: "$12",
        items: [
          { name: "Tropical Passion", description: "Pineapple, passion fruit purée, syrup, club soda" },
          { name: "Peach Spritz", description: "Peach purée, lime juice, syrup, club soda" },
          { name: "Mango Mojito", description: "Fresh mango purée, mint, syrup, lime, club soda" },
        ],
      },
      {
        title: "Sangrias",
        description: "$16",
        items: [
          { name: "Seasonal Red or White Sangria", price: 16 },
        ],
      },
      {
        title: "Beer",
        items: [
          { name: "Moretti", price: 7.5 },
          { name: "Stella Artois", price: 8.5 },
          { name: "Stella Non-Alcoholic", price: 7.5 },
          { name: "Peroni", price: 8.5 },
          { name: "Peroni Non-Alcoholic", price: 7.5 },
          { name: "Two Roads Road to Ruin", price: 7.5 },
          { name: "Sierra Nevada (Pale-Ale)", price: 7.5 },
          { name: "Corona", price: 7.5 },
          { name: "Corona Light", price: 7.5 },
        ],
      },
      {
        title: "Draft Beer",
        items: [
          { name: "Estrella", price: 8.5 },
          { name: "Two Roads Honeyspot", price: 8.5 },
        ],
      },
    ],
  },
]
