import React from 'react';

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
                <h2>{this.props.groupName} (X/Y)</h2>

                <ul>
                    {this.props.items.map(item => (
                        <li>{item.displayname}</li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}