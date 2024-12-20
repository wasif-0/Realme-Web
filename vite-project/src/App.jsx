import React from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';

const App = () => {
  const products = [
    {
      id: 1,
      image: "https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp",
      title: "realme C75",
      subtitle: "Dhulai Horai Hai",
      price: null,
      isNew: true,
    },
    {
      id: 2,
      image: "https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp",
      title: "realme 13+ 5G",
      subtitle: "Speed to Victory",
      price: "89,999",
      isNew: true,
    },
    {
      id: 3,
      image: "https://image01.realme.net/general/20240930/17276898714837028c74b7ec64f578595a0bec73bd213.png.webp",
      title: "realme GT 6",
      subtitle: "Power meets AI",
      price: "149,999",
      isNew: true,
    },
    {
      id: 4,
      image: "https://image01.realme.net/general/20240919/17267273214814cc35277c25042d580c622fec0dad738.png.webp",
      title: "realme Note 60",
      subtitle: "Champion Quality",
      price: "26,999",
      isNew: true,
    },
    {
      id: 5,
      image: "https://image01.realme.net/general/20240827/17247517057780f136750f9ab445193022ca17ab4b885.png.webp",
      title: "realme C75",
      subtitle: "Dhulai Horai Hai",
      price: null,
      isNew: true,
    },
    {
      id: 6,
      image: "https://image01.realme.net/general/20240726/17219881569684931245943754b279da88be96c1ba769.png.webp",
      title: "realme 13+ 5G",
      subtitle: "Speed to Victory",
      price: "89,999",
      isNew: true,
    },
    {
      id: 7,
      image: "https://image01.realme.net/general/20240624/171922460925609665c170ea145d0a40db9866d4a1d51.png.webp",
      title: "realme GT 6",
      subtitle: "Power meets AI",
      price: "149,999",
      isNew: true,
    },
    {
      id: 8,
      image: "https://image01.realme.net/general/20240620/1718869504893402543bcb87c4708aedfe7ce612e8725.png.webp",
      title: "realme Note 60",
      subtitle: "Champion Quality",
      price: "26,999",
      isNew: true,
    },
  ];
  const Accessories = [
    {
      id: 1,
      image: "https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp",
      title: "realme Buds T110",
      subtitle: "Listen in Full Color",
      price: "Rs.4,999",
      isNew: true,
    },
    {
      id: 2,
      image: "https://image01.realme.net/general/20201111/1605080175371.jpg.webp",
      title: "realme Buds Q",
      subtitle: "Music Never Ends",
      price: "Rs.7,999",
      isNew: true,
    },
  ];
  return (
    <>
      <Header />
      <Slider />
      <div className="app">
        <h1 className='headding'>SmartPhones</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              
              price={product.price}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
  
      <div className="app">
        <h1 className='headding'>Accessories</h1>
        <div className="product-grid">
          {Accessories.map((Accessories) => (
            <ProductCard
              key={Accessories.id}
              image={Accessories.image}
              title={Accessories.title}
              subtitle={Accessories.subtitle}
              
              price={Accessories.price}
              isNew={Accessories.isNew}
            />
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default App;
