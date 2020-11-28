import React from 'react';
import { Styled } from './Registration.styles';

export default class Registration extends React.Component {

    constructor(props: any){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any){
        console.log("Something happened");
        event.preventDefault();
    }

    render () {

        return (
            <Styled.Background>
                
                <div>

                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" />

                    <label>Password</label>
                    <input type="text" />

                    <span>
                        <label>Status</label>
                        <select id="status" name="status">
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                            <option value="dnd">Do not disturb</option>
                        </select>
                    </span>
                    
                    <span>
                        <input type="checkbox" id="remember" name="remember" value="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </span>

                    <span>
                        <input type="checkbox" id="password" name="password" value="password" />
                        <label htmlFor="password">Remember my password</label>
                    </span>

                    <span>
                        <input type="checkbox" id="automatic" name="automatic" value="automatic" />
                        <label htmlFor="automatic">Sign me in automatically</label>
                    </span>
                    

                    <button type="submit" value="Submit">Sign in</button>
                </form>
            </Styled.Background>
        )
    }
}