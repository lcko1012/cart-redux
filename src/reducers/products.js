var initialState = [
  {
    id: 1,
    name: "Iphone 12",
    image:
      "https://cdn.24h.com.vn/upload/3-2020/images/2020-08-26/HOT-da-ro-thoi-gian-Apple-ra-mat-loat-iPhone-12-5G-untitled-1598375872-832-width660height440.jpg",
    description: "Chưa ra mắt",
    price: 1000,
    inventory: 0,
    rating: 4,
  },
  {
    id: 2,
    name: "Iphone 11",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
    description: "Đắt tiền",
    price: 800,
    inventory: 10,
    rating: 1,
  },
  {
    id: 3,
    name: "Iphone 6",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    description: "Đã lỗi thời",
    price: 100,
    inventory: 7,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
