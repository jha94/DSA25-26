class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
    }
    put(key,value){
        if(this.map.has(key)){
            this.map.delete(key)
        } else{
            if(this.map.size===this.capacity){
                const oldestKey = this.map.keys().next().value
                this.map.delete(oldestKey)
            }
        }
        this.map.set(key, value)
    }
    get(key){
        if(!this.cache.has(key)) return -1
        const value = this.map.get(key);
        this.map.delete(key)
        this.map.set(key, value)
        return value
    }
}