interface Employee {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    age: number;
    email: string;
    verified?: boolean;
}
export const employees: Employee[] = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        phone: "1234567890",
        address: "123 Main St",
        email: "john.doe@github.com",
        verified: true,
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        phone: "9876543210",
        age: 30,
        address: "456 Elm St",
        email: "jane.smith@github.com",
    },
    {
        firstName: "Randolf",
        lastName: "Carter",
        age: 30,
        phone: "23876543221",
        address: "256 Sec St",
        email: "randolf.carter@github.com",
    },
];
