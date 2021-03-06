import React from 'react'
import "./EmployeeTitles.css"

export default function EmployeeTitles(props) {
    return (
        <div  className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.birthday}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}