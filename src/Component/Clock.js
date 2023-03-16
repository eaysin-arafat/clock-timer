import React from "react";

class Clock extends React.Component {
    state = ({
        count: 0
    })

    intervalId = null

    incrimentTimer = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

    decrimentTimer = () => {
        if(this.state.count > 0) {
            this.setState ({
                count: this.state.count - 1
            })
        }    
    }

    strtTimer = () => {
        if(this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({count: this.state.count - 1}, () => {
                    if(this.state.count === 0) {
                        alert('Timer Finished')
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            }, 1000)
        }
    }

    stopTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetTimer = () => {
        this.setState({count: 0})
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    render() {
        return (
            <div>
                <h1>Simple Timer</h1>
                <button onClick={this.decrimentTimer}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.incrimentTimer}>+</button>
                <div>
                <button onClick={this.strtTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
            </div>
        )
    }
}

export default Clock