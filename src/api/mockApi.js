let products = [
  { id: 1, name: 'Nike Air Force 1 \'07 LV8', category: 'Shoes', stock: 220, price: 122.27 },
  { id: 2, name: 'Nike Sportswear Heritage86 Futura Washed', category: 'Caps', stock: 999, price: 15.95 },
  { id: 3, name: 'Nike Air Max Penny', category: 'Shoes', stock: 75, price: 182.50 },
  { id: 4, name: 'Nike Windrunner D.Y.E.', category: 'Jacket', stock: 30, price: 102.43 },
  { id: 5, name: 'Nike Storm-FIT x Stüssy', category: 'Jacket', stock: 50, price: 9.54 }
];

let brands = [
  { id: 1, name: 'Brand One', description: 'Description for Brand One', logo: 'brand-one-logo.png' },
  { id: 2, name: 'Brand Two', description: 'Description for Brand Two', logo: 'brand-two-logo.png' },
];

let categories = [
  { id: 1, name: 'Shoes', description: 'Category for all types of shoes' },
  { id: 2, name: 'Clothing', description: 'Category for all types of clothing' }
];

// Products API
export const fetchProducts = () => new Promise((resolve) => setTimeout(() => resolve(products), 500));
export const fetchBrands = () => new Promise((resolve) => setTimeout(() => resolve(brands), 500));
export const fetchCategories = () => new Promise((resolve) => setTimeout(() => resolve(categories), 500));

export const addProduct = (product) => new Promise((resolve) => {
  products.push({ id: products.length + 1, ...product });
  setTimeout(() => resolve(product), 500);
});

export const addBrand = (brand) => new Promise((resolve) => {
  brands.push({ id: brands.length + 1, ...brand });
  setTimeout(() => resolve(brand), 500);
});

export const addCategory = (category) => new Promise((resolve) => {
  categories.push({ id: categories.length + 1, ...category });
  setTimeout(() => resolve(category), 500);
});

export const deleteProduct = (id) => new Promise((resolve) => {
  products = products.filter(product => product.id !== id);
  setTimeout(() => resolve(), 500);
});

export const deleteBrand = (id) => new Promise((resolve) => {
  brands = brands.filter(brand => brand.id !== id);
  setTimeout(() => resolve(), 500);
});

export const deleteCategory = (id) => new Promise((resolve) => {
  categories = categories.filter(category => category.id !== id);
  setTimeout(() => resolve(), 500);
});

export const fetchCategoryById = (id) => new Promise((resolve) => setTimeout(() => resolve(categories.find(category => category.id === parseInt(id))), 500));
export const updateCategory = (id, updatedCategory) => new Promise((resolve) => {
  categories = categories.map(category => category.id === parseInt(id) ? updatedCategory : category);
  setTimeout(() => resolve(updatedCategory), 500);
});
