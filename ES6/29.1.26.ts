let companyName: string = 'Digital Edify';

let bank_balance: number = 9000;

let isUserLoggedIn: boolean = true;

console.log(companyName);

interface IUserInfo {
    id: number;
    name: string;
    location: string;
    email: string;
    phone: string;
    age: number;
    role: string;
    isActive: boolean;
    joinedDate: Date;
    interests: string[];
}

let userInfo: IUserInfo = {
    id: 1,
    name: 'Swaroop',
    location: 'Madhapur',
    email: 'swaroop@example.com',
    phone: '+91-9876543210',
    age: 28,
    role: 'Developer',
    isActive: true,
    joinedDate: new Date('2022-05-10'),
    interests: ['Coding', 'Reading', 'Traveling', '900'],
};

console.log(userInfo);

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    description: string;
}

const products: Product[] = [];