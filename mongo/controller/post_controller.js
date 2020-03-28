//post_controller.js
exports.showIndex = (req, res, next) => {
    res.send('ruunning node api post');
}

const Post = require('../model/post_model.js');//include post schema

exports.addPost = (req, res, next) => {
    res.send("post method not implemented");
    //   const event = new Event({
    //        title: req.body.title,
    //        description: req.body.description,
    //        image: req.body.image
    //   }).then(result => {
    //        return result.save()
    //   }).then(() => {
    //        res.send('post added successfully');
    //   }).catch(err => {
    //        res.status(400).send(err);
    //   })
}
exports.showPost = (req, res, next) => {
    Post.find() //fetches all the posts
       .then(result => {
           res.send(result);
       }).catch(err => {
           res.status(400).send(err);
       })
}