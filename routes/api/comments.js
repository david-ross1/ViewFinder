const express = require("express");
const router = express.Router();
const passport = require("passport");

const Comment = require("../../models/Comment");
const View = require("../../models/View");
const validateCommentInput = require("../../validation/comments");

router.get("/view/:view_id", (req, res) => {
  View.findById(req.params.view_id)
    .populate({ path: "comments", populate: { path: "user" } })
    .then(view => res.json(view.comments))
    .catch(err =>
      res
        .status(404)
        .json({ nocommentfound: "No comment found from that view" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      text: req.body.text,
      user: req.body.user.id,
    });
    newComment.save().then(comment => {
      View.findOneAndUpdate(
        { _id: req.body.viewId },
        { $push: { comments: comment._id } },
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            return res.json(comment);
          }
        }
      );
    });
  }
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Comment.findByIdAndDelete(req.body.commentId, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully deleted");
      }
    });
    View.findOneAndUpdate(
      { _id: req.body.viewId },
      { $pull: { comments: req.body.commentId } },
      (err, success) => {
        if (err) {
          console.log(err);
        } else {
          return res.json(success);
        }
      }
    );
  }
);

module.exports = router;
