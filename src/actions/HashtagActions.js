import dispatcher from "../dispatcher.js";
import $ from "jquery";

export function createHashtag(text) {
    dispatcher.dispatch({
        type: "CREATE_HASHTAG",
        text: text
    });
}

export function searchByTag(hashtag){
    dispatcher.dispatch({
        type: "SEARCH_BY_TAG",
        text: hashtag
    });
    $.ajax({
        url: "/tagsearch",
        success: function (data, textStatus, jqXHR) {
            dispatcher.dispatch({type: "TAG_SEARCH_RETURNED", hashtag: hashtag, state: "ready", data: data});
        }
    });
}