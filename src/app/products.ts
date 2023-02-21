export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;
  images:Array<string>;
  link:string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price:104605,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating:10,
    images:['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h8d/49792687636510/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/hab/51166993940510/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-3.jpg'],
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 700880,
    description: 'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 21,
    images:['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h10/63073993293854/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-3.jpg'],

    link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
  },
  {
    id: 3,
    name: 'Планшет Apple iPad 2021 10.2 64Gb Wi-Fi серый',
    price: 178470,
    description: 'диагональ: 10.2 дюйм\n' +
        'разрешение экрана: 2160x1620\n' +
        'технология изготовления экрана: TFT IPS\n' +
        'размер оперативной памяти: 3 Гб\n' +
        'размер встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 8686 мАч\n' +
        'цвет: серый',
    rating: 23,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h12/48110926856222/apple-ipad-2021-wi-fi-64gb-seryj-102301598-2-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/hc9/48110927052830/apple-ipad-2021-wi-fi-64gb-seryj-102301598-3-Container.jpg'],
    link:'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000#!/item'
  },
  {
    id:4,
    name: 'Планшет Apple iPad 2022 10.9 Wi-Fi 64Gb синий',
    price: 260380,
    description: 'диагональ: 10.9 дюйм\n' +
        'разрешение экрана: 2360x1640\n' +
        'технология изготовления экрана: TFT IPS\n' +
        'размер оперативной памяти: 4 Гб\n' +
        'размер встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 7600 мАч\n' +
        'цвет: синий',
    rating: 45,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/h37/64867890987038/apple-ipad-2022-10-9-wi-fi-64gb-sinii-107266637-1.jpg',
    'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F259251_3.jpg&w=3840&q=85',
    'https://c.dns-shop.kz/thumb/st1/fit/300/300/e84d36d35bd0f991a34fded0521a011e/d0fbb39fc4011c0f72141f1b02d28e678ab7b77aea1f3d6d1270e4618dd67569.jpg'],
    link:'Планшет Apple iPad 2022 10.9 Wi-Fi 64Gb синий'
  },
  {
    id: 5,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 225000,
    description: 'поддержка платформ: iOS\n' +
        'материал корпуса: алюминий\n' +
        'цвет корпуса: черный\n' +
        'технология экрана: OLED\n' +
        'объем встроенной памяти: 32 Гб\n' +
        'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n' +
        'время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    rating: 34,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/hbb/63158968418334/apple-watch-series-8-41-mm-cernyj-106362847-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/h91/62281248571422/apple-watch-series-8-41-mm-cernyj-106362847-3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый',
    price: 167298,
    description: 'поддержка платформ: iOS\n' +
        'материал корпуса: алюминий\n' +
        'цвет корпуса: золотистый\n' +
        'технология экрана: OLED\n' +
        'объем встроенной памяти: 32 Гб\n' +
        'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
    rating: 56,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h19/62711073636382/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/hc2/62281060286494/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item'
  },
  {
    id: 7,
    name: 'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный',
    price: 119990,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 32 дюйм\n' +
        'разрешение: 1366x768\n' +
        'поддержка HD: 720p HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: композитный, ,HDMI, ,USB, ,Bluetooth',
    rating: 80,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hb7/49320434237470/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h9f/49320434466846/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item'
  },
  {
    id:8,
    name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    price: 198890,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 43 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: AV, ,компонентный, ,Ethernet (RJ-45), ,USB',
    rating: 58,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb2/49319748927518/samsung-ue43t5300au-chernyi-100182013-3.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hcb/49319749156894/samsung-ue43t5300au-chernyi-100182013-4.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item'
  },
  {
    id:9,
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    price: 119595,
    description: 'тип: наушники\n' +
        'вид: внутриканальные\n' +
        'подключение: беспроводное\n' +
        'тип акустического оформления: закрытые\n' +
        'тип крепления: без крепления\n' +
        'система активного шумоподавления: Да\n' +
        'микрофон: Да',
    rating: 45,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h3b/62281477718046/apple-airpods-pro-2nd-generation-belyj-106362968-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/h3b/62281478176798/apple-airpods-pro-2nd-generation-belyj-106362968-3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Наушники Apple AirPods Max черный',
    price: 350240,
    description: ['тип: гарнитура\n' +
    'вид: накладные\n' +
    'подключение: беспроводное\n' +
    'тип акустического оформления: закрытые\n' +
    'тип крепления: оголовье\n' +
    'система активного шумоподавления: Да\n' +
    'микрофон: Да'],
    rating: 56,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h0c/33518056079390/apple-airpods-max-cernyj-100950846-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h10/33518228701214/apple-airpods-max-cernyj-100950846-2-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hec/33518234402846/apple-airpods-max-cernyj-100950846-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/