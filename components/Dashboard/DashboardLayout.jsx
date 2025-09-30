"use client"
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineProductionQuantityLimits, MdSummarize } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";

const DashboardLayout = ({ children, activeTab, setActiveTab }) => {
    const { data: session } = useSession();

    const tabs = [
        { id: 'overview', name: 'Overview', icon: <MdSummarize /> },
        { id: 'products', name: 'Products', icon: <MdOutlineProductionQuantityLimits /> },
        { id: 'orders', name: 'Orders', icon: <CiShoppingBasket /> }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex items-center gap-2">
                                <Link href="/"><Image src="/icons/logo.png" alt="Logo" width={95} height={28} className="" /></Link>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-700">
                                Welcome, {session?.user?.name || 'Admin'}
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Navigation Tabs */}
                <div className="mb-8">
                    <nav className="flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-primary text-white'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <span>{tab.icon}</span>
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
