import { NextResponse } from 'next/server';

// Mock orders data
const orders = [
    {
        id: 1,
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        amount: 899.99,
        status: 'completed',
        items: [
            { productId: 1, name: 'Samsung Galaxy S24 Ultra', quantity: 1, price: 899.99 }
        ],
        shippingAddress: '123 Main St, New York, NY 10001',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T10:30:00Z'
    },
    {
        id: 2,
        customerName: 'Jane Smith',
        customerEmail: 'jane.smith@example.com',
        amount: 339.98,
        status: 'pending',
        items: [
            { productId: 2, name: 'White Jacket', quantity: 1, price: 249.99 },
            { productId: 3, name: 'Tote Bag', quantity: 1, price: 89.99 }
        ],
        shippingAddress: '456 Oak Ave, Los Angeles, CA 90210',
        createdAt: '2024-01-14T14:20:00Z',
        updatedAt: '2024-01-14T14:20:00Z'
    },
    {
        id: 3,
        customerName: 'Mike Johnson',
        customerEmail: 'mike.johnson@example.com',
        amount: 199.99,
        status: 'shipped',
        items: [
            { productId: 5, name: 'Qua Watch', quantity: 1, price: 199.99 }
        ],
        shippingAddress: '789 Pine St, Chicago, IL 60601',
        createdAt: '2024-01-13T09:15:00Z',
        updatedAt: '2024-01-13T09:15:00Z'
    },
    {
        id: 4,
        customerName: 'Sarah Wilson',
        customerEmail: 'sarah.wilson@example.com',
        amount: 1299.99,
        status: 'completed',
        items: [
            { productId: 6, name: 'DSLR Camera', quantity: 1, price: 1299.99 }
        ],
        shippingAddress: '321 Elm St, Houston, TX 77001',
        createdAt: '2024-01-12T16:45:00Z',
        updatedAt: '2024-01-12T16:45:00Z'
    },
    {
        id: 5,
        customerName: 'David Brown',
        customerEmail: 'david.brown@example.com',
        amount: 149.99,
        status: 'cancelled',
        items: [
            { productId: 7, name: 'Wireless Earbuds', quantity: 1, price: 149.99 }
        ],
        shippingAddress: '654 Maple Dr, Phoenix, AZ 85001',
        createdAt: '2024-01-11T11:30:00Z',
        updatedAt: '2024-01-11T11:30:00Z'
    },
    {
        id: 6,
        customerName: 'Lisa Davis',
        customerEmail: 'lisa.davis@example.com',
        amount: 299.99,
        status: 'pending',
        items: [
            { productId: 8, name: 'Wristwatch', quantity: 1, price: 299.99 }
        ],
        shippingAddress: '987 Cedar Ln, Philadelphia, PA 19101',
        createdAt: '2024-01-10T13:20:00Z',
        updatedAt: '2024-01-10T13:20:00Z'
    },
    {
        id: 7,
        customerName: 'Robert Miller',
        customerEmail: 'robert.miller@example.com',
        amount: 89.99,
        status: 'completed',
        items: [
            { productId: 3, name: 'Tote Bag', quantity: 1, price: 89.99 }
        ],
        shippingAddress: '147 Birch St, San Antonio, TX 78201',
        createdAt: '2024-01-09T15:10:00Z',
        updatedAt: '2024-01-09T15:10:00Z'
    },
    {
        id: 8,
        customerName: 'Emily Garcia',
        customerEmail: 'emily.garcia@example.com',
        amount: 249.99,
        status: 'shipped',
        items: [
            { productId: 2, name: 'White Jacket', quantity: 1, price: 249.99 }
        ],
        shippingAddress: '258 Spruce Ave, San Diego, CA 92101',
        createdAt: '2024-01-08T12:00:00Z',
        updatedAt: '2024-01-08T12:00:00Z'
    }
];

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;

        let filteredOrders = [...orders];

        // Apply status filter
        if (status && status !== 'all') {
            filteredOrders = filteredOrders.filter(order =>
                order.status === status
            );
        }

        // Sort by creation date (newest first)
        filteredOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 400));

        return NextResponse.json({
            success: true,
            data: {
                orders: paginatedOrders,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(filteredOrders.length / limit),
                    totalItems: filteredOrders.length,
                    itemsPerPage: limit
                }
            }
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch orders' },
            { status: 500 }
        );
    }
}
