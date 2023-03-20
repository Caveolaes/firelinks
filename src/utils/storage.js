/*
* Storage 二次封装
* @author suixin
* */
import config from './../config'

export default {
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace)|| "{}")
    },
    setItem(key, val) {
        // let obj = {[key]: val}
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    getItem(key) {
        return this.getStorage()[key]
    },
    clearItem(key) {
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))

    },
    clearAll() {
        window.localStorage.clear()
    },
}
