import logo from '../logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import * as emailjs from "emailjs-com";
import{ init } from '@emailjs/browser';


function Donate(){
    // function MyForm() {
    //     const [fname, setName] = useState("");
      
    //     const handleSubmit = (event) => {
    //       event.preventDefault();
    //       alert('The name you entered was: ${fname}')
    //     }
    // }
    function Invoice(){
        init("user_t3eUqwI8So1yZHKcmWNc8");
        var templateParams = {
            name: 'sadasd',
            notes: 'Check this out!'
        };
        
        emailjs.send("service_9kqzdm","template_n3fyln9",);
    }
    function orderNumber() {
        let now = Date.now().toString() // '1492341545873'
        // pad with extra random digit
        now += now + Math.floor(Math.random() * 10)
        // format
        return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
        
        }
        

    function loadScript(src: string){
        return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
        })
    }
    
    async function displayRazorpay(){
        
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res) {
        alert('Razorpay failed to load')
        return
        }
    
    var options = {
        
        "key": "rzp_test_B5nxkF1bYFXi25", // Enter the Key ID generated from the Dashboard
        "amount": Number(getValue()) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Rangel Koli",
        "description": "Donation",
        "image": "https://logodix.com/logo/2079330.jpg",
        "handler": function (response){
            alert("Payment Successful");
            alert(orderNumber());
            Invoice();
        },
        "prefill": {
            "name": document.getElementById('username'),
            "email": document.getElementById('useremail'),
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
    }
    function getValue() {
        let amountval = document.getElementById('userinput').value;
        return amountval;
    } 
    return (
        <div className="App">
            
            <h2>Full Name</h2>
            <input type="text" id="username" size="30"></input>
            <br></br>
            <h2>Email</h2>

            <input type="text" id="useremail" size="30"></input>
            <br>
            </br>
            <h2>Amount:</h2>

        <input type="number" id="userinput" size="30"></input>
        <br>
            </br>
            <br></br>
        <div></div>
        <button className="abc" onClick = {() => displayRazorpay()}>
            Donate Now
            </button>

    </div>
    );
}
export default Donate;