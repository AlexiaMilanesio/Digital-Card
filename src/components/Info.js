import React from 'react';
import logo from "../images/selfie.png";

export default function Info (){
    return (
        <div className='info'>
            <img src={logo} alt='Myself' />
            <h1>Zarina Alexía Milanesio</h1>
            <p className='job'>FrontEnd Developer</p>
            <p className='website'>alemilanesio.website</p>
            <div className='buttons'>
                <button className='btn-email'>
                    <ion-icon name="mail"></ion-icon>
                    <p className='btn-name'>Email</p>
                </button>
                <button className='btn-linkedin'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <p className='btn-name'>LinkedIn</p>
                </button>
            </div>
        </div>
    )
}