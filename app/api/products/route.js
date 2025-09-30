import { NextResponse } from 'next/server';

// Mock products data
let products = [
    {
        id: 1,
        name: 'Samsung Galaxy S24 Ultra',
        price: 899.99,
        stock: 45,
        category: 'Electronics',
        description: 'Latest flagship smartphone with advanced camera system',
        image: '/products/s24-ultra.png',
        status: 'active',
        createdAt: '2024-01-15T10:30:00Z'
    },
    {
        id: 2,
        name: 'White Jacket',
        price: 249.99,
        stock: 23,
        category: 'Clothing',
        description: 'Lightweight & water-resistant jacket',
        image: '/products/jacket.png',
        status: 'active',
        createdAt: '2024-01-14T14:20:00Z'
    },
    {
        id: 3,
        name: 'Tote Bag',
        price: 89.99,
        stock: 67,
        category: 'Accessories',
        description: 'Spacious & stylish tote bag',
        image: '/products/bag.png',
        status: 'active',
        createdAt: '2024-01-13T09:15:00Z'
    },
    {
        id: 4,
        name: 'Beige Cap',
        price: 39.99,
        stock: 0,
        category: 'Accessories',
        description: 'Soft breathable fabric cap',
        image: '/products/cap.png',
        status: 'out_of_stock',
        createdAt: '2024-01-12T16:45:00Z'
    },
    {
        id: 5,
        name: 'Qua Watch',
        price: 199.99,
        stock: 12,
        category: 'Accessories',
        description: 'Modern smartwatch with health tracking',
        image: '/products/qua-watch.png',
        status: 'active',
        createdAt: '2024-01-11T11:30:00Z'
    },
    {
        id: 6,
        name: 'DSLR Camera',
        price: 1299.99,
        stock: 8,
        category: 'Electronics',
        description: 'Professional DSLR camera with 24MP sensor',
        image: '/products/camera.png',
        status: 'active',
        createdAt: '2024-01-10T13:20:00Z'
    },
    {
        id: 7,
        name: 'Wireless Earbuds',
        price: 149.99,
        stock: 34,
        category: 'Electronics',
        description: 'High-quality wireless earbuds with noise cancellation',
        image: '/products/airbards.png',
        status: 'active',
        createdAt: '2024-01-09T15:10:00Z'
    },
    {
        id: 8,
        name: 'Wristwatch',
        price: 299.99,
        stock: 19,
        category: 'Accessories',
        description: 'Luxury wristwatch with leather strap',
        image: '/products/watch.png',
        status: 'active',
        createdAt: '2024-01-08T12:00:00Z'
    }
];

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');
        const category = searchParams.get('category');
        const status = searchParams.get('status');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;

        let filteredProducts = [...products];

        // Apply search filter
        if (search) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Apply category filter
        if (category && category !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Apply status filter
        if (status && status !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.status === status
            );
        }

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));

        return NextResponse.json({
            success: true,
            data: {
                products: paginatedProducts,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(filteredProducts.length / limit),
                    totalItems: filteredProducts.length,
                    itemsPerPage: limit
                }
            }
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, price, stock, category, description, image } = body;

        // Validate required fields
        if (!name || !price || !stock || !category) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create new product
        const newProduct = {
            id: products.length + 1,
            name,
            price: parseFloat(price),
            stock: parseInt(stock),
            category,
            description: description || '',
            image: image || '/products/default.png',
            status: stock > 0 ? 'active' : 'out_of_stock',
            createdAt: new Date().toISOString()
        };

        products.push(newProduct);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            data: newProduct
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to create product' },
            { status: 500 }
        );
    }
}
