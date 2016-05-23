import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js";

class HashtagStore extends EventEmitter{
    constructor(){
        super();
        this.hashtags = [
            {
                id: 312098310,
                hashtag: "helloworld"
            }
        ];
    }
    
    getAll(){
        return this.hashtags;
    }
    
    createHashtag(text){
        this.hashtags.push({
           id: Date.now(),
           hashtag: text 
        });
        this.emit("change");
    }
    
    handleActions(action){
        switch(action.type){
            case "CREATE_HASHTAG": {
                this.createHashtag(action.text)
            }   
            case "TAG_SEARCH_RETURNED": {
                this.createHashtag(action.data.meta.code);
            }
        }
    }
}

const hashtagStore = new HashtagStore;
dispatcher.register(hashtagStore.handleActions.bind(hashtagStore));
window.dispatcher = dispatcher;
export default hashtagStore;