import React, { useState }  from 'react';

function Location () {

    return (
        <section id="favorites-homepage" className="my-5 container">
            <div className='d-flex flex-md-row flex-column'>
                <div className='col-6 mb-4' style={{maxWidth: '555px'}}>
                    <img src="./Images/maps-placeholder.jpg" alt="Big Bite Donuts Logo" class="img-fluid"/>
                </div>
                <div className='col-6'>
                    <h4 className='mb-4 header-font'>Location &amp; Hours</h4>
                    <div className='d-flex flex-lg-row flex-column main-text-font'>
                        <div className='mb-4'>
                            1234 South 56th Street
                            <br/>
                            Kansas City, KS 66106
                            <br/>
                            (435) 862-3534
                            <br/>
                            wowprojectsllc@gmail.com
                        </div>
                        <div className='ml-lg-5'>
                            Monday CLOSED
                            <br/>
                            Tuesday CLOSED
                            <br/>
                            Wednesday 5:00am - 12:00pm
                            <br/>
                            Thursday 5:00am - 12:00pm
                            <br/>
                            Friday 5:00am - 12:00pm
                            <br/>
                            Saturday 6:00am - 12:00pm
                            <br/>
                            Sunday 6:00am - 12:00pm
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location