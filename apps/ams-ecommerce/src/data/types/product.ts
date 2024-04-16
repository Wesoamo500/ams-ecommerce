export interface ReviewReplies {
    [key: string]: string | undefined; // Key-value pairs where the key is a string (name) and the value is also a string (reply)
  }
  
  // Interface for each review object
  export interface Review {
    user: string,
    ratings: number,
    comment: string;
    replies: ReviewReplies[];
  }
  
  // Interface for each image object
  interface Image {
    id: number;
    image: string;
    thumbnail: string;
  }
  
  // Interface for the product object
 export interface Product {
    productId: number;
    company: string;
    title: string;
    description: string;
    reviews: Review[]; // Array of Review objects
    tags: string[];
    price: number;
    discountPercent: number;
    quantity: number;
    images: Image[];
  }