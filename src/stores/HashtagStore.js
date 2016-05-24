import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js";

class HashtagStore extends EventEmitter{
    constructor(){
        super();
        this.hashtags = [{}];
    }
    
    getAll(){
        return this.hashtags;
    }
    
    createHashtags(data){
        
        data.forEach((item) =>{
            if(item.type == "image"){
                this.hashtags.push({
                    id: Date.now(),
                    text: item.caption.text, 
                    image: item.images.low_resolution.url,
                    username: item.user.username 
                });
            }
        });
        
        this.emit("change");
    }
    
    handleActions(action){
        switch(action.type){
            case "CREATE_HASHTAG": {
                this.createHashtag(action.text)
            }   
            case "TAG_SEARCH_RETURNED": {
                this.createHashtags(action.data);
            }
        }
    }
}

const hashtagStore = new HashtagStore;
dispatcher.register(hashtagStore.handleActions.bind(hashtagStore));
window.dispatcher = dispatcher;
export default hashtagStore;