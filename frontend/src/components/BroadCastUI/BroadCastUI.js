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

    render(){
            return (
              <div id="containingdiv">
                <div id = "titlediv">
                    	<form id = "form">
                    	    <span id = "title">Number of Q's</span>
        			        <input type="number" max ="30" min = "0" id = "enter" placeholder="##"/>
                      <button id = "submit">Initiate Question</button>
        		    	    </form>
                </div>

                <table id = "queue"/>
                <tr>
        			     <th></th>
        		    </tr>
        		    </table>
                </div>
          //
          // <div>
          //     <script>
          //         function updateques(question)
          //         {
          //             var tab = document.getElementById("table");
          //             var row = tab.insertRow(tab.row.length);
          //             var cell1 = row.insertCell(0);
          //           //  cell1.innerHTML =
          //         }
          //     </script>
          // </div>

        )

  }
}
