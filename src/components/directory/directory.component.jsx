import React from 'react';
import FriendsName from '../friends-name/friends-name.component';
import './directory.styles.scss'

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'sanju',
                  imageUrl: 'https://i.ibb.co/cvpntL1/sanju.png',
                  id: 1,
                  linkUrl: 'shop/sanju'
                },
                {
                  title: 'greeshma',
                  imageUrl: 'https://i.ibb.co/px2tCc3/greeshma.png',
                  id: 2,
                  linkUrl: 'shop/greeshma'
                },
                {
                  title: 'sharanya',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sharanya.png',
                  id: 3,
                  linkUrl: 'shop/sharanya'
                },
                {
                  title: 'arjun',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/arjun.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/arjun'
                },
                {
                  title: 'anandhu',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/anandhu.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/anandhu'
                }
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <FriendsName key={id} title={title} imageUrl={imageUrl}/>
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;