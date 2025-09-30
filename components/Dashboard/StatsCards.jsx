"use client"
import React, { useState, useEffect } from 'react';
import { MdProductionQuantityLimits } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaShippingFast } from 'react-icons/fa';



const StatsCards = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/stats');
                const data = await response.json();
                
                if (data.success) {
                    setStats(data.data);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError('Failed to fetch stats');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <p className="text-red-600">Error: {error}</p>
            </div>
        );
    }

    const statsCards = [
        {
            title: 'Total Orders',
            value: stats?.totalOrders || 0,
            change: '+12%',
            changeType: 'positive',
            icon: <MdProductionQuantityLimits className="text-2xl"/>
        },
        {
            title: 'Total Revenue',
            value: `$${(stats?.totalRevenue || 0).toLocaleString()}`,
            change: '+8%',
            changeType: 'positive',
            icon: <GiTakeMyMoney className="text-2xl" />
        },
        {
            title: 'Total Customers',
            value: stats?.totalCustomers || 0,
            change: '+5%',
            changeType: 'positive',
            icon: <FaPeopleGroup className="text-2xl" />
        },
        {
            title: 'Total Products',
            value: stats?.totalProducts || 0,
            change: '+2%',
            changeType: 'positive',
            icon: <FaShippingFast className="text-2xl" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">{card.title}</p>
                            <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
                        </div>
                        <div className="text-2xl">{card.icon}</div>
                    </div>
                    <div className="mt-4">
                        <span className={`text-sm font-medium ${
                            card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {card.change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
