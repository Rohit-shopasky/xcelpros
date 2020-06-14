import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";
import  createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';


function saveToLocalStorage(state){
    try {

        const stateData = JSON.stringify(state);
        localStorage.setItem('state',stateData)
        
    } catch (error) {
        
    }
}

function loadFromLocalStorage(){
    try {
        const stateData = localStorage.getItem("state");
        if(stateData===null)
        return undefined
        else
        return JSON.parse(stateData)
    } catch (error) {
        console.log("error",error);
        return undefined
    }
}


const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
  
    const savedState = loadFromLocalStorage()

    const store = createStore(
        rootReducer,
        savedState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware),
        )
    )
    sagaMiddleware.run(rootSaga)
    store.subscribe(()=>saveToLocalStorage(store.getState()))
    return store;
}

export default configureStore;