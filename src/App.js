import React, {useState, useEffect} from "react";  
import axios from 'axios'
import Header from "./components/Header/Header";
import Graph from './components/Graph/Graph'
import Countries from './components/Countries/Countries'
import Search from './components/Search/Search'
import Footer from "./components/Footer/Footer";
import languagesData from "./components/shared/languagesData";

function App() {

  const [data,setData] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  useEffect(()=> {
    fetchingData()
  },[])

  const fetchingData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await axios.get(url)
      const data = await response.data
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const findMax = (data) => {
    let max = 0
    let name = ''
    let pos
    data.forEach((country,index) => {
      if (country.population > max) {
        max = country.population
        name = country.name
        pos = index
      }
    })
    return {
      max,
      name,
      pos
    }
  }

  const worldPopulation = (data) => {
    let total = 0
    data.forEach((country) => {
      total += country.population
    })
    return total
  }

  const tenMostPopulationCountries = (data) => {
    let fakeData = [...data]
    const tenMostPopulationCountries = []
    while (tenMostPopulationCountries.length < 10) {
    tenMostPopulationCountries.push(findMax(fakeData))
    fakeData.splice(findMax(fakeData).pos,1)
  }
    return tenMostPopulationCountries
  }

  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const dataSearched = data.filter((country) => {
    if (country.name === '') {
      return country
    } else if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return country
    }
  })
  return (
    <div className="App">
      <Header data={data} numberOfCountry={dataSearched.length} searchTerm={searchTerm}/>
      <div className='text-center pt-11 pb-6'>
        <Search onChange={onChange} />
      </div>
      <Countries data={dataSearched}/>
      <Graph populationData={tenMostPopulationCountries(data)} worldTotal={worldPopulation(data)} languagesData={languagesData(data)}/>
      <Footer/>
    </div>
  )
}

export default App;
