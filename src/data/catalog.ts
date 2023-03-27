import aosImg from '../assets/img/products/AOS.png';
import arielImg from  '../assets/img/products/Ariel.png';
import bimaxImg from '../assets/img/products/BiMax.png';
import sortiImg from '../assets/img/products/Sorti.png';
import biomioSoapImg from '../assets/img/products/BioMio-soap.png';

export interface IProduct {
  imageUrl: string;
  name: string;
  quantityType: 'вес' | 'объем' | 'шт.';
  amount: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: string;
  fullDescription: string;
  type: productTypes[];
  isPopular?: boolean;
}

export const enum productTypes {
  body,
  face,
  hands,
  hair
}


const defaultCatalog:IProduct[] = [
  {
    imageUrl: aosImg,
    name: 'AOS',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'средство для мытья посуды Crystal',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.body],
    isPopular: true
  },
  {
    imageUrl: arielImg,
    name: 'ARIEL',
    quantityType: 'вес',
    amount: '15X28.8 г',
    description: 'Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.face]
  },
  {
    imageUrl: bimaxImg,
    name: 'BIMAX',
    quantityType: 'вес',
    amount: '1500 г',
    description: 'Порошок стиральный Автомат 100 пятен COMPACT',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.body, productTypes.face]
  },
  {
    imageUrl: sortiImg,
    name: 'SORTI',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'Ср-во для мытья посуды Апельсин+мята',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.body]
  },
  {
    imageUrl: biomioSoapImg,
    name: 'BioMio BIO-SOAP',
    quantityType: 'объем',
    amount: '90 г',
    description: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'BioMio',
    price:'48,76 ₸',
    type: [productTypes.body]
  },

  {
    imageUrl: aosImg,
    name: 'AOS',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'средство для мытья посуды Crystal',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Boyscout',
    brand: 'Nivea',
    price:'148,76 ₸',
    type: [productTypes.hair, productTypes.face]
  },
  {
    imageUrl: arielImg,
    name: 'ARIEL',
    quantityType: 'вес',
    amount: '15X28.8 г',
    description: 'Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'38,76 ₸',
    type: [productTypes.face, productTypes.body, productTypes.hair]
  },
  {
    imageUrl: bimaxImg,
    name: 'BIMAX',
    quantityType: 'вес',
    amount: '1500 г',
    description: 'Порошок стиральный Автомат 100 пятен COMPACT',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.hair, productTypes.face]
  },
  {
    imageUrl: sortiImg,
    name: 'SORTI',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'Ср-во для мытья посуды Апельсин+мята',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'200,76 ₸',
    type: [productTypes.face]
  },
  {
    imageUrl: biomioSoapImg,
    name: 'BioMio BIO-SOAP',
    quantityType: 'объем',
    amount: '90 г',
    description: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'BioMio',
    price:'134,76 ₸',
    type: [productTypes.body, productTypes.face]
  },

  {
    imageUrl: aosImg,
    name: 'AOS',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'средство для мытья посуды Crystal',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'248,76 ₸',
    type: [productTypes.hands, productTypes.body]
  },
  {
    imageUrl: arielImg,
    name: 'ARIEL',
    quantityType: 'вес',
    amount: '15X28.8 г',
    description: 'Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'8,76 ₸',
    type: [productTypes.face, productTypes.hair]
  },
  {
    imageUrl: bimaxImg,
    name: 'BIMAX',
    quantityType: 'вес',
    amount: '1500 г',
    description: 'Порошок стиральный Автомат 100 пятен COMPACT',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'348,76 ₸',
    type: [productTypes.body, productTypes.hands]
  },
  {
    imageUrl: sortiImg,
    name: 'SORTI',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'Ср-во для мытья посуды Апельсин+мята',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.hands, productTypes.face]
  },
  {
    imageUrl: biomioSoapImg,
    name: 'BioMio BIO-SOAP',
    quantityType: 'объем',
    amount: '90 г',
    description: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'BioMio',
    price:'48,02 ₸',
    type: [productTypes.body, productTypes.hair, productTypes.face, productTypes.hands]
  },

  {
    imageUrl: aosImg,
    name: 'Fairy',
    quantityType: 'объем',
    amount: '250 мл',
    description: 'средство для мытья посуды',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Fairy Ltd',
    brand: 'Fairy',
    price:'848,76 ₸',
    type: [productTypes.hands, productTypes.body, productTypes.face]
  },
  {
    imageUrl: arielImg,
    name: 'Dove',
    quantityType: 'вес',
    amount: '15X28.8 г',
    description: 'Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'8,76 ₸',
    type: [productTypes.face, productTypes.body]
  },
  {
    imageUrl: bimaxImg,
    name: 'Duru',
    quantityType: 'вес',
    amount: '150 г',
    description: 'Порошок стиральный Автомат 100 пятен COMPACT',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'348,76 ₸',
    type: [productTypes.face, productTypes.hands]
  },
  {
    imageUrl: sortiImg,
    name: 'SORTI',
    quantityType: 'объем',
    amount: '450 мл',
    description: 'Ср-во для мытья посуды Апельсин+мята',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'AOS',
    price:'48,76 ₸',
    type: [productTypes.hands, productTypes.face, productTypes.hair, productTypes.body]
  },
  {
    imageUrl: biomioSoapImg,
    name: 'BioMio BIO-SOAP II',
    quantityType: 'объем',
    amount: '90 г',
    description: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
    fullDescription: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Использовало составитель, до ее безопасную рукописи за риторический скатился ему имеет предупреждал собрал по всей заголовок решила жизни, запятой его буквенных агентство если свое над переписали. Собрал гор журчит домах необходимыми.',
    barcode: '4604049097548',
    manufacturer: 'Нэфис',
    brand: 'BioMio',
    price:'48,02 ₸',
    type: [productTypes.body, productTypes.hair, productTypes.hands]
  },
];

export default defaultCatalog;

