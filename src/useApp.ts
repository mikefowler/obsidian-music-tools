import { App } from "obsidian";
import { useContext } from "react";
import AppContext from "./AppContext";

const useApp = (): App | undefined => useContext(AppContext);

export default useApp;
