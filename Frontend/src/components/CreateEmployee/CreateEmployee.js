import { useState } from 'react';
import axios from '../../axios/axiosInstance';

import Heading from '../Heading/Heading';


import Form from '../Form/Form';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import AdminNavBar from '../NavBar/AdminNavBar';

const CreateEmployee = props => {
    const options = ["Airline", "Airport"];

    const [employeeType, setEmployeeType] = useState({
        "type": "Airline"
    });

    
    
    const onChange = value => {
        setEmployeeType({
            "type": value
        });
    };

    
    
    const onFormSubmitHandler = event => {
        event.preventDefault();
    
        let employee = {};

        for(let i = 0; i < event.target.length - 1; i++) {
            employee[event.target[i].name] = event.target[i].value;
        }
    
        axios.post(`/signup/employee`, employee)
        .then(response => {
            
        })
        .catch(error => {
            
        });


        document.getElementById("add-employee-form").reset();
    };
    
    return (
        <>
            <AdminNavBar />
            <div>
                <Heading header="1" heading={props.heading} />

                
                <Form id="add-employee-form" onSubmit={onFormSubmitHandler}>
                    <Input label="Username" type="text" name="username"  required={true} />
                    <Input label="Email" type="email" name="email" required={true} />
                    <Input label="Password" type="password" name="password"  required={true} />
                    <Select label="Employee Type" name="employeetype" required={true} options={options} onChange={onChange} />
                    {employeeType.type === "Airline" ? 
                        <Input label="Airline" type="text" name="airline"  required={true} /> :
                        <Input label="City" type="text" name="city"  required={true} />
                    }
                    <Button type="submit"> Add Employee </Button>
                </Form>
            </div>
        </>
    )
};

export default CreateEmployee;