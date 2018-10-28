import React from 'react'

import './BroadCastUI.css'

export default class BroadCastUI extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.state={
            time: '123'
        }
    }

    componentDidMount(){


    }
    updateques(question)
      {
          var tab = document.getElementById("table");
          var row = tab.insertRow(tab.row.length);
          var cell1 = row.insertCell(0);
        //  cell1.innerHTML =
      }

    render(){
            return (
              <div id="containingdiv">
                <header id = "titlediv1">
                    	<form id = "broadcastForm">
                      Number of Q's
        			        <input type="number" margin-left="5px" max ="30" min = "0" id = "enter" placeholder="##"/>
                      <br/>
                      <button id = "submitQuestions">Initiate Question</button>
                      <br/>

        		    	    </form>
                </header>
                </div>
        )

  }
}
