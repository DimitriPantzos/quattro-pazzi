export type MenuItem = {
  name: string
  description?: string
  price?: string
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
          { name: "Bruschetta Pomodoro", description: "Grilled bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil", price: "14" },
          { name: "Calamari Fritti", description: "Lightly fried calamari served with marinara sauce and lemon aioli", price: "16" },
          { name: "Burrata", description: "Creamy burrata with roasted peppers, arugula, and aged balsamic", price: "18" },
          { name: "Polpette", description: "House-made meatballs in San Marzano tomato sauce with ricotta", price: "15" },
          { name: "Antipasto Board", description: "Cured meats, imported cheeses, olives, roasted vegetables, and crostini", price: "22" },
        ],
      },
      {
        title: "Insalate",
        items: [
          { name: "Caesar Salad", description: "Romaine hearts, house-made Caesar dressing, Parmigiano, and croutons", price: "14" },
          { name: "Mediterranean Salad", description: "Mixed greens, cherry tomatoes, cucumber, olives, feta, and lemon vinaigrette", price: "15" },
          { name: "Arugula & Pear", description: "Baby arugula, roasted pears, Gorgonzola, candied walnuts, and honey vinaigrette", price: "16" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Penne alla Vodka", description: "Penne in a creamy tomato vodka sauce with a touch of crushed red pepper", price: "22" },
          { name: "Linguine alle Vongole", description: "Linguine with littleneck clams, white wine, garlic, and fresh parsley", price: "26" },
          { name: "Rigatoni Bolognese", description: "Rigatoni with slow-simmered meat sauce and Parmigiano-Reggiano", price: "24" },
          { name: "Pappardelle al Ragu", description: "Fresh pappardelle with braised short rib ragu and pecorino", price: "28" },
          { name: "Spaghetti Carbonara", description: "Spaghetti with pancetta, egg, Pecorino Romano, and black pepper", price: "23" },
          { name: "Gnocchi Sorrentina", description: "Potato gnocchi with fresh mozzarella, basil, and San Marzano tomato sauce", price: "22" },
          { name: "Cacio e Pepe", description: "Tonnarelli pasta with Pecorino Romano and black pepper", price: "21" },
        ],
      },
      {
        title: "Secondi",
        items: [
          { name: "Chicken Parmigiana", description: "Breaded chicken cutlet with mozzarella and marinara, served with spaghetti", price: "26" },
          { name: "Branzino", description: "Pan-seared Mediterranean sea bass with lemon, capers, and roasted vegetables", price: "32" },
          { name: "Veal Marsala", description: "Tender veal scaloppine in Marsala wine sauce with mushrooms", price: "30" },
          { name: "Salmon al Forno", description: "Oven-roasted salmon with herb crust, roasted potatoes, and seasonal vegetables", price: "28" },
          { name: "NY Strip Steak", description: "12 oz grilled NY strip with roasted potatoes and sauteed spinach", price: "38" },
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
          { name: "Soup of the Day", description: "Chef's daily selection, served with fresh bread", price: "9" },
          { name: "Bruschetta", description: "Fresh tomatoes, basil, garlic on grilled bread", price: "12" },
          { name: "Calamari", description: "Lightly fried with marinara and lemon aioli", price: "14" },
        ],
      },
      {
        title: "Sandwiches & Panini",
        items: [
          { name: "Chicken Pesto Panini", description: "Grilled chicken, fresh mozzarella, roasted peppers, pesto on ciabatta", price: "16" },
          { name: "Italian Club", description: "Prosciutto, capicola, fresh mozzarella, lettuce, tomato, balsamic aioli", price: "17" },
          { name: "Eggplant Parmigiana Panini", description: "Breaded eggplant, marinara, melted mozzarella on ciabatta", price: "15" },
          { name: "Grilled Salmon BLT", description: "Grilled salmon, bacon, lettuce, tomato, herb mayo on sourdough", price: "18" },
        ],
      },
      {
        title: "Lunch Pastas",
        items: [
          { name: "Penne alla Vodka", price: "18" },
          { name: "Spaghetti Bolognese", price: "19" },
          { name: "Fettuccine Alfredo", description: "Add chicken or shrimp", price: "17" },
          { name: "Linguine Primavera", description: "Seasonal vegetables in garlic olive oil or cream sauce", price: "17" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Caesar Salad", description: "Add chicken or shrimp", price: "14" },
          { name: "Grilled Chicken Salad", description: "Mixed greens, avocado, tomato, cucumber, balsamic vinaigrette", price: "16" },
          { name: "Chopped Italian Salad", description: "Romaine, salami, provolone, chickpeas, pepperoncini, red wine vinaigrette", price: "15" },
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
          { name: "Bruschetta", price: "8" },
          { name: "Meatballs (3)", price: "9" },
          { name: "Calamari", price: "10" },
          { name: "Margherita Flatbread", price: "10" },
          { name: "Arancini (3)", description: "Fried risotto balls with marinara", price: "9" },
        ],
      },
      {
        title: "Happy Hour Drinks",
        items: [
          { name: "House Wine", description: "Red or white by the glass", price: "8" },
          { name: "Draft Beer", description: "Selection of local and imported beers", price: "6" },
          { name: "Classic Cocktails", description: "Negroni, Aperol Spritz, or Limoncello Martini", price: "10" },
          { name: "Prosecco", description: "Italian sparkling wine", price: "9" },
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
          { name: "Eggs Benedict", description: "Poached eggs, Canadian bacon, hollandaise on English muffin with breakfast potatoes", price: "17" },
          { name: "Italian Omelette", description: "Prosciutto, mozzarella, roasted peppers, and basil with mixed greens", price: "16" },
          { name: "Pancakes", description: "Buttermilk pancakes with fresh berries and maple syrup", price: "14" },
          { name: "Avocado Toast", description: "Multigrain toast, smashed avocado, poached eggs, cherry tomatoes, everything seasoning", price: "15" },
          { name: "French Toast", description: "Brioche French toast with mascarpone cream and seasonal fruit", price: "15" },
          { name: "Brunch Burger", description: "Angus beef, fried egg, bacon, cheddar, brioche bun with fries", price: "18" },
        ],
      },
      {
        title: "Brunch Cocktails",
        items: [
          { name: "Mimosa", description: "Prosecco and fresh-squeezed orange juice", price: "10" },
          { name: "Bellini", description: "Prosecco and peach puree", price: "12" },
          { name: "Bloody Mary", description: "House-made mix with premium vodka", price: "13" },
          { name: "Espresso Martini", description: "Vodka, Kahlua, fresh espresso", price: "14" },
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
          { name: "Chianti Classico", description: "Tuscany, Italy", price: "14" },
          { name: "Montepulciano d'Abruzzo", description: "Abruzzo, Italy", price: "12" },
          { name: "Barolo", description: "Piedmont, Italy", price: "18" },
          { name: "Pinot Noir", description: "Sonoma, California", price: "15" },
          { name: "Cabernet Sauvignon", description: "Napa Valley, California", price: "16" },
        ],
      },
      {
        title: "White Wines by the Glass",
        items: [
          { name: "Pinot Grigio", description: "Veneto, Italy", price: "12" },
          { name: "Sauvignon Blanc", description: "Marlborough, New Zealand", price: "13" },
          { name: "Chardonnay", description: "Sonoma, California", price: "14" },
          { name: "Prosecco", description: "Veneto, Italy", price: "12" },
        ],
      },
      {
        title: "Signature Cocktails",
        items: [
          { name: "Classic Negroni", description: "Gin, Campari, sweet vermouth", price: "14" },
          { name: "Aperol Spritz", description: "Aperol, Prosecco, soda", price: "13" },
          { name: "Limoncello Martini", description: "Vodka, limoncello, fresh lemon", price: "14" },
          { name: "Espresso Martini", description: "Vodka, Kahlua, fresh espresso", price: "15" },
          { name: "Italian Mule", description: "Limoncello, ginger beer, fresh lime", price: "13" },
        ],
      },
    ],
  },
]
