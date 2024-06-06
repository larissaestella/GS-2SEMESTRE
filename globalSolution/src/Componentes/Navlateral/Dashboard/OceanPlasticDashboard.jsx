
// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const data = [
//     { id: 1, name: 'Atlantic Ocean', plasticConcentration: 'High', value: 70 },
//     { id: 2, name: 'Pacific Ocean', plasticConcentration: 'Moderate', value: 50 },
//     { id: 3, name: 'Indian Ocean', plasticConcentration: 'Low', value: 30 }
// ];

// const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

// const OceanPlasticDashboard = () => {
//     return (
//         <div className="container mt-5">
//             <h1 className="text-center">Ocean Plastic Concentration</h1>
//             <div className="row">
//                 <div className="col-md-6">
//                     <h3 className="text-center">Pie Chart</h3>
//                     <ResponsiveContainer width="100%" height={400}>
//                         <PieChart>
//                             <Pie
//                                 data={data}
//                                 cx="50%"
//                                 cy="50%"
//                                 labelLine={false}
//                                 outerRadius={150}
//                                 fill="#8884d8"
//                                 dataKey="value"
//                                 nameKey="name"
//                             >
//                                 {data.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip />
//                             <Legend />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 </div>
//                 <div className="col-md-6">
//                     <h3 className="text-center">Bar Chart</h3>
//                     <ResponsiveContainer width="100%" height={400}>
//                         <BarChart data={data}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="value" fill="#82ca9d" />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OceanPlasticDashboard;
