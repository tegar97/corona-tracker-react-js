import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../Api/index'
import {Line,Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'
const Chart = () => {
    const [dailyData,setDailyData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        
        fetchApi()
    })
    console.log(dailyData.map(({date}) => date))
    
 

    const lineChart = (
        dailyData.length
        ? (
        <Line
            data={{
                labels : dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'deaths',
                    borderColor: 'red',
                    fill: true
                }]
            }}
        />)  : null
    ) 
    
   
    
    return (
           <div className={styles.container}>
            {lineChart}
           </div>
        )
}

export default Chart