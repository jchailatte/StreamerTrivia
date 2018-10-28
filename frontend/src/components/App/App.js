import React from 'react'
import Authentication from '../../util/Authentication/Authentication'
import MakeQuestion from "../MakeQuestion/MakeQuestion"
import BaseState from "../BaseState/BaseState"
import Question from "../Question/Question"
import Answer from "../Answer/Answer"

import './App.css'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.Authentication = new Authentication()

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
        this.state={
            finishedLoading:false,
            theme:'light',
            isVisible:true,
            render:'welcome'
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

                switch (body) {
                  case 'create':
                    this.setState(render:'create')
                    break;
                  case 'answer':

                    break;

                  default:

                }
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
            if(this.state.render==='answer'){
              return (
                <div className="App">
                    <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                      <Answer />
                    </div>
                </div>
              )
            }
            return (
              <div className="App">
                  <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                    <BaseState />
                    <MakeQuestion />
                    <Question />
                    <Answer />
                  </div>
              </div>
            )
        }else{
            return (
                <div className="App">
                </div>
            )
        }

    }
}
