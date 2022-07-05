import Addtutorial from "../components/Addtutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [tutorials, setTutorials] = useState()

    const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

    const getTutorials = async ()=>{
        try {
            const {data} = await axios.get(url);
        setTutorials(data);
        // console.log(data);
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
      getTutorials();    
    }, [])
    // console.log(tutorials);

    const postTutorials = async (tutorial) => {
      try {
        await axios.post(url, tutorial);
      } catch (error) {
        console.log(error);
      }
      getTutorials();
    }

    const deleteTutorials = async(id) =>{
      try {
        await axios.delete(`${url}/${id}`);
      } catch (error) {
        console.log(error);
      }
      getTutorials();
    }

    const editTutorials = async (id, title, desc)=>{
      
        const filtered = tutorials.filter((tutor) => tutor.id ===id).Map(()=>({title:title, description:desc}));
        // console.log(filtered[0]);
      try {
        await axios.put(`${url}/${id}`, filtered[0]);

      } catch (error) {
        console.log(error);
      }
      getTutorials();
    }

    
    
  return (
    <div>
        <Addtutorial postTutorials={postTutorials}/>
        <TutorialList 
        tutorials={tutorials} 
        deleteTutorials={deleteTutorials} 
        editTutorials={editTutorials}/>
    </div>
  )
}

export default Home