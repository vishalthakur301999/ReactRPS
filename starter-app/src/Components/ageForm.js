import React, { Component } from 'react'
import { Input, Button, Spacer, Table } from '@geist-ui/core'

export default class AgeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: null,
            profession: '',
            address: '',
            jsonDbData: []
        }
    }

    nameHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    ageHandler = (e) => {
        this.setState({ age: e.target.value });
    }
    professionHandler = (e) => {
        this.setState({ profession: e.target.value });
    }

    addressHandler = (e) => {
        this.setState({ address: e.target.value });
    }
    submitHandler = (e) => {
        const config = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                profession: this.state.profession,
                address: this.state.address
            })
        }
        const promise = fetch("http://localhost:8000/users", config);
        const promise1 = promise.then((Response) => {
            return Response.json();
        });
        promise1.then(user => {
            console.log(user);
        })
        alert("User added to db!");
    }
    fetchHandler = (e) => {
        const config = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        const promise = fetch("http://localhost:8000/users", config);
        const promise1 = promise.then((Response) => {
            return Response.json();
        });
        promise1.then(users => {
            this.setState({jsonDbData:users});
        })

    }

    render() {
        return (
            <div>
                <Input
                    placeholder="Your Name"
                    scale={4 / 3}
                    width="60%"
                    value={this.state.name}
                    onChange={this.nameHandler} />
                <Spacer h={.5} />
                <Input
                    placeholder="Your Age"
                    scale={4 / 3}
                    width="60%"
                    value={this.state.age}
                    onChange={this.ageHandler} />
                <Spacer h={.5} />
                <Input
                    placeholder="Your Profession"
                    scale={4 / 3}
                    width="60%"
                    value={this.state.profession}
                    onChange={this.professionHandler} />
                <Spacer h={.5} />
                <Input
                    placeholder="Your Address"
                    scale={4 / 3}
                    width="60%"
                    value={this.state.address}
                    onChange={this.addressHandler} />
                <Spacer h={.5} />
                <Button onClick={this.submitHandler}>Add Record</Button>
                <Spacer h={.5} />
                <Button onClick={this.fetchHandler}>Fetch All Records</Button>
                <Spacer h={.5} />
                <Table data={this.state.jsonDbData}>
                    <Table.Column prop="id" label="ID" />
                    <Table.Column prop="name" label="Name" />
                    <Table.Column prop="age" label="Age" />
                    <Table.Column prop="profession" label="Profession" />
                    <Table.Column prop="address" label="Address" />
                </Table>
            </div>
        )
    }
}
