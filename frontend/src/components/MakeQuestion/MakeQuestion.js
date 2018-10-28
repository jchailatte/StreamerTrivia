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

    StoreSessionTest(){
      sessionStorage.setItem("name", "VALUE");
    }

    StoreSessionTest(){
      //sessionStorage.setItem("question", document.getElementbyID("question").value);
      //sessionStorage.setItem("answer1", document.getElementbyID("answer1").value);
      //sessionStorage.setItem("answer2", document.getElementbyID("answer2").value);
      //sessionStorage.setItem("answer3", document.getElementbyID("answer3").value);
      sessionStorage.setItem("state", "question");
    }


    render(){
            return (
                <div className="Question">
                {this.StoreSessionTest()}
                    <header>
                        Create A Question
                        <p>Streamer Trivia</p>
                    </header>
                    <div className="questionForm">
                        <label htmlFor="question">Question
                            <textarea name="question" id="userq" placeholder={"Create a question you want "+this.state.name+" to answer. Make sure it follows channel rules!"}></textarea>
                        </label>
                        <label key="answer1" htmlFor="answer1">Answer 1
                          <input type="text" name="answer1" id="answer1" placeholder="Create an option for the streamer" />
                        </label>
                        <label key="answer2" htmlFor="answer2">Answer 2
                          <input type="text" name="answer2" id="answer2" placeholder="Create an option for the streamer" />
                        </label>
                        <label key="answer3" htmlFor="answer1">Answer 3
                          <input type="text" name="answer3" id="answer3" placeholder="Create an option for the streamer" />
                        </label>
                        <button className="questionSubmit" onClick={() => {
                          this.props.changeRender("question");
                          // sessionStorage.setItem("state", "makeq");
                          console.log('aaaAAAAAAA');
                        }}>Submit</button>
                    </div>
                </div>
            )

    }
}
