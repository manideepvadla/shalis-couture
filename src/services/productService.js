import products from './products.json';

// Example function to fetch products (to be replaced with real API call)
export const getProducts = async () => {
	// Simulate API call delay
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 500);
	});
};

// Fetch a single product by ID
export const getProductById = async (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const product = products.find((p) => p.id === Number(id));
			resolve(product);
		}, 300);
	});
};
// import axios from "axios";
// const API = "http://localhost:8080/api/products";


// export const getProducts = () => axios.get(API);
// export const getProductById = (id) => axios.get(`${API}/${id}`);