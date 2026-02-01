export type MenuItem = {
  name: string
  description?: string
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
        title: "Starters",
        items: [
          { name: "Soup of the Day", description: "Chef's daily selection, served with fresh bread" },
          { name: "Bruschetta", description: "Fresh tomatoes, basil, garlic on grilled bread" },
          { name: "Calamari", description: "Lightly fried with marinara and lemon aioli" },
        ],
      },
      {
        title: "Sandwiches & Panini",
        items: [
          { name: "Chicken Pesto Panini", description: "Grilled chicken, fresh mozzarella, roasted peppers, pesto on ciabatta" },
          { name: "Italian Club", description: "Prosciutto, capicola, fresh mozzarella, lettuce, tomato, balsamic aioli" },
          { name: "Eggplant Parmigiana Panini", description: "Breaded eggplant, marinara, melted mozzarella on ciabatta" },
          { name: "Grilled Salmon BLT", description: "Grilled salmon, bacon, lettuce, tomato, herb mayo on sourdough" },
        ],
      },
      {
        title: "Lunch Pastas",
        items: [
          { name: "Penne alla Vodka" },
          { name: "Spaghetti Bolognese" },
          { name: "Fettuccine Alfredo", description: "Add chicken or shrimp" },
          { name: "Linguine Primavera", description: "Seasonal vegetables in garlic olive oil or cream sauce" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Caesar Salad", description: "Add chicken or shrimp" },
          { name: "Grilled Chicken Salad", description: "Mixed greens, avocado, tomato, cucumber, balsamic vinaigrette" },
          { name: "Chopped Italian Salad", description: "Romaine, salami, provolone, chickpeas, pepperoncini, red wine vinaigrette" },
        ],
      },
    ],
  },
  {
    id: "happy-hour",
    label: "Happy Hour",
    sections: [
      {
        title: "Happy Hour Bites",
        description: "Monday - Friday, 3 PM - 6 PM",
        items: [
          { name: "Bruschetta" },
          { name: "Meatballs (3)" },
          { name: "Calamari" },
          { name: "Margherita Flatbread" },
          { name: "Arancini (3)", description: "Fried risotto balls with marinara" },
        ],
      },
      {
        title: "Happy Hour Drinks",
        items: [
          { name: "House Wine", description: "Red or white by the glass" },
          { name: "Draft Beer", description: "Selection of local and imported beers" },
          { name: "Classic Cocktails", description: "Negroni, Aperol Spritz, or Limoncello Martini" },
          { name: "Prosecco", description: "Italian sparkling wine" },
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
