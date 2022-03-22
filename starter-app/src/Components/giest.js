import React, { Component } from 'react'
import GForm from './gForm';
import { Page, Text, Spacer, Tabs } from '@geist-ui/core'
import Car from './car'
import Footer from './footer'
import Inventory from './inventory'
import Container from './unMountEx';
import AgeForm from './ageForm';



class Home extends Component {

    render() {
        return (
            <Page>
                <Page.Header center>
                    <h2 className='pt3'>React Training Codes</h2>
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