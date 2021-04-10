import React from 'react'
import { Button } from 'antd'
import {Link,  Router }from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Link to='/loginpage'>
                <Button>Login-Page</Button>
            </Link>
            <Link to='/dashboard'>
                <Button>Dashboard</Button>
            </Link>
            <Link to='/memberPage'>
                <Button>Member-Data</Button>
            </Link>
            <Link to='/overviewpage'>
                <Button>overViewPage</Button>
            </Link>
            <Link to='/changesPages'>
                <Button>ChangesPage</Button>
            </Link>
            <Link to='/resultPage'>
                <Button>Result-Page</Button>
            </Link>
            <Link to='/memberpage2'>
                <Button>MemberPage2</Button>
            </Link>
        
        </div>
    )
}

export default Main
