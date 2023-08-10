"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";
import { useState } from "react";

export default function HomePage() {
  // const [comments, addComments] = useState([]);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}

        <PostOwner
          image={"me.jpg"}
          name={"Pubest Ruengkum 650610798"}
          caption={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          like={100}
        ></PostOwner>

        {/* Comment Example */}

        {/* Reply Example */}
        {/* map-loop render Comment component here */}
        {comments.map((comment) => (
          <Comment
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
}
