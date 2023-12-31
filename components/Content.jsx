import React from 'react';
import Link from 'next/link';


const Content = () => (
  <div id="features">
  <div className="row feat">
    <div className="col-sm-12 col-md-4 des">
      
      <h3 className="feature">Easy to use.</h3>
      <p className="fd">Find furry companions near you. </p>

</div>
    
    <div className="col-sm-12 col-md-4 des">
    
      <h3 className="feature">Never lose your new friends.</h3>

      <p className="fd"> Quickly get togther with all you new puppy pals.</p>
    </div>
    <div className="col-sm-12 col-md-4 des">
      <i className="fa-regular fa-calendar-days fa-3x fi"></i>
      <h3 className="feature">Integrated Calendar.</h3>
      <p className="fd">Never miss a doggie date.</p>
      <Link href="/profile">Profile 1</Link>
      <Link href="/profilePage">profile 2</Link>
    </div>
  </div>
  </div>
);

export default Content;
