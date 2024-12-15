import { configureStore } from "@reduxjs/toolkit";
import site from "./site"

const user = configureStore({
    reducer: {
      site,
    },
});

export default user;