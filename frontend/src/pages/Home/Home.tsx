import React from 'react';
import ContactGroup from '../../components/ContactGroup/ContactGroup'

export default class Home extends React.Component {
    
    render(){

        const list = [
            {
                id: 1,
                displayname: 'That friend in the contact list'
            },
            {
                id: 2,
                displayname: 'LoNg NaMeS ArE StUpiD'
            }
        ]

        const customGroupName = ['Some friends', 'Online', 'Offline']

        return (
            <React.Fragment>
                /* Main menu*/
                /* User details */

                /* Custom groups contacts */
                <ContactGroup items={list} groupName={customGroupName[0]}/>

                /* Online contacts */
                <ContactGroup items={list} groupName={customGroupName[1]}/>

                /* Offline contacts */
                <ContactGroup items={list} groupName={customGroupName[2]}/>

                /* Add a contact */
                
            </React.Fragment>
        )
    }
}