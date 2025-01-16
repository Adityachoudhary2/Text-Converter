// rfc  create a function ---------------------

import React,{useState} from "react";

export default function About(props) {
    // const [myStyle ,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    // })

    //  const ToggleStyle= ()=>{
    //     if(myStyle.color ==  'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         // setbtntext("Enable light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         // setbtntext("Enable Dark Mode")
    //     }
    // }
    // let myStyle = {
    //   color: props.mode === 'dark'?'white':'#042743',
    //   backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    //   // border:'2px solid',
    //   // borderColor:props.mode ==='dark'?'white':'#042743'
    // }

  
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2 className="my-3">About us </h2>
        <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
              //  style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
            //  style={myStyle}
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button
              //  style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  
              // style={myStyle}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
              //  style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  
              // style={myStyle}
              >
                <b>This is the third item's accordion body.</b> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
