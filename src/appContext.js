import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [people, setPeople] = useState([]);

    const [refreshSwitch, setRefreshSwitch] = useState(true);

    return (
        <AppContext.Provider
            value={{ people, setPeople, refreshSwitch, setRefreshSwitch }}>
            {children}
        </AppContext.Provider>
    );
}

export function UseAppContext() {
    return useContext(AppContext);
}