import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import style from './result.module.css';


const data = [
  { name: 'חיובי', value: 70 },
  { name: 'שלילי', value: 30 },
];

const COLORS = ['#35561f', '#56241f'];

const RADIAN = Math.PI / 180;


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



class SentimentPieChart extends React.Component{

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data != nextProps.data;
  }
 

render(){
  




    return(
      <div className={style.pieChart}>
      <ResponsiveContainer>
      <PieChart >
        <Pie
          data={this.props.data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius="90%"
          fill="#8884d8"
          dataKey="value"
          isAnimationActive ={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
         
      
  ) 


    
  
}
}
export default SentimentPieChart;
