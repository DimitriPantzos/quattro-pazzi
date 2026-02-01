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
    id: "wine",
    label: "Wine & Cocktails",
    sections: [
      {
        title: "White Wine",
        items: [
          { name: "Three Finger Chardonnay", price: 14 },
          { name: "Parolvini Pinot Grigio", price: 13 },
          { name: "Fernhook Sauvignon Blanc", price: 15 },
          { name: "Isla Sancerre Blanc", price: 17 },
        ],
      },
      {
        title: "Rose & Prosecco",
        items: [
          { name: "Primitivo Rosato", price: 13 },
          { name: "Bisol Prosecco", price: 13 },
        ],
      },
      {
        title: "Red Wine",
        items: [
          { name: "Chianti Classico", price: 14 },
          { name: "Educated Guess", price: 15 },
          { name: "Organic Montepulciano", price: 14 },
          { name: "Duck Pond Pinot Noir", price: 14 },
          { name: "Ziobaffa Toscana", price: 15 },
        ],
      },
      {
        title: "Mocktails",
        description: "$12",
        items: [
          { name: "Blueberry Fizz", description: "Blueberry purée, club soda, lime, syrup" },
          { name: "Tropical Passion", description: "Pineapple, passion fruit purée club soda" },
          { name: "Peach Spritz", description: "Peach purée, lime juice, syrup, club soda" },
          { name: "Mango Mojito", description: "Fresh mango purée, mint, syrup, lime juice, club soda" },
        ],
      },
      {
        title: "Cocktails",
        description: "$16",
        items: [
          { name: "Cosmo Pazzi", description: "Tito's vodka, malibu Rum, cranberry & lime juice, coconut rim" },
          { name: "Paper Plane", description: "Bourbon, Aperol, amaretto, lime juice" },
          { name: "Sicilian Negroni", description: "Orange gin, Campari, sweet vermouth" },
          { name: "Aperol Margarita", description: "Aperol, tequila blanco, lime juice, syrup" },
        ],
      },
    ],
  },
]
