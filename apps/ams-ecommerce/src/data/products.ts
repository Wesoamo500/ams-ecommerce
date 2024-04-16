export const Products = [
    {
      productId: 1,
      company:'Sneaker Company',
      title:'Fall Limited Edition Sneakers',
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      reviews:[{
        user: "Richard Hendricks",
        comment:"The Product was a good one 👍",
        ratings:4,
        replies:[
          {user: "Marvin", reply: "It was very nice ❣️"},
          {user: "Leopard", reply: "I loved it"},
          {user: "Tetteh",  reply: "Good Product"}
        ]
      },
      {
        user: "Ben Shapiro",
        comment:"Bad product, the delivery system was bad, I wish I didn't buy from you.",
        ratings:2,
        replies:[
          {reply: "Falsy 👎", user: "Tyrio Bargley"},
          {reply: "Got to hell 🔥", user: "Lannister Bargley"},
          {reply: "My girlfriend really loved it", user:"Musky"}
        ]
      }],
      tags:['cloth, sneakers, shirts'],
      price: 250,
      discountPercent: 0.5,
      quantity: 0,
      images:[
        {
          id: 1,
          image: "../assets/images/image-product-1.jpg",
          thumbnail: "../assets/images/image-product-1-thumbnail.jpg"
        },
        {
          id: 2,
          image: "../assets/images/image-product-2.jpg",
          thumbnail: "../assets/images/image-product-2-thumbnail.jpg"
        },
        {
          id: 3,
          image: "../assets/images/image-product-3.jpg",
          thumbnail: "../assets/images/image-product-3-thumbnail.jpg"
        },
        {
          id: 4,
          image: "../assets/images/image-product-4.jpg",
          thumbnail: "../assets/images/image-product-4-thumbnail.jpg"
        }
      ]
    }
  ]