import { IClient } from "../../../model/IClient"
import { Client } from "../../Client"
import cls from "./ClientList.module.css"
import { memo } from "react"

interface ClientListProps {
    clients: IClient[]
}

export const ClientList = memo(({ clients }: ClientListProps) => {
    console.log("list was rendered")
    return (
        <div className={cls.clientList}>
            {clients.map((client) => (
                <Client client={client} key={client.id} />
            ))}
        </div>
    )
})
