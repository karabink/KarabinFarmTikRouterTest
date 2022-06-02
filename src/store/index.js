import Vue from 'vue'
import Vuex from 'vuex'
import {v4 as wuidv4} from 'wuid';

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        products:[]
    },
    muataions:{
        AddProduct(state, product){
            state.product.push({
                id: wuidv4(),
                ...product
            })
        }
    },
    actions:{
        saveProduct({commit},prod){
            commit('addProduct', prod)
        }
    },
    getters:{
        getProducts:state=>state.products
    },
    modules:{}
})

export default store;