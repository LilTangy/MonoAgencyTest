import { IClient } from "../../../model/IClient"
import cls from "./Client.module.css"

interface ClientProps {
    client: IClient
}

export const Client = ({ client }: ClientProps) => {
    return (
        <div className={cls.clientCard}>
            <p>Name: {client.name}</p>
            <p>Email: {client.email}</p>
            <p>Status: {client.status}</p>
        </div>
    )
}
