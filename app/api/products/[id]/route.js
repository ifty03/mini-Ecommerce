import { NextResponse } from 'next/server';

// Mock products data (same as in main route)
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

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const product = products.find(p => p.id === parseInt(id));

        if (!product) {
            return NextResponse.json(
                { success: false, error: 'Product not found' },
                { status: 404 }
            );
        }

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 200));

        return NextResponse.json({
            success: true,
            data: product
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const body = await request.json();
        const { name, price, stock, category, description, image } = body;

        const productIndex = products.findIndex(p => p.id === parseInt(id));

        if (productIndex === -1) {
            return NextResponse.json(
                { success: false, error: 'Product not found' },
                { status: 404 }
            );
        }

        // Validate required fields
        if (!name || !price || !stock || !category) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Update product
        products[productIndex] = {
            ...products[productIndex],
            name,
            price: parseFloat(price),
            stock: parseInt(stock),
            category,
            description: description || products[productIndex].description,
            image: image || products[productIndex].image,
            status: stock > 0 ? 'active' : 'out_of_stock',
            updatedAt: new Date().toISOString()
        };

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            data: products[productIndex]
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to update product' },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        const productIndex = products.findIndex(p => p.id === parseInt(id));

        if (productIndex === -1) {
            return NextResponse.json(
                { success: false, error: 'Product not found' },
                { status: 404 }
            );
        }

        // Remove product
        const deletedProduct = products.splice(productIndex, 1)[0];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));

        return NextResponse.json({
            success: true,
            data: deletedProduct
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to delete product' },
            { status: 500 }
        );
    }
}
