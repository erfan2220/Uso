import React from 'react';
import "./barChartbox.css";
import {Bar, ResponsiveContainer, BarChart, Tooltip} from "recharts";


type Props=
    {
        color:string;
        title:string;
        dataKey:string;
        chartData:object[];
    }
const BarChartbox =(props:Props)=>
{
        return (

                <div className="barChartBox">
                        <h1>{props.title}</h1>
                    <div className="chart">
                        <ResponsiveContainer width="90%" height={100}>
                            <BarChart width={150} height={40} data={props.chartData}>
                                <Tooltip
                                    contentStyle={{background:"#2a3447",borderRadius:"5px"}}
                                    labelStyle={{display:"none"}}
                                    cursor={{fill:"none"}}
                                />
                                <Bar dataKey={props.dataKey} fill={props.color} />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>

        );

}

export default BarChartbox;