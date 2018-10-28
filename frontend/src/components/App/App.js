import React from 'react'
import Authentication from '../../util/Authentication/Authentication'
import MakeQuestion from "../MakeQuestion/MakeQuestion"
import BaseState from "../BaseState/BaseState"
import Question from "../Question/Question"
import Answer from "../Answer/Answer"
import BroadCastUI from "../BroadCastUI/BroadCastUI"

import './App.css'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.Authentication = new Authentication()
        this.changeRender = this.changeRender.bind(this)
        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
        this.state={
            finishedLoading:false,
            theme:'light',
            isVisible:true,
            render:'base'
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

    changeRender(pageName){
      this.setState({
        render: pageName,
      });
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

            this.twitch.onVisibilityChanged((isVisible,_c)=>{
                this.visibilityChanged(isVisible)
            })

            this.twitch.onContext((context,delta)=>{
                this.contextUpdate(context,delta)
            })
        }
    }

    render(){
        if(this.state.finishedLoading && this.state.isVisible){
          switch(this.state.render){
            case "base":
              return (
                <div className="App">
                    <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                      <BaseState changeRender={this.changeRender}/>
                    </div>
                </div>
              )
              break;
            case "makeq":
              return (
                <div className="App">
                    <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                      <MakeQuestion changeRender={this.changeRender} />
                    </div>
                </div>
              )
              break;
              case "question":
                return (
                  <div className="App">
                      <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                        <Question changeRender={this.changeRender}/>
                      </div>
                  </div>
                )
                break;
              case "answer":
                return (
                  <div className="App">
                      <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                        <Answer changeRender={this.changeRender}/>
                      </div>
                  </div>
                )
                break;
              default:
                return (
                  <div className="App">
                      <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                        <BaseState changeRender={this.changeRender}/>
                      </div>
                  </div>
                )
                break;


          }
    }else{
      return (
        <div></div>
      )
    }
}
}
