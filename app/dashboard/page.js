"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import StatsCards from '../../components/Dashboard/StatsCards';
import ProductsTable from '../../components/Dashboard/ProductsTable';
import OrdersTable from '../../components/Dashboard/OrdersTable';

const DashboardPage = () => {
    const  { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        if (status === 'loading') return; // Still loading
        if (!session) {
            router.push('/auth/login');
        }
    }, [session, status, router]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            <div className="space-y-6">
                {activeTab === 'overview' && (
                    <>
                        <StatsCards />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                                <OrdersTable limit={5} showPagination={false} />
                            </div>
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
                                <ProductsTable limit={5} showPagination={false} />
                            </div>
                        </div>
                    </>
                )}
                
                {activeTab === 'products' && (
                    <div className="bg-white rounded-lg shadow">
                        <ProductsTable />
                    </div>
                )}
                
                {activeTab === 'orders' && (
                    <div className="bg-white rounded-lg shadow">
                        <OrdersTable />
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
