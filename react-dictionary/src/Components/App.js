import React, { Component } from "react";
import Router from "./Router";
import firebase from "firebase/app";
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

        //  추가하기
        // await dictionaryRef
        //     .add({
        //         word: "나는 좋아요 444",
        //         desc: "나는 싫어요",
        //         example: "하핳하",
        //         created: firebase.firestore.FieldValue.serverTimestamp(),
        //     })
        //     .then((docRef) => {
        //         console.log(docRef.id);
        //     });

        // 업데이트
        // await dictionaryRef.doc("co09sG3YX5iRxzPfeRZL").update({
        //     word: "나는 업데이트 할꺼야!!!!",
        // });

        // 지우기

        await dictionaryRef
            .doc("Ir39Y4UKs5Fso0jOMKbi")
            .delete()
            .then((docRef) => {
                console.log("지웠어요");
            });
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
