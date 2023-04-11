export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;
  images:Array<string>;
  link:string;
  category:string;
  likes:number;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 384270,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h10/46392663310366/apple-iphone-13-128gb-cernyj-102298404-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/46392664031262/apple-iphone-13-128gb-cernyj-102298404-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category:"Phones",
    likes:23
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 128350,
    description: 'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: цветной AMOLED, сенсорный\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/he1/64487159201822/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hfc/64487160578078/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes:244
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 129855,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: Super AMOLED, сенсорный, Corning Gorilla Glass 5\n' +
        'диагональ: 6.4 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Exynos 1280\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h76/51215744040990/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h50/51215744270366/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 35,
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 374699,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h44/46392664817694/apple-iphone-13-128gb-belyj-102298420-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 312
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 46360,
    description: 'технология NFC: Нет\n' +
        'цвет: черный\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 8-ядерный Unisoc SC9863A\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/he7/51190896394270/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/hff/51190897442846/samsung-galaxy-a03-core-2-gb-32-gb-cernyj-103153817-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 21
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 377000,
    description: 'технология NFC: Да\n' +
        'цвет: розовый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdd/46392661540894/apple-iphone-13-128gb-rozovyj-102298145-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 21
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ медный',
    price: 46625,
    description: 'технология NFC: Нет\n' +
        'цвет: бронзовый\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 8-ядерный Unisoc SC9863A\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/h56/52423972454430/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbc/52423972913182/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-mednyi-105772530/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 91
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi Note 11S 8 ГБ/128 ГБ серый',
    price: 116609,
    description: 'технология NFC: Нет\n' +
        'цвет: серый\n' +
        'тип экрана: AMOLED, сенсорный, мультитач\n' +
        'диагональ: 6.43 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Mediatek Helio G96\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/h0e/49684457717790/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/he6/49684458176542/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 91
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/64 ГБ белый',
    price: 80635,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h27/49613726973982/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2c/h66/49613727334430/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h13/49613727858718/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-4.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-64-gb-belyi-104253316/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 91
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 14 128Gb серебристый',
    price: 421580,
    description: 'технология NFC: Да\n' +
        'цвет: серебристый\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3279 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h22/63072557236254/apple-iphone-14-128gb-belyj-106363144-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h3d/63072557465630/apple-iphone-14-128gb-belyj-106363144-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h8b/63076103716894/apple-iphone-14-128gb-belyj-106363144-3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-serebristyi-106363144/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Phones",
    likes: 91
  },
  {
    id: 11,
    name: 'MAGNIT АВ 6013 серый',
    price: 3300,
    description: 'тип: электрочайник\n' +
        'объем: 2.2 л\n' +
        'мощность: 2200 Вт\n' +
        'материал корпуса: нержавеющая сталь\n' +
        'фильтр от накипи: Нет\n' +
        'цвет: серый',
    rating: 4,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h69/48945856839710/cajnik-magnit-av-6013-seryj-103866740-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/h5d/48949882126366/cajnik-magnit-av-6013-seryj-103866740-2.jpg'],
    link: 'https://kaspi.kz/shop/p/magnit-av-6013-seryi-103866740/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Appliances",
    likes: 91
  },
  {
    id: 12,
    name: 'Термопот Brando BR-TP68 черный',
    price: 12988,
    description: 'тип: термопот\n' +
        'объем: 6.8 л\n' +
        'мощность: 750 Вт\n' +
        'материал корпуса: металл/пластик\n' +
        'фильтр от накипи: Нет\n' +
        'цвет: черный',
    rating: 4,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/hf9/67937106788382/termopot-brando-br-tp68-chernyi-108462994-1.jpg'],
    link: 'https://kaspi.kz/shop/p/termopot-brando-br-tp68-chernyi-108462994/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item',
    category: "Appliances",
    likes: 91
  },
  {
    id:13,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 359990,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i5 11400H\n' +
        'видеокарта: NVIDIA GeForce GTX 1650\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
    rating: 120,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/he7/67236399448094/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h65/67236399710238/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-3.jpg'],
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    category: "Laptops",
    likes: 91
  },
  {
    id:14,
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 132990,
    description: 'диагональ экрана: 14 дюйм\n' +
        'процессор: Intel Celeron N4020\n' +
        'видеокарта: Intel UHD Graphics 600\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 128 ГБ',
    rating: 30,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h79/67940462264350/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h27/67940462788638/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-3.jpg'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item',
    category: 'Laptops',
    likes: 91
  },
  {
    id:15,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 865433,
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1 7 core\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    rating: 345,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h9f/50489392365598/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    category: 'Laptops',
    likes: 91
  },
  {
    id:16,
    name:'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 867567,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Pentium Gold 7505\n' +
        'видеокарта: Intel UHD Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    rating: 467,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h6f/66993674715166/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h06/66993675239454/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-3.jpg'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    category: 'Laptops',
    likes: 91
  },
  {
    id:17,
    name: 'Ноутбук ASUS X515EA-BQ3269 90NB0TY1-M038L0 серый',
    price: 87588,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i3 1115G4\n' +
        'видеокарта: Intel UHD Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    rating: 232,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h23/66428285354014/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h78/66428285878302/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h08/66428286402590/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-3.jpg'],
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/?c=750000000#!/item',
    category: 'Laptops',
    likes: 91
  },
  {
    id:18,
    name: 'Телевизор Yasin LED-32E7000 81 см черный',
    price: 567787,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 32 дюйм\n' +
        'разрешение: 1366x768\n' +
        'поддержка HD: 720p HD\n' +
        'технология Smart TV: Нет\n' +
        'wi-Fi: Да\n' +
        'входы: AV, ,HDMI, ,USB, ,антенный, ,Bluetooth',
    rating: 234,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h8f/48926248108062/yasin-led-32e7000-cernyj-103411518-2.jpg',],
    link: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
    category: 'TV',
    likes: 91
  },
  {
    id:19,
    name: 'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный',
    price: 119990,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 32 дюйм\n' +
        'разрешение: 1366x768\n' +
        'поддержка HD: 720p HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: композитный, ,HDMI, ,USB, ,Bluetooth',
    rating: 2324,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hb7/49320434237470/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h9f/49320434466846/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
    category: 'TV',
    likes: 91
  },
  {
    id:20,
    name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    price: 197478,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 43 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: AV, ,компонентный, ,Ethernet (RJ-45), ,USB',
    rating:234,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb2/49319748927518/samsung-ue43t5300au-chernyi-100182013-3.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hcb/49319749156894/samsung-ue43t5300au-chernyi-100182013-4.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
    category: 'TV',
    likes: 91
  },
  {
    id:21,
    name: 'Телевизор LG 43LM5772PLA 109 см черный',
    price: 181545,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 42.5 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB',
    rating: 768,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hfd/49320430829598/lg-43lm5772pla-cernyj-101293496-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h0b/49320431288350/lg-43lm5772pla-cernyj-101293496-3.jpg'],
    link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    category: "TV",
    likes: 91
  },
  {
    id:22,
    name: 'Телевизор Yasin 40G7 102 см черный',
    price: 114104,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 40 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: оптический, ,AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,RS-232, ,MHL',
    rating: 878,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h94/49244137816094/yasin-40g7-cernyj-104045834-2.jpg'],
    link: 'https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item',
    category: 'TV',
    likes: 91
  },
  {
    id:23,
    name: 'Гладильная система LAURASTAR S Pure Plus серый, зеленый',
    price: 900000,
    description: 'мощность парогенератора: 1200 Вт\n' +
        'мощность утюга: 1000 Вт\n' +
        'материал подошвы утюга: алюминий\n' +
        'давление пара: 3.5 Бар\n' +
        'размеры гладильной поверхности: 125x42 см\n' +
        'цвет: серый, ,зеленый',
    rating: 244,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h71/47037069525022/laurastar-s-pure-plus-seryj-102809004-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h85/47037069983774/laurastar-s-pure-plus-seryj-102809004-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/h1d/47037070901278/laurastar-s-pure-plus-seryj-102809004-4.jpg'],
    link: 'https://kaspi.kz/shop/p/laurastar-s-pure-plus-seryi-zelenyi-102809004/?c=750000000#!/item',
    category: 'Appliances',
    likes: 91
  },
  {
    id:24,
    name: 'Инфракрасный обогреватель Brando BR-SH4040 красный',
    price: 7990,
    description: 'тип: инфракрасный обогреватель\n' +
        'площадь обогрева: 30 кв.м\n' +
        'цвет: красный',
    rating: 345,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/hfb/66577849090078/infrakrasnyi-obogrevatel-brando-br-sh4040-krasnyi-107924599-1.jpg'],
    link: 'https://kaspi.kz/shop/p/infrakrasnyi-obogrevatel-brando-br-sh4040-krasnyi-107924599/?c=750000000#!/item',
    category: 'Appliances',
    likes: 91
  },
  {
    id:25,
    name: 'Микроволновая печь DEXP MS-70 черный',
    price: 26990,
    description: 'расположение: отдельностоящая\n' +
        'внутренний объем: 20 л\n' +
        'внутреннее покрытие камеры: эмаль\n' +
        'тип управления: механическое\n' +
        'гриль: Нет\n' +
        'конвекция: Нет\n' +
        'цвет: черный',
    rating: 355,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/ha7/51842094104606/mikrovolnovaa-pec-dexp-ms-70-cernyj-20-l-700-vt-pereklucateli-povorotnyj-mehanizm-105476701-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h0d/51842094563358/mikrovolnovaa-pec-dexp-ms-70-cernyj-20-l-700-vt-pereklucateli-povorotnyj-mehanizm-105476701-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h6e/51842096627742/mikrovolnovaa-pec-dexp-ms-70-cernyj-20-l-700-vt-pereklucateli-povorotnyj-mehanizm-105476701-3.jpg'],
    link: 'https://kaspi.kz/shop/p/dexp-ms-70-chernyi-105476701/?c=750000000#!/item',
    category: 'Appliances',
    likes: 91
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/