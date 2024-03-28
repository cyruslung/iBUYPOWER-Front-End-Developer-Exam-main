'use client'

import React from 'react';
import Slider from '@/components/Slider';
import ProductItem from '@/types/productItem';

const products: ProductItem[] = [
  {
    id: 1,
    type: 'Prebuilt PC',
    imageUrl: 'https://content.ibuypower.com/Images/Components/26958/gaming-pc-01-Y40RG201-main-kbm-2400.png',
    name: 'Creator RDY Y40BG201',
    spec1: 'Windows 11 Pro',
    spec2: 'Intel® Core™ i9-13900KF CPU',
    spec3: 'GeForce RTX 4090 - 24GB',
    spec4: '2TB M.2 NVMe GEN4 SSD',
    spec5: '32GB DDR5-6000MHz RGB RAM',
    discount: 'SAVE $450',
    specialOffer: '$3,549',
    originalPrice: '$3,999',
    affirmPrice: '$172.07/mo',
    affirmUrl: '/assets/icon-affirm.svg',
    shipping: 'Free Shipping',
    arrivalTime: 'Delivery By Friday, Jul 7',
    buyBtn: 'Buy Now',
  },
  {
    id: 2,
    type: 'Prebuilt PC',
    imageUrl: 'https://content.ibuypower.com/Images/Components/26626/gaming-pc-01-SLMRG211-main-2400.png',
    name: 'Gaming RDY SLMRG211',
    spec1: 'Windows 11 Home',
    spec2: 'AMD RyzenTM 7 7700X CPU',
    spec3: 'GeForce RTX 4070 - 12GB',
    spec4: '1TB M.2 NVMe SSD',
    spec5: '32GB DDR5-5600MHz RGB RAM',
    discount: 'SAVE $200',
    specialOffer: '$1,799',
    originalPrice: '$1,999',
    affirmPrice: '$87.22/mo',
    affirmUrl: '/assets/icon-affirm.svg',
    shipping: 'Free Shipping',
    arrivalTime: 'Delivery By Friday, Jul 7',
    buyBtn: 'Buy Now',
  },
  {
    id: 3,
    type: 'Custom PC',
    imageUrl: 'https://content.ibuypower.com/Images/Components/27211/gaming-pc-01-Trace7Mesh-main-KBM-400-solo.png',
    name: 'Intel 13th Gen Performance Daily... Deal',
    spec1: 'Windows 11 Home',
    spec2: 'Intel® Core™ i7-13700KF CPU',
    spec3: 'GeForce RTX 4060 Ti - 8GB',
    spec4: '1TB Crucial P3 M.2 NVMe SSD',
    spec5: '32GB DDR5-5200MHz RAM',
    discount: 'SAVE $200',
    specialOffer: '$1,679',
    originalPrice: '$1,879',
    affirmPrice: '$81/mo',
    affirmUrl: '/assets/icon-affirm.svg',
    shipping: 'Free Shipping',
    arrivalTime: 'Estimate Ship By 07/18/2023',
    buyBtn: 'Customize',
  },
  {
    id: 4,
    type: 'Custom PC',
    imageUrl: 'https://content.ibuypower.com/Images/Components/25755/gaming-pc-01-H7-Flow-Black-main-400.png',
    name: 'AMD Ryzen 9 Ultra Gaming Daily... Deal',
    spec1: 'Windows 11 Home',
    spec2: 'AMD RyzenTM 9 7900X CPU',
    spec3: 'GeForce RTX 3080 - 10GB',
    spec4: '1TB Crucial P3 M.2 NVMe SSD',
    spec5: '32GB DDR5-5200MHz RAM',
    discount: 'SAVE $200',
    specialOffer: '$2,059',
    originalPrice: '$2,259',
    affirmPrice: '$99.83/mo',
    affirmUrl: '/assets/icon-affirm.svg',
    shipping: 'Free Shipping',
    arrivalTime: 'Estimate Ship By 07/18/2023',
    buyBtn: 'Customize',
  },
  {
    id: 5,
    type: 'Prebuilt PC',
    imageUrl: 'https://content.ibuypower.com/Images/Components/26958/gaming-pc-01-Y40RG201-main-kbm-2400.png',
    name: 'Creator RDY Y40BG201',
    spec1: 'Windows 11 Pro',
    spec2: 'Intel® Core™ i9-13900KF CPU',
    spec3: 'GeForce RTX 4090 - 24GB',
    spec4: '2TB M.2 NVMe GEN4 SSD',
    spec5: '32GB DDR5-6000MHz RGB RAM',
    discount: 'SAVE $450',
    specialOffer: '$3,549',
    originalPrice: '$3,999',
    affirmPrice: '$172.07/mo',
    affirmUrl: '/assets/icon-affirm.svg',
    shipping: 'Free Shipping',
    arrivalTime: 'Delivery By Friday, Jul 7',
    buyBtn: 'Buy Now',
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="container relative mx-auto text-center">
      <div className="my-10">
        <h1 className="text-3xl font-bold leading-9">Best Seller Gaming PC</h1>
        <h2 className="text-2xl font-bold mb-10">Prebuilt & Custom</h2>
        <Slider products={products} />
      </div>
    </div>
  );
};

export default HomePage;