import React from 'react'

import './Question.css'

export default class Question extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.state={
            name:'ExampleName',
            answers:[''],
            time: '123'
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
                        <div className ="qViewer"> How do you think {this.state.name} will respond to this question? </div>
                        <label htmlFor="question">{sessionStorage.getItem("question")}</label>
                        <div className="option" onClick={() => {
                          console.log('CALLING ONCLICK')
                          this.props.changeRender("answer");
                          // sessionStorage.setItem("state", "makeq");
                          console.log('aaaAAAAAAA');
                        }}> Dragon </div> <br/>
                        <div className="option" onClick={() => {
                          console.log('CALLING ONCLICK')
                          this.props.changeRender("answer");
                          // sessionStorage.setItem("state", "makeq");
                          console.log('aaaAAAAAAA');
                        }}> Unicorn </div> <br/>
                        <div className="option" onClick={() => {
                          console.log('CALLING ONCLICK')
                          this.props.changeRender("answer");
                          // sessionStorage.setItem("state", "makeq");
                          console.log('aaaAAAAAAA');
                        }}> Fish </div>
                        <div className="countdown"> {this.state.time} seconds left to answer</div>
                    </div>
                    {console.log(sessionStorage.getItem("name"))}
                </div>
            )

    }
}
