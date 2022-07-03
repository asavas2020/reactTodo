import Addtutorial from "../components/Addtutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [tutorials, setTutorials] = useState()

    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

    const getTutorials = async ()=>{
        const {data} = await axios.get(url);
        setTutorials(data);
        // console.log(data);
    }

    useEffect(() => {
      getTutorials();    
    }, [])
    console.log(tutorials);

    // getTutorials()
  return (
    <div>
        <Addtutorial/>
        <TutorialList/>
    </div>
  )
}

export default Home