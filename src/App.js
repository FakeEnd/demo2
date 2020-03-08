import React, { Component } from 'react';
import './App.css';
import { Item } from './Item'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [{
        value:"三等奖",
        isExist:true
      },{
        value:"一等奖",
        isExist:true
      },{
        value:"三等奖",
        isExist:true
      },{
        value:"二等奖",
        isExist:false
      },{
        value:"三等奖",
        isExist:false
      },{
        value:"二等奖",
        isExist:true
      },{
        value:"一等奖",
        isExist:false
      },{
        value:"三等奖",
        isExist:false
      },{
        value:"二等奖",
        isExist:true
      },{
        value:"三等奖",
        isExist:true
      },{
        value:"三等奖",
        isExist:true
      },{
        value:"三等奖",
        isExist:true
      },{
        value:"二等奖",
        isExist:true
      },{
        value:"三等奖",
        isExist:true
      },{
        value:"三等奖",
        isExist:true
      }],
      activedId: '',
      prize: null,
      times: 0,
      actTimes: 0,
      isRolling: false
    }
  }
  handleBegin() {
    if (!this.state.isRolling) {
      this.setState({
        activedId: '',
        prize: null,
        times: 0,
        actTimes: 0,
        isRolling: true
      }, () => this.handlePlay())
    }
  }
  handlePlay() {
    let success = false
    let prizeId 
    while(success === false){
      prizeId = Math.floor(Math.random() * this.state.list.length)
      if(this.state.list[prizeId].isExist === true)success =true;
    }
    let times = this.state.list.length * Math.floor(Math.random() * 2  )
    console.log(prizeId,times)
    this.setState({
      activedId: 0,
      prizeId: prizeId,
      times
    })

    this.begin = setInterval(() => {
      let num;

      if (this.state.activedId === this.state.prizeId && this.state.actTimes > this.state.times) {
        clearInterval(this.begin)
        this.setState({
          isRolling: false
        })
        return
      }

      if (this.state.activedId === '') {
        this.setState({
          activedId: 0
        })
      } else {

        num = this.state.activedId
        if (num === this.state.list.length) {
          num = 0
          this.setState({
            activedId: num
          })
        } else {
          num = num + 1
          this.setState({
            activedId: num
          })
        }
      }

      this.setState({
        actTimes: this.state.actTimes + 1
      })
    }, 60)
  }
  render() {
    const { list, activedId } = this.state;
    return (
      <>
        <div className="box">
          <div className="container">
            {
              list.map((item, key) => (
                //console.log(item, key)
                <Item content={item} key={key} id={key} activedId={activedId} />
              ))
            }
          </div>
        </div>
        <div className="begin" onClick={() => this.handleBegin()}>
          点击开始
          </div>
      </>
    );
  }
}

export default App;