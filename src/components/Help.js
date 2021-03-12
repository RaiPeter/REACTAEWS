import React, { useState } from 'react'
import './help.css';
import axios from "axios"
import Image2 from "../assets/images/pic3.jpg"

function Help() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [mobile, setMobile] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email,aadhar, mobile,reason);
        
        var user = {
          name: name,
          email :email,
          aadhar : aadhar,
          mobile : mobile,
          reason : reason
      }

          axios
            .post("http://localhost:3001/help", user)
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
        //     Aadhar: <input type="text" name="aadhar" value={aadhar} onChange={e => setAadhar(e.target.value)}/>
        //     Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/>
        //     Reason <input type="text" name="reason" value={reason} onChange={e => setReason(e.target.value)} />
        //     <input type="submit" value="Submit"/>
        // </form>
        <div class="container">
        <div class="innerwrap">
        
           
                    
                    <h1>Help Form</h1>
              
        
            <section class="section2 clearfix">
                <div class="col2 column1 first">
                    <img src={Image2} alt="Snow" style={{width:'100%'}} />
                </div>
                <div class="col2 column2 last">
                    {/* <div class="sec2innercont">
                        <div class="sec2addr">
                            <p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
                            <p><span class="collig">Phone :</span> +91 976885083</p>
                            <p><span class="collig">Email :</span> vivek.mengu016@gmail.com</p>
                            
                        </div>
                    </div> */}
                    <div class="sec2contactform">
                        <h3 class="sec2frmtitle">We belive in helping too,<br/> do ask for help.</h3>
                        <form action="">
                            <div class="clearfix">
                                <input class="col2 first" type="text" placeholder="FirstName" />
                                <input class="col2 last" type="text" placeholder="LastName" />
                            </div>
                            <div class="clearfix">
                                <input  class="col2 first" type="Email" placeholder="Email" />
                                <input class="col2 last" type="text" placeholder="Contact Number" />
                            </div>
                            <div class="clearfix">
                                <input  class="col2 first" type="text" placeholder="Aadhar No." />
                            </div>
                            <div class="clearfix">
                                <textarea name="textarea" id="" cols="30" rows="7" placeholder="Reason for help.."></textarea>
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

export default Help
