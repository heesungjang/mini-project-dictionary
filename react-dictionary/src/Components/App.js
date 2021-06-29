import React, { Component } from "react";
import Router from "./Router";

import { firestore } from "../firebase";

class App extends Component {
    async componentDidMount() {
        const dictionaryRef = firestore.collection("dictionary");
        const allDocs = await dictionaryRef.get();
        let dictionary_data = [];
        for (const doc of allDocs.docs) {
            dictionary_data = [
                ...dictionary_data,
                { id: doc.id, ...doc.data() },
            ];
        }
        console.log(dictionary_data);
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
