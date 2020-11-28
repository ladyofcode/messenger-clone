import React from 'react';
import {Styled} from './ContactGroup.styles'

interface Props {
    items: Array <{
        id: number,
        displayname: string
    }>,
    groupName: string
}

export default class ContactGroup extends React.Component <Props> {

    static defaultProps = {
        items: [],
        groupName: 'No group name'
    }

    constructor(props: any){
        super(props)
    }

    render() {

        // console.log(this.props)

        return (
            <React.Fragment>
                <Styled.ContactListTitle>{this.props.groupName} (X/Y)</Styled.ContactListTitle>

                <Styled.ContactList>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.displayname}</li>
                    ))}
                </Styled.ContactList>
            </React.Fragment>
        )
    }
}