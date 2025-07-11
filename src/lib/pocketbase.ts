import Pocketbase from "pocketbase";

export const API_URL = "https://b0m772h91854471.pocketbasecloud.com";

export const POST_COLLECTION_NAME = "posts";
export const TAG_COLLECTION_NAME = "tags";
export const TOPIC_COLLECTION_NAME = "topics";

export const pb = new Pocketbase(API_URL);
