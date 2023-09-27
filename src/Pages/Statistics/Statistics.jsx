import React, { PureComponent, useEffect, useState } from 'react';
import { ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
const Statistics = () => {

    const [myDonation, setMyDonation] = useState([])
    useEffect(() => {
        const myDonation = JSON.parse(localStorage.getItem('donationItems'))
        setMyDonation(myDonation)
    }, [])
    const totalDonation = 12
    const percent = (myDonation.length / totalDonation) * 100
    const restDonation = (100 - percent)
    const data = [
        { name: 'Group A', value: restDonation },
        { name: 'Group B', value: percent },

    ];
    const COLORS = ['#FF444A', '#00C49F'];
    return (
        <div>
            <div style={{ width: '500', height: 500 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} fill="#8884d8" label> {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}</Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='flex gap-5 justify-center'>
                <div className='flex items-center'>
                    <p className='mr-4'>Total donation</p>
                    <input className='bg-[#FF444A] w-16  h-4' type="text" />
                </div>
                <div className='flex items-center'>
                    <p className='mr-4'>My donation</p>
                    <input className='bg-[#00C49F] w-16  h-4' type="text" />
                </div>
            </div>
        </div>
    );
};

export default Statistics;