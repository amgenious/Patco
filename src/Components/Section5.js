
import React from 'react'

export const Section5 = () => {
    return (
        <div>
            <div className="container">
                <div className="row" id="row5">
                    <div className="col-md-6 sec5">
            <h1>Schedule Service</h1>
            <form data-netlify="true">
            <div>
                <input className="name" name="name" type="text" placeholder="Name" required />
            </div>
            <div>    
                <input className="name" name="phone" type="tel" placeholder="Phone number" required />
            </div>
            <div>    
                <input className="name" name="email" type="email" placeholder="Email" required />
            </div>
            <div>    
                <input className="name" name="date" type="date" placeholder="Date" required />
            </div>
            <div>    
                <input className="name" name="time" type="time" placeholder="Time" required />
            </div>
            <div>    
                <textarea className="Problem" name="problem" type="text" placeholder="Enter your problem" required />
            </div>
            <div>    
                <button type="sumbit" className="btn btn-primary">Submit</button>
            </div>
            </form>
            </div>
            <div className="col-md-6 sec5a">
                    <p>Please, working days are Mondays-Saturdays 8am to 5pm.</p>
                    <p>Sundays 12noon to 5pm.</p>
                    <p>Having issues with the forms</p>
                    <p>Call 0204924722 or 0242365073</p>
                    <p>Or you can write to use on henrytweneboah956@gmail.com</p>
               
            </div>
            </div>
            </div>
        </div>
    )
}
