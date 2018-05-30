import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        sceneId: '',
        routers:[],
        routersObj:{},
        zqid:'',
        cause:'',
        fromRouter:''
    },
    mutations: {
        "SET_SCENEID": function(state, sceneId) {
            state.sceneId = sceneId
            console.log('保存', state.sceneId)
        },
        "SET_ROUTER": function(state, routers) {
            state.routers = routers
            console.log('保存', state.routers)
        },
        "SET_ZQID": function(state, zqid) {
            state.zqid = zqid
            console.log('保存', state.zqid)
        },
        "SET_CAUSE": function(state, cause) {
            state.cause = cause
            console.log('保存', state.cause)
        },
        "SET_ROUTEROBJ": function(state, routersObj) {
            state.routersObj = routersObj
            console.log('保存', state.routersObj)
        },
        "SET_FROMROUTER": function(state, fromRouter) {
            state.fromRouter = fromRouter
            console.log('保存', state.fromRouter)
        }
    },
    getters: {
        "GET_SCENEID": function(state) {
            console.log('获取', state.sceneId)
            return state.sceneId
        },
        "GET_ROUTER": function(state) {
            console.log('获取', state.routers)
            return state.routers
        },
        "GET_ZQID": function(state) {
            console.log('获取', state.zqid)
            return state.zqid
        },
        "GET_CAUSE": function(state) {
            console.log('获取', state.cause)
            return state.cause
        },
        "GET_ROUTEROBJ": function(state) {
            console.log('获取', state.routersObj)
            return state.routersObj
        },
        "GET_FROMROUTER": function(state) {
            console.log('获取', state.fromRouter)
            return state.fromRouter
        }
    },
    actions: {
        "SET_SCENEID": function(state, sceneId) {
            console.log('获取', state.sceneId)
            store.commit("SET_SCENEID", sceneId)
        },
        "SET_ROUTER": function(state, routers) {
            console.log('获取', state.routers)
            store.commit("SET_ROUTER", routers)
        },
        "SET_ZQID": function(state, zqid) {
            console.log('获取', state.zqid)
            store.commit("SET_ZQID", zqid)
        },
        "SET_CAUSE": function(state, cause) {
            console.log('获取', state.cause)
            store.commit("SET_CAUSE", cause)
        },
        "SET_ROUTEROBJ": function(state, routersObj) {
            console.log('获取', state.routersObj)
            store.commit("SET_ROUTEROBJ", routersObj)
        },
        "SET_FROMROUTER": function(state, fromRouter) {
            console.log('获取', state.fromRouter)
            store.commit("SET_FROMROUTER", fromRouter)
        }
    }
})

//store使用   this.$store.getters.GET_CAUSE
//store赋值   this.$store.dispatch('SET_CAUSE',赋值);
export default store