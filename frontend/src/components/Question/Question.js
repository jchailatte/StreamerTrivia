import React from 'react'
import Authentication from '../../util/Authentication/Authentication'

import './Question.css'

export default class Question extends React.Component{
    constructor(props){
        super(props)
        this.Authentication = new Authentication()

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
        this.state={
            finishedLoading:false,
            theme:'light',
            isVisible:true
        }
    }

    contextUpdate(context, delta){
        if(delta.includes('theme')){
            this.setState(()=>{
                return {theme:context.theme}
            })
        }
    }

    visibilityChanged(isVisible){
        this.setState(()=>{
            return {
                isVisible
            }
        })
    }

    componentDidMount(){
        if(this.twitch){
            this.twitch.onAuthorized((auth)=>{
                this.Authentication.setToken(auth.token, auth.userId)
                if(!this.state.finishedLoading){
                    // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

                    // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
                    this.setState(()=>{
                        return {finishedLoading:true}
                    })
                }
            })

            this.twitch.listen('broadcast',(target,contentType,body)=>{
                this.twitch.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
                // now that you've got a listener, do something with the result...

                // do something...

            })

            this.twitch.onVisibilityChanged((isVisible,_c)=>{
                this.visibilityChanged(isVisible)
            })

            this.twitch.onContext((context,delta)=>{
                this.contextUpdate(context,delta)
            })
        }
    }

    componentWillUnmount(){
        if(this.twitch){
            this.twitch.unlisten('broadcast', ()=>console.log('successfully unlistened'))
        }
    }

    render(){
        if(this.state.finishedLoading && this.state.isVisible){
            return (
                <div className="Question">
                    <header>
                        Create A Question
                        <p>Streamer Trivia</p>
                    </header>
                    <div className="questionForm">
                        <label for="question">Question
                            <textarea name="question" placeholder="Create a question you want {StreamerName} to answer. Make sure it follows channel rules!"></textarea>
                        </label>
                        <label for="answer1">Answer 1
                            <input type="text" name="answer1" id="answer1" placeholder="Create an option for the streamer" />
                        </label>
                        <label for="answer2">Answer 2
                            <input type="text" name="answer2" id="answer2" placeholder="Create an option for the streamer" />
                        </label>
                        <label for="answer3">Answer 3
                            <input type="text" name="answer3" id="answer3" placeholder="Create an option for the streamer" />
                        </label>
                        <button class="questionSubmit">Submit</button>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="Question">
                    <p>Loading Bar Goes Here!</p>
                </div>
            )
        }

    }
}