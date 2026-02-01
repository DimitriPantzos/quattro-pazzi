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
    id: "dinner",
    label: "Dinner",
    sections: [
      {
        title: "Antipasti",
        items: [
          { name: "Bruschetta Pomodoro", description: "Grilled bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil" },
          { name: "Calamari Fritti", description: "Lightly fried calamari served with marinara sauce and lemon aioli" },
          { name: "Burrata", description: "Creamy burrata with roasted peppers, arugula, and aged balsamic" },
          { name: "Polpette", description: "House-made meatballs in San Marzano tomato sauce with ricotta" },
          { name: "Antipasto Board", description: "Cured meats, imported cheeses, olives, roasted vegetables, and crostini" },
        ],
      },
      {
        title: "Insalate",
        items: [
          { name: "Caesar Salad", description: "Romaine hearts, house-made Caesar dressing, Parmigiano, and croutons" },
          { name: "Mediterranean Salad", description: "Mixed greens, cherry tomatoes, cucumber, olives, feta, and lemon vinaigrette" },
          { name: "Arugula & Pear", description: "Baby arugula, roasted pears, Gorgonzola, candied walnuts, and honey vinaigrette" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Penne alla Vodka", description: "Penne in a creamy tomato vodka sauce with a touch of crushed red pepper" },
          { name: "Linguine alle Vongole", description: "Linguine with littleneck clams, white wine, garlic, and fresh parsley" },
          { name: "Rigatoni Bolognese", description: "Rigatoni with slow-simmered meat sauce and Parmigiano-Reggiano" },
          { name: "Pappardelle al Ragu", description: "Fresh pappardelle with braised short rib ragu and pecorino" },
          { name: "Spaghetti Carbonara", description: "Spaghetti with pancetta, egg, Pecorino Romano, and black pepper" },
          { name: "Gnocchi Sorrentina", description: "Potato gnocchi with fresh mozzarella, basil, and San Marzano tomato sauce" },
          { name: "Cacio e Pepe", description: "Tonnarelli pasta with Pecorino Romano and black pepper" },
        ],
      },
      {
        title: "Secondi",
        items: [
          { name: "Chicken Parmigiana", description: "Breaded chicken cutlet with mozzarella and marinara, served with spaghetti" },
          { name: "Branzino", description: "Pan-seared Mediterranean sea bass with lemon, capers, and roasted vegetables" },
          { name: "Veal Marsala", description: "Tender veal scaloppine in Marsala wine sauce with mushrooms" },
          { name: "Salmon al Forno", description: "Oven-roasted salmon with herb crust, roasted potatoes, and seasonal vegetables" },
          { name: "NY Strip Steak", description: "12 oz grilled NY strip with roasted potatoes and sauteed spinach" },
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
    id: "brunch",
    label: "Brunch",
    sections: [
      {
        title: "Brunch Favorites",
        description: "Sunday Brunch, 11 AM - 3 PM",
        items: [
          { name: "Eggs Benedict", description: "Poached eggs, Canadian bacon, hollandaise on English muffin with breakfast potatoes" },
          { name: "Italian Omelette", description: "Prosciutto, mozzarella, roasted peppers, and basil with mixed greens" },
          { name: "Pancakes", description: "Buttermilk pancakes with fresh berries and maple syrup" },
          { name: "Avocado Toast", description: "Multigrain toast, smashed avocado, poached eggs, cherry tomatoes, everything seasoning" },
          { name: "French Toast", description: "Brioche French toast with mascarpone cream and seasonal fruit" },
          { name: "Brunch Burger", description: "Angus beef, fried egg, bacon, cheddar, brioche bun with fries" },
        ],
      },
      {
        title: "Brunch Cocktails",
        items: [
          { name: "Mimosa", description: "Prosecco and fresh-squeezed orange juice" },
          { name: "Bellini", description: "Prosecco and peach puree" },
          { name: "Bloody Mary", description: "House-made mix with premium vodka" },
          { name: "Espresso Martini", description: "Vodka, Kahlua, fresh espresso" },
        ],
      },
    ],
  },
  {
    id: "wine",
    label: "Wine & Cocktails",
    sections: [
      {
        title: "Red Wines by the Glass",
        items: [
          { name: "Chianti Classico", description: "Tuscany, Italy" },
          { name: "Montepulciano d'Abruzzo", description: "Abruzzo, Italy" },
          { name: "Barolo", description: "Piedmont, Italy" },
          { name: "Pinot Noir", description: "Sonoma, California" },
          { name: "Cabernet Sauvignon", description: "Napa Valley, California" },
        ],
      },
      {
        title: "White Wines by the Glass",
        items: [
          { name: "Pinot Grigio", description: "Veneto, Italy" },
          { name: "Sauvignon Blanc", description: "Marlborough, New Zealand" },
          { name: "Chardonnay", description: "Sonoma, California" },
          { name: "Prosecco", description: "Veneto, Italy" },
        ],
      },
      {
        title: "Signature Cocktails",
        items: [
          { name: "Classic Negroni", description: "Gin, Campari, sweet vermouth" },
          { name: "Aperol Spritz", description: "Aperol, Prosecco, soda" },
          { name: "Limoncello Martini", description: "Vodka, limoncello, fresh lemon" },
          { name: "Espresso Martini", description: "Vodka, Kahlua, fresh espresso" },
          { name: "Italian Mule", description: "Limoncello, ginger beer, fresh lime" },
        ],
      },
    ],
  },
]
