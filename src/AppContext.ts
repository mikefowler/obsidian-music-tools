import { createContext } from "react";
import { App } from "obsidian";

const AppContext = createContext<App | undefined>(undefined);

export default AppContext;
