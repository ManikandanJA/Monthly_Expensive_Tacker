const vehicles = [
  {
    id: 1,
    name: "Hyundai i20",
    type: "car",
    price: 1500,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
  },
  {
    id: 2,
    name: "Swift",
    type: "car",
    price: 1200,
    image: "https://auto.hindustantimes.com/cms-images/marutisuzuki_swift/images/exterior_marutisuzuki-swift-2024_front-right-view_1190x662.jpeg"
  },
  {
    id: 3,
    name: "Honda City",
    type: "car",
    price: 1800,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
  },
  {
    id: 4,
    name: "Audi",
    type: "car",
    price: 2000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
  },
  {
    id: 5,
    name: "Kia Seltos",
    type: "car",
    price: 2200,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
  },
  {
    id: 6,
    name: "BMW",
    type: "car",
    price: 5000,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b"
  },
  {
    id: 7,
    name: "Audi Q9",
    type: "car",
    price: 5500,
    image: "https://tse3.mm.bing.net/th/id/OIP.i-GKvsWHbSUdoH9PPtkS6gHaEK?w=298&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    id: 8,
    name: "Mahindra Thar",
    type: "car",
    price: 3000,
    image: "https://images.timesnownews.com/photo/msid-154067307/154067307.jpg"
  },
  {
    id: 9,
    name: "Innova",
    type: "car",
    price: 2500,
    image: "https://tse1.mm.bing.net/th/id/OIP.F1J6eOr9XrKOpXrexOlsQAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 10,
    name: "Fortuner",
    type: "car",
    price: 4000,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588"
  },

  {
    id: 11,
    name: "Royal Enfield",
    type: "bike",
    price: 800,
    image: "https://tse3.mm.bing.net/th/id/OIP.bjoS3otKki82V3hH093MJgHaE8?w=252&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    id: 12,
    name: "R15",
    type: "bike",
    price: 700,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65"
  },
  {
    id: 13,
    name: "Duke 390",
    type: "bike",
    price: 900,
    image: "https://www.bestbeginnermotorcycles.com/wp-content/uploads/2017/01/KTM-Duke-390.png"
  },
  {
    id: 14,
    name: "Pulsar 150",
    type: "bike",
    price: 600,
    image: "data:image/webp;base64,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"
  },
  {
    id: 15,
    name: "Apache RTR",
    type: "bike",
    price: 650,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838"
  },
  {
    id: 16,
    name: "Activa",
    type: "bike",
    price: 400,
    image: "https://cdn-s3.autocarindia.com/honda-bike/Activa%206G/_DSC8819.JPG"
  },
  {
    id: 17,
    name: "Jupiter",
    type: "bike",
    price: 450,
    image: "https://tse1.mm.bing.net/th/id/OIP.EDszVUWP896zdai6orr8qAHaFk?w=332&h=199&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    id: 18,
    name: "Ntorq",
    type: "bike",
    price: 500,
    image: "https://tse1.mm.bing.net/th/id/OIP.NwMKFM-NaHQnBYinM75h1gHaE6?w=241&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    id: 19,
    name: "FZ",
    type: "bike",
    price: 600,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838"
  },
  {
    id: 20,
    name: "Gixxer",
    type: "bike",
    price: 700,
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d"
  }
];

export default vehicles;