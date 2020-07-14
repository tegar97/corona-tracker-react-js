import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'

import styles from './CountryPicker.component'

import {countries} from '../../api';

const Chart = () => {
    const {fetchcountries,setFechedCountries} = useState([])
    useEffect(() => {
        const fetchcountries = async () => {
            setFechedCountries(await countries)

        }
        fetchcountries()
    })
    return (
       <FormControl className={styles.FormControl}>
         <NativeSelect>
            <option value="global"></option>
         </NativeSelect>
       </FormControl>
    )
}

export default Chart