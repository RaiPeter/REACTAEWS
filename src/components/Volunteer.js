import React, { useState } from 'react'
import axios from "axios"
import Image8 from '../assets/images/pic8.jpg';
import Image1 from "../assets/images/pic1.jpg"

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [mobile, setMobile] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, pan,aadhar, mobile,occupation);
        
        var user = {
          name: name,
          email :email,
          pan : pan,
          aadhar : aadhar,
          mobile : mobile,
          occupation : occupation
      }

          axios
            .post("http://localhost:3001/add-volunteer", user)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
          
      }

    return (
        // <form onSubmit={handleSubmit}>
        //     Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        //     Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  />
        //     PAN: <input type="text" name="pan" value={pan} onChange={e => setPan(e.target.value)} />
        //     Aadhar: <input type="text" name="aadhar" value={aadhar} onChange={e => setAadhar(e.target.value)}/>
        //     Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/>
        //     Occupation <input type="text" name="occupation" value={occupation} onChange={e => setOccupation(e.target.value)} />
        //     <input type="submit" value="Submit"/>
        // </form>
        <div class="container">
        <div class="innerwrap">
                    <h1>Volunteer Form</h1>       
            <section class="section2 clearfix">
                <div class="col2 column1 first">
                    <img src={Image1} alt="Snow" style={{width:'100%'}} />
                </div>
                <div class="col2 column2 last">
                    <div class="sec2contactform">
                        <h3 class="sec2frmtitle">All volunteers are welcome</h3>
                        <form onSubmit={handleSubmit}  >
                            <div class="clearfix">
                                <input class="col2 first" type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                                <input  class="col2 first" type="Email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div class="clearfix">
                                
                                <input class="col2 first" type="text" placeholder="Mobile" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                            </div>
                            <div class="clearfix">
                                <input  class="col2 first" type="text" placeholder="Aadhaar No." name="aadhar" value={aadhar} onChange={e => setAadhar(e.target.value)}  />
                                <input class="col2 last" type="text" placeholder="PAN No." name="pan" value={pan} onChange={e => setPan(e.target.value)}  />
                            </div>
                            <div class="clearfix">
                                <input class="col2 first" type="text" placeholder="Occupation" name="occupation" value={occupation} onChange={e => setOccupation(e.target.value)} />
                            </div>
                            <div class="clearfix"><button type="submit" value="Send" >Submit</button></div>
                        </form>
                    </div>

                </div>
            </section>
        
        </div>
    </div>
    )
}

export default Home
