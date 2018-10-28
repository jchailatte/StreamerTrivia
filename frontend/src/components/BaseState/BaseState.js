import React from 'react'

import './BaseState.css'

export default class BaseState extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.state={
            name:'ExampleName'
        }
    }

    componentDidMount(){

    }

    render(){
            return (
              <div>
                <h1 id = "title">Streamer Trivia</h1>
              <div id = "textdiv">
              <p className = "text">Check back here for when {this.state.name} puts out a request for questions</p>
              <br/>
              </div>
        <button id = "submit" disabled>Write Question</button>
    </div>

            )

    }
}
