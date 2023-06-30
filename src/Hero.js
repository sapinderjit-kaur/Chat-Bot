import React from "react";
import Chatbot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';


const steps=[
    {
      id:'Hi',
      message:'Welcome to my React Website',
      trigger:'Ask Name'
  
    },
    {
      id:'Ask Name',
      message:'Please enter your name',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi {previousValue}, please select your issue',
      trigger:'issues'
  
    },
    
    
    {
      id:'issues',
      options:[{value:"react", label:"react", trigger:"react"},
               {value:"Angular", label:"Angular", trigger:"Angular"}]
               
    },
    {
      id:'react',
      message:'Thanks for telling your react issue',
      end:true
    },
    {
      id:'Angular',
      message:'Thanks for telling your Angular issue',
      end:true
    }
  ]

const Hero=({handleLogout})=>
{
    return(
    
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        <body>
            <center><h1>Welcome to the Home Page</h1></center>
            
        </body>
    
    
    <Segment floated="right">
      <Chatbot steps={steps} />
      </Segment>

    </section>
   
    
    )
};

export default Hero;