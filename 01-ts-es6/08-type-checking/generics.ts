'use strict';

// class Audio {}
class Video {}
class Link {}
// class Text {}

class Post<T> {
  content: T;
}

let videoPost: Post<Video>;
