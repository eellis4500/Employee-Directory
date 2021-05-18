import api from "../../utils/api"

export default function EmployeeData() {
    return (
        api.getUsers().then(function (response) {
            console.log(response)
        })
    )
}