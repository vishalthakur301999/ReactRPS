import React from 'react';
import GForm from './gForm';
import { Page, Text, Spacer } from '@geist-ui/core'
import Car from './car'
import Inventory from './inventory'

const Home = () => (
  <Page>
        <Page.Header>
            <h2>React Training Codes</h2>
        </Page.Header>
        <Page.Content>
            <Text h1>Fill the Form, Please🥹</Text>
            <GForm/>
            <Spacer h={2} />
            <Car />
            <Spacer h={.5} />
            <Inventory price="150"/>
            <Spacer h={.5} />
            <Inventory price="200"/>
            <Spacer h={.5} />
            <Inventory price="120"/>
        </Page.Content>       
        <Page.Footer>
            <h3>Vishal Thakur</h3>
            <h5>This is a footer</h5>
        </Page.Footer>
  </Page>
)

export default Home;