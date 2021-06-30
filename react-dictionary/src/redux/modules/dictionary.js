import { firestore } from "../../firebase";
import history from "../../history";

// 파이어 베이스 db 레프런스 생성
const dictionaryRef = firestore.collection("dictionary").orderBy("created");
const dictionaryRefAdd = firestore.collection("dictionary");

//  Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";

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

export const createDictionary = (dictionary) => {
    return { type: CREATE, dictionary };
};

export const updateDictionary = (dictionary) => {
    return { type: UPDATE, dictionary };
};

export const deleteDictionary = (dictionary) => {
    return { type: DELETE, dictionary };
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

export const addDictionaryFB = (dictionary) => {
    return function (dispatch) {
        let dictionary_data = {
            word: dictionary.word,
            desc: dictionary.desc,
            example: dictionary.example,
            created: dictionary.created,
        };

        dictionaryRefAdd.add(dictionary_data).then((docRef) => {
            dictionary_data = { ...dictionary_data, id: docRef.id };
            dispatch(createDictionary(dictionary_data));
        });
    };
};

export const updateDictionaryFB = (index, newDictionary) => {
    return function (dispatch, getState) {
        const previous_dictionary_data = getState().dictionary.list[index];

        dictionaryRefAdd
            .doc(previous_dictionary_data.id)
            .update(newDictionary)
            .then((docRef) => {
                dispatch(updateDictionary(newDictionary));
                history.push("/");
            });
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
        case "dictionary/CREATE": {
            const new_dictionary_list = [...state.list, action.dictionary];
            return { list: new_dictionary_list };
        }
        case "dictionary/UPDATE": {
            if (action.dictionary.length > 0) {
                return { list: action.dictionary };
            }
            return state;
        }
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }
}
