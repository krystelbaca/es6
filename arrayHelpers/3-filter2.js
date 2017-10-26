// using filter we should be able to get those comments that are related to the post.id

var post = {id: 4, title: 'The post'}
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
]

function commentsForPost (post, comments) {
  return comments.filter(arg => arg.postId === post.id)
}

var postComments = commentsForPost(post, comments)
console.log(postComments)
// expected: [ { postId: 4, content: 'awesome post' },{ postId: 4, content: 'neat' } ]
