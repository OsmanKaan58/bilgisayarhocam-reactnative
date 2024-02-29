type course_package = {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
}

export const course_packages: course_package[] = [
    {
        id: 0,
        name: "cs302",
        price: 100,
        description: "Basic course package",
        image_url: "https://images.unsplash.com/photo-1705651460710-35dade84e2d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 1,
        name: "cs303",
        price: 200,
        description: "Premium course package",
        image_url: "https://images.unsplash.com/photo-1705651460710-35dade84e2d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "cs204",
        price: 300,
        description: "Advanced course package",
        image_url: "https://images.unsplash.com/photo-1705651460710-35dade84e2d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]