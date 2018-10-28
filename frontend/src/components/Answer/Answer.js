import React from 'react'

import './Answer.css'

export default class Answer extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.state={
            name:'ExampleName',
            answers:['']
        }
    }

    componentDidMount(){

    }

    addOption(){
      this.setState(prevState=>{
        let answers = prevState.answers
        answers.push('')
        return {
          answers
        }
      })
    }

    makeJSX(options){
      return options.map((v,i)=>{
        let num = i + 1
        let id = 'answer' + num

        return(
          <label key={id} htmlFor={id}>Answer {i+1}
            <input type="text" name={id} id={id} placeholder="Create an option for the streamer" />
          </label>
        )
      })
    }

    render(){
            return (
                <div className="Question">
                    <header>
                        Question
                        <p>Streamer Trivia</p>
                    </header>
                    <div className="questionForm">
                        <div className ="qViewer"> {this.state.name}'s response: </div>
                        <label htmlFor="question">What's your ideal fantasy pet?</label>
                        <div className="option"> Dragon </div> <br/>
                    </div>
                </div>
            )

    }
}
