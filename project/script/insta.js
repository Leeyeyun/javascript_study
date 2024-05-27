const like = document.querySelector('.like')
const comment = document.querySelector(`.comment`)
const paper = document.querySelector(`.paper`)
console.log(like)
console.log(like.children)
console.log(like.children[0])
console.log(like.children[0].src)
like.addEventListener('click',function(){
    like.children[0].src = "./images/like_on.png" 
})
comment.addEventListener('click',function(){
    comment.children[0].src = "./images/comment_on.png" 
})
paper.addEventListener('click',function(){
    paper.children[0].src = "./images/paper_on.png" 
})