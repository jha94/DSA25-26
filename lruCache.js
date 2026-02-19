class LRUCache{
    constructor(capacity){
        this.map = new Map();
        this.capacity = capacity
    }
    get(key){
        const value = this.map.get(key)
        if(!value) return 'Oops!! value not found.'
        this.map.delete(key)
        this.map.set(key, value)
        return value
    }
    put(key, value){
        if(this.map.size===this.capacity){
           const key= this.map.keys().next().value
           this.map.delete(key)
        }
        else if(this.map.has(key)){
            this.map.delete(key)
        }
        this.map.set(key, value)
        return this.map
    }
}

const lruCache = new LRUCache(2)
lruCache.put(1, 10)
lruCache.put(2, 20)
lruCache.put(3, 30)
console.log(lruCache.get(1));
console.log(lruCache.get(2));


