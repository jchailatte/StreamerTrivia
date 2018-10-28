import React from 'react'

import './BroadCastUI.css'

export default class BroadCastUI extends React.Component{
    constructor(props){
        super(props)

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.state={
            time: '123',
            questionQueue: [
              {
                question: "What is your ideal fantasy pet?",
                answers: ["Dragon", "Unicorn", "Fish"],
                isAnswerSelected: false,
                isApproved: false
              },
              {
                question: "What is your favorite food?",
                answers: ["Hamburgers", "Pizza", "Hotdogs"],
                isAnswerSelected: false,
                isApproved: false
              },
              {
                question: "What is your favorite color?",
                answers: ["Green", "Orange", "Yellow"],
                isAnswerSelected: false,
                isApproved: false
              }
            ]
        }
    }

    componentDidMount(){


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
      // render a question group
      let questions = this.state.questionQueue.map((question, idx) => {
        let approveBtn;
        if (question.isAnswerSelected) {
          approveBtn = <button className="approve">Approve</button>;
        } else {
          approveBtn = <button className="approve disabled">Approve</button>;
        }

        return (
          <div key={idx} className="questionGroup">
            <h3 className="question">{question.question}</h3>
            <ul className="options">
              {question.answers.map((answer, idx) => {
                return (
                  <li className="option" key={idx}>
                    {answer}
                  </li>
                );
              })}
            </ul>
            <div>

              {approveBtn}
              <button className="deny">Deny</button>
            </div>
          </div>
        );
      });

    return (
      <div id="containingdiv" class="broadcastUI">
        <header>
              <form id = "broadcastForm">
              Number of Q's in the queue: {this.state.questionQueue.length}
              <br/>
              <button id = "submitQuestions">Initiate Question</button>
              <br/>
              </form>
        </header>
        {questions}
        </div>
    )
  }
}
