import React from 'react'
import {Cards,Chart,CountryPicker} from './components'

import styles from './App.module.css'

import {fetchData} from './Api/index'

class App extends React.Component{

    state = {
        data: {}

    }

    async componentDidMount() {
        const featchData = await fetchData()
        this.setState({data : featchData })

    }
    render() {
        
        const {data } = this.state
        return(
            <div className={styles.container}>
                <Cards data={data} />
                <Chart  />
            </div>
        )
    }
}

export default  App;