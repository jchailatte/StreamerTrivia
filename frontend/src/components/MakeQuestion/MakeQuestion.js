import React from 'react'

import './MakeQuestion.css'

export default class MakeQuestion extends React.Component{
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

    makeJSX(options, i){
      return options.map((v,i)=>{
        let num = i + 1
        let id = 'answer' + num

        return(
          <label key={id} htmlFor={id}>Answer {i +1}
            <input type="text" name={id} id={id} placeholder="Create an option for the streamer" />
          </label>
        )
      })
    }

    render(){
            return (
                <div className="Question">
                    <header>
                        Create A Question
                        <p>Streamer Trivia</p>
                    </header>
                    <div className="questionForm">
                        <label htmlFor="question">Question
                            <textarea name="question" placeholder={"Create a question you want "+this.state.name+" to answer. Make sure it follows channel rules!"}></textarea>
                        </label>
                        {this.makeJSX(this.state.answers)}
                        <button className="questionSubmit">Submit</button>
                    </div>
                </div>
            )

    }
}
