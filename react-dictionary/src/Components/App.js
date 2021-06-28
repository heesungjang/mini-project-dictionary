import React, { Component } from "react";
import Router from "./Router";

import { firestore } from "../firebase";

class App extends Component {
    async componentDidMount() {
        const dictionary = firestore.collection("dictionary");
        const doc = await dictionary.doc("5tG5YjltCiX9imZY8ue0").get();
        console.log(doc.data());
    }
    render() {
        return (
            <>
                <Router />
            </>
        );
    }
}
export default App;
