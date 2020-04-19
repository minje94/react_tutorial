import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props;

        //if(!data) return null; defaultProps와 같음.

        const list = data.map(
            info => (<PhoneInfo info = {info} key = {info.id} />)
        );

        return (
            <div>
                {list}        
            </div>
        );
    }
}

export default PhoneInfoList;