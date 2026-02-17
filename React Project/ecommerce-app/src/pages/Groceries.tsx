import Grocery from './Grocery';
import { useState } from 'react';
function Groceries() {
const [groceries, setGroceries] = useState([
  {
    name: "Coriander Leaves",
    originalPrice: 15,
    discountedPrice: 13,
    discount: "2OFF",
    quantity: "1 pack (100 g)",
    url: "https://www.zepto.com/pn/coriander-leaves/pvid/90ec80d3-40d9-46b6-8ccb-e1b8cb65a76d"
  },
  {
    name: "Organically Grown Coriander Leaves",
    originalPrice: 19,
    discountedPrice: 16,
    discount: "3OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/organically-grown-coriander-leaves/pvid/fac392a6-34be-4190-b35d-81e1562cef9e"
  },
  {
    name: "Tomato Local",
    originalPrice: 26,
    discountedPrice: 23,
    discount: "3OFF",
    quantity: "500 g",
    url: "https://www.zepto.com/pn/tomato-local/pvid/7e261768-88d6-4cbb-8b9b-8718625577bd"
  },
  {
    name: "Banana Robusta",
    originalPrice: 45,
    discountedPrice: 39,
    discount: "6OFF",
    quantity: "4 pcs",
    url: "https://www.zepto.com/pn/banana-robusta/pvid/436c0025-de54-4748-a189-79e292f26071"
  },
  {
    name: "Guava Thai",
    originalPrice: 75,
    discountedPrice: 67,
    discount: "8OFF",
    quantity: "1 pc",
    url: "https://www.zepto.com/pn/guava-thai/pvid/6ed88f72-38da-433a-8506-d601f4d5916d"
  },
  {
    name: "Chilli Green",
    originalPrice: 31,
    discountedPrice: 28,
    discount: "3OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/chilli-green/pvid/3fa81cc0-d5c2-4865-a576-df4677972b26"
  },
  {
    name: "Organically Grown Curry Leaves",
    originalPrice: 19,
    discountedPrice: 17,
    discount: "2OFF",
    quantity: "50 g",
    url: "https://www.zepto.com/pn/organically-grown-curry-leaves/pvid/b65fe904-4430-412c-ae5c-fcb294439a4e"
  },
  {
    name: "Fresh Onion",
    originalPrice: 46,
    discountedPrice: 41,
    discount: "5OFF",
    quantity: "1 Pack / 900 -1000 gm",
    url: "https://www.zepto.com/pn/fresh-onion/pvid/5b5c1960-d2d1-4528-8a74-bc7280174071"
  },
  {
    name: "Tender Coconut",
    originalPrice: 81,
    discountedPrice: 70,
    discount: "11OFF",
    quantity: "1 pc",
    url: "https://www.zepto.com/pn/tender-coconut/pvid/b9fbf0e7-de2d-4a89-ae74-b12a7c0ab236"
  },
  {
    name: "Mushroom Button",
    originalPrice: 83,
    discountedPrice: 74,
    discount: "9OFF",
    quantity: "200 g",
    url: "https://www.zepto.com/pn/mushroom-button/pvid/178b3f0f-c01d-4065-8f5c-d1902cbb5d51"
  },
  {
    name: "Spinach (Palak) - Cleaned, without roots",
    originalPrice: 39,
    discountedPrice: 35,
    discount: "4OFF",
    quantity: "1 pack (250 g)",
    url: "https://www.zepto.com/pn/spinach-palak-cleaned-without-roots/pvid/eeb31b35-04a7-47a7-a434-dd6625f1e82c"
  },
  {
    name: "Organically Grown Spinach",
    originalPrice: 19,
    discountedPrice: 17,
    discount: "2OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/organically-grown-spinach/pvid/6cfbfbb3-f589-4a59-bcc6-45146db98cdb"
  },
  {
    name: "Fresh Potato",
    originalPrice: 42,
    discountedPrice: 38,
    discount: "4OFF",
    quantity: "1 pack (900 g - 1 kg)",
    url: "https://www.zepto.com/pn/fresh-potato/pvid/a8043677-61c7-4af4-b784-b6aa225306a4"
  },
  {
    name: "Broccoli",
    originalPrice: 48,
    discountedPrice: 42,
    discount: "6OFF",
    quantity: "1 pc",
    url: "https://www.zepto.com/pn/broccoli/pvid/a23b9914-8c62-4d83-b30d-12609ea50339"
  },
  {
    name: "Strawberry (Mahabaleshwar)",
    originalPrice: 90,
    discountedPrice: 61,
    discount: "29OFF",
    quantity: "1 pack (Approx. 180g - 200g)",
    url: "https://www.zepto.com/pn/strawberry-mahabaleshwar/pvid/d0a3ad74-8c00-4b37-bd4c-d87cef26714e"
  },
  {
    name: "Lemon",
    originalPrice: 37,
    discountedPrice: 33,
    discount: "4OFF",
    quantity: "200 g",
    url: "https://www.zepto.com/pn/lemon/pvid/0d043da8-bd98-456e-b424-d5312993f188"
  },
  {
    name: "Carrot Local",
    originalPrice: 29,
    discountedPrice: 26,
    discount: "3OFF",
    quantity: "250 g",
    url: "https://www.zepto.com/pn/carrot-local/pvid/38e1b33f-32d2-48bc-8b97-e5b04abf0743"
  },
  {
    name: "Organically Grown Chilli",
    originalPrice: 28,
    discountedPrice: 24,
    discount: "4OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/organically-grown-chilli/pvid/fb80f31e-09d7-400b-9848-0d4d6457d500"
  },
  {
    name: "Orange Kinnow",
    originalPrice: 72,
    discountedPrice: 63,
    discount: "9OFF",
    quantity: "500 g",
    url: "https://www.zepto.com/pn/orange-kinnow/pvid/0e899cce-7474-464c-a36a-b533482bc9f8"
  },
  {
    name: "Kiwi Green",
    originalPrice: 124,
    discountedPrice: 110,
    discount: "14OFF",
    quantity: "3 pcs",
    url: "https://www.zepto.com/pn/kiwi-green/pvid/862df01f-c0d6-4bc9-9731-347885d2113d"
  },
  {
    name: "Lettuce Green",
    originalPrice: 18,
    discountedPrice: 16,
    discount: "2OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/lettuce-green/pvid/ec1570e5-8089-492c-b3b3-abd7d14fdf25"
  },
  {
    name: "Beans Haricot",
    originalPrice: 28,
    discountedPrice: 25,
    discount: "3OFF",
    quantity: "250 g",
    url: "https://www.zepto.com/pn/beans-haricot/pvid/4b83db84-5dab-4fd4-9888-34d71f0cd458"
  },
  {
    name: "Organically Grown Mint Leaves",
    originalPrice: 18,
    discountedPrice: 16,
    discount: "2OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/organically-grown-mint-leaves/pvid/7b182838-4230-4907-a574-15ab0548a170"
  },
  {
    name: "Banana Elaichi / Yelakki",
    originalPrice: 91,
    discountedPrice: 79,
    discount: "12OFF",
    quantity: "500 g",
    url: "https://www.zepto.com/pn/banana-elaichi-yelakki/pvid/db471557-f745-4574-9e82-1916a88d9e6b"
  },
  {
    name: "Lemon",
    originalPrice: 20,
    discountedPrice: 18,
    discount: "2OFF",
    quantity: "4 Pcs",
    url: "https://www.zepto.com/pn/lemon/pvid/fc6f0ef3-91ad-40e3-8e44-e7c2451f9389"
  },
  {
    name: "Mint Leaves",
    originalPrice: null,
    discountedPrice: 11,
    discount: "1OFF",
    quantity: "100 g",
    url: "https://www.zepto.com/pn/mint-leaves/pvid/ff5984f3-0bfb-4553-a959-7033078b1a85"
  },
  {
    name: "Green Peas (Matar)",
    originalPrice: 34,
    discountedPrice: 31,
    discount: "3OFF",
    quantity: "250 g",
    url: "https://www.zepto.com/pn/green-peas-matar/pvid/df5ee788-00ce-4cce-afb7-102cb7b3b40d"
  },
  {
    name: "Organically Grown Capsicum Green",
    originalPrice: 46,
    discountedPrice: 41,
    discount: "5OFF",
    quantity: "250 g",
    url: "https://www.zepto.com/pn/organically-grown-capsicum-green/pvid/eace231a-5f63-4cbc-bb50-f6a3a0000790"
  },
  {
    name: "Apple Royal Gala Imported",
    originalPrice: 138,
    discountedPrice: 122,
    discount: "16OFF",
    quantity: "2 pcs",
    url: "https://www.zepto.com/pn/apple-royal-gala-imported/pvid/55835f1d-aaa2-4331-8279-b3adf07dca3d"
  },
  {
    name: "FlowerAura Wine Wrapped 8 Red Roses (In a Box)",
    originalPrice: 1051,
    discountedPrice: 295,
    discount: "756OFF",
    quantity: "1 pack",
    category: "Fresh Flower",
    status: "Sold out",
    url: "https://www.zepto.com/pn/floweraura-wine-wrapped-8-red-roses-in-a-box/pvid/d449c6b5-1b99-490a-8f6d-93a1a6d291c6"
  },
  {
    name: "FlowerAura 20 Red Roses in Polka Wrap (In a Box)",
    originalPrice: 2251,
    discountedPrice: 631,
    discount: "1.6KOFF",
    quantity: "1 pack (20 pcs)",
    category: "Fresh Flower",
    status: "Sold out",
    url: "https://www.zepto.com/pn/floweraura-20-red-roses-in-polka-wrap-in-a-box/pvid/ed02b9c8-5c06-4fb6-85e3-db6b04bc03db"
  },
  {
    name: "Bloom Pink Aglaonema Plant",
    originalPrice: 300,
    discountedPrice: 236,
    discount: "64OFF",
    quantity: "1 pc",
    status: "Sold out",
    url: "https://www.zepto.com/pn/bloom-pink-aglaonema-plant/pvid/060da980-23bd-468f-af66-48d98b0b9e2b"
  }
]);

const deleteGrocery = (groceryName: string) => {
        const filteredGroceries = groceries.filter((grocery) => grocery.name !== groceryName);
        setGroceries(filteredGroceries);
    };

    return (
        <div className="container">
            <h2 className="text-center my-4">Groceries</h2>
            <div className="row">
                {groceries.map((grocery: any) =>  (
            <Grocery key={grocery.name} grocery={grocery} deleteGrocery={deleteGrocery}></Grocery>
                ))}
            </div>
        </div>
    );
}

export default Groceries;