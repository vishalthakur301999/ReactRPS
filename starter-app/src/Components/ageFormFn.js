import React, {useState} from React;

function AgeFormFn() {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [jsonDbData, setJsonDbData] = useState([]);

    nameHandler = (e) => {
        setName(e.target.value)
    }

    ageHandler = (e) => {
        setAge(e.target.value)
    }
    submitHandler = (e) => {
        const config = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                age: age,
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
            setJsonDbData(users);
        })
    }

    return (
        <div>
            <Input
                placeholder="Your Name"
                scale={4 / 3}
                width="60%"
                value={name}
                onChange={nameHandler} />
            <Spacer h={.5} />
            <Input
                placeholder="Your Age"
                scale={4 / 3}
                width="60%"
                htmlType="number" 
                value={age}
                onChange={ageHandler} />
            <Spacer h={.5} />
            <Button onClick={submitHandler}>Add Record</Button>
            <Spacer h={.5} />
            <Button onClick={fetchHandler}>Fetch All Records</Button>
            <Spacer h={.5} />
            <Table data={jsonDbData}>
                <Table.Column prop="id" label="ID" />
                <Table.Column prop="name" label="Name" />
                <Table.Column prop="age" label="Age" />
            </Table>
        </div>
    )
}