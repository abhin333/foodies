import { legacy_createStore as createStore} from 'redux'
 import rootred from './Redux/Reducers/main';

 const store=createStore(
    rootred
 )

 export default store;