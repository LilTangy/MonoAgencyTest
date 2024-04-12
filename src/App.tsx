import React, { useEffect, useMemo, useState } from "react"
import "./App.css"
import { ClientList } from "./components/ClientList"
import dataClients from "./db"
import { useBooleanState } from "./hooks/useBooleanState"

enum filterStatusValue {
    all = "all",
    active = "active",
    inactive = "inactive",
}

function App() {
    const [clients, setClients] = useState(dataClients)

    const [status, setStatus] = useState<filterStatusValue>(
        filterStatusValue.all,
    )

    // const [sortFlag, setSortFlag] = useState<boolean>(false)
    const [sortFlag, toggleSortFlag] = useBooleanState(false)
    const filteredClients =
        status === filterStatusValue.all
            ? clients
            : clients.filter((client) => client.status === status)

    const sortedAndFilteredClients = useMemo(() => {
        return [...filteredClients].sort((a, b) => a.name.localeCompare(b.name))
    }, [filteredClients])

    return (
        <div className="App">
            <h1>CRM System</h1>
            <div>
                <button onClick={() => setStatus(filterStatusValue.all)}>
                    All
                </button>
                <button onClick={() => setStatus(filterStatusValue.active)}>
                    Active
                </button>
                <button onClick={() => setStatus(filterStatusValue.inactive)}>
                    Inactive
                </button>
                <button onClick={toggleSortFlag}>Sort array</button>
            </div>
            {sortFlag ? (
                <ClientList clients={sortedAndFilteredClients} />
            ) : (
                <ClientList clients={filteredClients} />
            )}
        </div>
    )
}

export default App
