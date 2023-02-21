export interface Product {
  link: string,
  image: string;
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg"',
    id: 1,
    name: 'Iphone 11',
    price: 293050,
    description: '128 GB Version and other versions avaliable'
  },
  { 
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    id: 2,
    name: 'iPhone 13',
    price: 373770,
    description: '128 GB Version and other versions avaliable'
  },
  {  
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    id: 3,
    name: 'iPhone 14',
    price: 421222,
    description: '128 GB Version and other versions avaliable'
  },
  {
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/hf7/62948389748766/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg',
    id: 4,
    name: 'iPhone 14 Pro',
    price: 586555,
    description: '128 GB Version and other versions avaliable'
  },
  {
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    id: 5,
    name: 'Samsung Galaxy A23',
    price: 104605,
    description: '6GB RAM and 128GB Memory'
  },
  {
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    id: 6,
    name: 'Xiaomi Redmi 10C',
    price: 71977,
    description: '4GB RAM and 128GB Memory'
  },
  {
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    id: 7,
    name: 'Acer Nitro 5 (AN515-57)',
    price: 389897,
    description: 'CPU: Intel Core I5, GPU: NVIDIA GeForce GTX 1650, RAM 16GB, SSD512'
  },
  {
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    id: 8,
    name: 'Apple MacBook Air 13 ',
    price: 480550,
    description: 'Gray color, CPU Apple M1, RAM 8GB, SSD 256GB'
  },
  {
    link: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/hdd/33118956126238/xbox-series-s-belyj-100793537-1-Container.jpg',
    id: 9,
    name: 'Xbox Series S',
    price: 164324,
    description: 'SSD:512GB, Color: white'
  },
  {
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2KkcDwuxbZN14PPlWX70tSwualIHr3cxDhJdcjo_OL-CSmlImRVtxoCcIQQAvD_BwE#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg',
    id: 10,
    name: 'Sony PlayStation 5',
    price: 331000,
    description: 'SSD: 825GB, Color: white'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/