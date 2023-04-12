import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import "./HomePage.css";
import Menu from "../../components/Menu";
// import Logo from "../components/Logo";

const HomePage = ({mangas}) => {
  const { error, data, fetchData } = useFetch('/manga', null, 'GET');
const [manga,setManga] = useState();
    useEffect(() => {
      fetchData();
    }, []);
  
    
    useEffect(()=>{
      console.log("data : ", data)
      setManga(data.data);
    }
    ,[data])

    if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="home bg-img">
     
        <Header />
        
        <h2 className="titleManga">Bienvenue sur Mangapédie</h2>
        <Menu/>
        <Slider data={mangas}/> 
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
