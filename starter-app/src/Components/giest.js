import React, { Component } from 'react'
import GForm from './gForm';
import { Page, Text, Spacer, Tabs, Button } from '@geist-ui/core'
import Car from './car'
import Footer from './footer'
import Inventory from './inventory'
import Container from './unMountEx';
import AgeForm from './ageForm';
import Score from './score';
import ScoreFN from './scoreFN';
import Timer from './hooks';
import { Outlet, Link} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <Page>
                <Page.Header center>
                    <h2 className='pt3'>React Training Codes</h2>
                    <Spacer h={2} />
                    <Link to="/home"><Button scale={0.5}>Home</Button></Link>
                    <Link to="/about"><Button scale={0.5}>About</Button></Link>
                </Page.Header>
                <Page.Content>
                    <Tabs initialValue="3">
                        <Tabs.Item label="Name Form and Car" value="1">
                            <Text h1>Fill the Form, Please🥹</Text>
                            <GForm />
                            <Spacer h={.5} />
                            <Car />
                            <Spacer h={.5} />
                        </Tabs.Item>
                        <Tabs.Item label="Inventory and Container" value="2">
                            <Inventory price="150" />
                            <Spacer h={.5} />
                            <Inventory price="200" />
                            <Spacer h={.5} />
                            <Container />
                            <Spacer h={.5} />
                        </Tabs.Item>
                        <Tabs.Item label="Form 2 Json" value="3">
                            <AgeForm/>
                            <Spacer h={.5} />
                        </Tabs.Item>
                        <Tabs.Item label="Pure Component and Hooks" value="4">
                            <Score score="87"/>
                            <Spacer h={.5} />
                            <ScoreFN score="25"/>
                            <Spacer h={.5} />
                            <Timer />
                        </Tabs.Item>
                    </Tabs>

                </Page.Content>
                <Page.Footer>
                    <Footer favcolor="Orange" />
                </Page.Footer>
            </Page>
        )
    }
}

export default Home;