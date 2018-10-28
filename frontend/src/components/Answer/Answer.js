import React from 'react'

import './Answer.css'

export default class Answer extends React.Component{
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

    StoreSession(){
      sessionStorage.setItem("state", document.getElementbyID("answer").value);
    }

    render(){
            return (
                <div className="Answer">
                    <header>
                        Answer
                        <p>Streamer Trivia</p>
                    </header>
                    <div className="answerForm">
                        <div className ="text"> {this.state.name}'s response: </div>
                        <div className="question">What's your ideal fantasy pet?</div>
                        <div className="answerContainer">
                          <div className="answerNot" > Dragon </div>
                        </div>
                        <div className="answerContainer">
                          <div className="answerYes"> Unicorn </div>
                        </div>
                        <div className="answerContainer">
                          <div className="answerNot" nClick={() => {
                            console.log('CALLING ONCLICK')
                            this.props.changeRender("base");
                            // sessionStorage.setItem("state", "makeq");
                            console.log('aaaAAAAAAA');
                          }}> Fish </div>
                        </div>
                        <div className="countdown" o> {this.state.time} seconds left to next question</div>
                    </div>
                </div>
            )

    }
}
