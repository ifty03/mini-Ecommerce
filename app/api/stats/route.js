import { NextResponse } from 'next/server';

// Mock data for dashboard stats
const stats = {
    totalOrders: 1247,
    totalRevenue: 45680,
    totalCustomers: 892,
    totalProducts: 156,
    recentOrders: 23,
    pendingOrders: 8,
    completedOrders: 1209,
    cancelledOrders: 7
};

export async function GET() {
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return NextResponse.json({
            success: true,
            data: stats
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch stats' },
            { status: 500 }
        );
    }
}
