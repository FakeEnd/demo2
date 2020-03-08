import React, { Component } from 'react';
import './App.css';

export class Item extends Component {
    render() {
        const { content, activedId, id } = this.props;
        return (
            <>
            {
                content.isExist 
                    ?
                    <div className={activedId === id ? 'item-active' : 'item'} >
                        {content.value}
                    </div>
                    :
                    <div className="blank" >
                    </div>
            }
            </>
        )
    }
}
