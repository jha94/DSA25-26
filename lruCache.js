class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }
    get(key) {
        if(!this.cache.has(key)) return -1
        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }
    put(key, value) {
        if (this.cache.get(key)) {
            this.cache.delete(key)
        } else {
            if (this.cache.size === this.capacity) {
                const firstKey = this.cache.keys().next().value
                this.cache.delete(firstKey)
            }
        }
        this.cache.set(key, value)
    }
}

const lruCache = new LRUCache(2)
lruCache.put(1, 10)
lruCache.put(2, 20)
lruCache.put(1, 30)
lruCache.put(3, 40)
console.log(lruCache.get(3))