import { firestore } from "../../firebase";

// 파이어 베이스 db 레프런스 생성
const dictionaryRef = firestore.collection("dictionary");

// 1. Actions
const LOAD = "dictionary/LOAD";

// 2. Initial State
const initialState = {
    dictionary: [
        {
            word: "ㅎ1ㅎ1",
            desc: "히히 번형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
            exp: "안녕하세요 ㅎ1ㅎ1",
        },
        {
            word: "이게뭐야",
            desc: "무슨 이런 사전이 있어",
            exp: "아오 귀찮아",
        },
    ],
};

// 3. Action Creators
export const loadDictionary = (dictionary) => {
    return { type: LOAD, dictionary };
};

// 4. Reducer

export default function reducer(state = initialState, action = {}) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "dictionary/LOAD": {
            return state;
        }
        default:
            return state;
    }
}
