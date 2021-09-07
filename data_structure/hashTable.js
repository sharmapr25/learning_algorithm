class HashTable{
  constructor(){
    this.values = {}
    this.size = 10;
    this.length = 0;
  }

  calculateHash(key){
    return key.toString().length % this.size;
  }

  add(key, value){
    const hash = this.calculateHash(key);
    if(!this.values.hasOwnProperty(hash)){
      this.length++ ;
    }
    this.values[hash]= {[key]: value};
  }

  search(key){
     const hash = this.calculateHash(key);
     if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
        return this.values[hash][key];
     }
     return null;
  }
}

const hashTable = new HashTable();
hashTable.add('Canada', 300);
hashTable.add('Germany', 100);
hashTable.add('Italy', 50);

console.log(hashTable.search('Germany'));