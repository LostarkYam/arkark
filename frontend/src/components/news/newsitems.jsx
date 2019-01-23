import React from 'react';
import './newsitems.css';
import Logo from '../../img/lostarklight.png';


class NewsItems extends React.Component{
    render(){
        return (
            <div>
                <img className="news-img" alt="" src={Logo} />
            </div>
        );
    };
};


export default NewsItems;