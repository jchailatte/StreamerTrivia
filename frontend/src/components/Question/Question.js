import React from 'react'

import './Question.css'

export default class Question extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.state={
            name:'ExampleName',
            answers:['Dragon', 'Unicorn', 'Fish'],
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

      // turns selected answer purple and greys the rest out
    handleOptionSelect(e, selectedAnswer) {
      e.currentTarget.classList.add('selected');

      let notSelected = document.querySelectorAll('div.option:not(.selected)');

      notSelected.forEach(notSelect => {
        notSelect.classList.add('disabled');
      });
    }

    render(){
            let answers = this.state.answers.map((answer, index) => {
              return (
                <div key={index} index={index} className="option" onClick={(e) => this.handleOptionSelect(e, answer, index)}>{answer}</div>
              );
            });

            return (
                <div className="Question">
                    <header>
                        Question
                        <p>Streamer Trivia</p>
                    </header>
                    <div className="questionForm">
                        <div className ="qViewer"> How do you think {this.state.name} will respond to this question? </div>
                        <label htmlFor="question">What's your ideal fantasy pet?</label>
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
