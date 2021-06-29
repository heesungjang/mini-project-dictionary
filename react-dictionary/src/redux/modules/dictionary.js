import { firestore } from "../../firebase";

// 파이어 베이스 db 레프런스 생성
const dictionaryRef = firestore.collection("dictionary").orderBy("created");

//  Actions
const LOAD = "dictionary/LOAD";

//  Initial State
const initialState = {
    list: [
        {
            word: "ㅎ1ㅎ1",
            desc: "히히 번형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
            example: "안녕하세요 ㅎ1ㅎ1",
        },
        {
            word: "파이어베이스",
            desc: "서버리스",
            example: "DB 만들기 귀찮을때 써봐요~",
        },
    ],
};

//  Action Creators
export const loadDictionary = (dictionary) => {
    return { type: LOAD, dictionary };
};

export const loadDictionaryFB = () => {
    return async (dispatch) => {
        const allDocs = await dictionaryRef.get();
        let dictionary_data = [];
        for (const doc of allDocs.docs) {
            dictionary_data = [
                ...dictionary_data,
                { id: doc.id, ...doc.data() },
            ];
        }
        // console.log(dictionary_data);
        dispatch(loadDictionary(dictionary_data));
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "dictionary/LOAD": {
            if (action.dictionary.length > 0) {
                return { list: action.dictionary };
            }
            return state;
        }
        default:
            return state;
    }
}
