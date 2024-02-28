type course_package = {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
}

const course_packages: course_package[] = [
    {
        id: 1,
        name: "cs302",
        price: 100,
        description: "Basic course package",
        image_url: "./assets/images/cs302.webp"
    },
    {
        id: 2,
        name: "cs303",
        price: 200,
        description: "Premium course package",
        image_url: "./assets/images/cs303.webp"
    },
    {
        id: 3,
        name: "cs204",
        price: 300,
        description: "Advanced course package",
        image_url: "./assets/images/cs204.webp"
    }
]