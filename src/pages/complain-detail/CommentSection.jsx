import React, { useState } from "react";
import styled from "styled-components";

import CommentIcon from "../../assets/icons/CommentIcon.svg";

const CommentSection = ({}) => {
  // 댓글 상태 관리
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "나리",
      text: "우와~ 진행되면 리액트고수가 될 거 같아!!",
      date: "2024. 08. 30. 22:30",
    },
    {
      id: 2,
      username: "도연",
      text: "개발 배워서 백야 해커톤 나가야지!",
      date: "2024. 08. 30. 22:31",
    },
    {
      id: 3,
      username: "영록",
      text: "상받고싶다...",
      date: "2024. 08. 30. 22:34",
    },
    {
      id: 4,
      username: "윤지",
      text: "삽질을 하다보면 더 나아지겠죠..??",
      date: "2024. 08. 30. 22:36",
    },
    {
      id: 5,
      username: "예령",
      text: "똑똑해지고 싶어요ㅜㅜㅜ~",
      date: "2024. 08. 30. 22:38",
    },
  ]);

  const [newComment, setNewComment] = useState(""); // 새로운 댓글 입력값

  // 댓글 등록 함수
  const handleAddComment = () => {
    if (newComment.trim() === "") {
      alert("댓글을 입력해주세요!"); // 빈 입력값 방지
      return;
    }

    const now = new Date(); // 현재 시간
    const formattedDate = `${now.getFullYear()}. ${String(
      now.getMonth() + 1
    ).padStart(2, "0")}. ${String(now.getDate()).padStart(
      2,
      "0"
    )}. ${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;

    const newCommentObj = {
      id: comments.length + 1,
      username: "조은",
      text: newComment,
      date: formattedDate,
    };

    setComments([...comments, newCommentObj]); // 기존 댓글에 새 댓글 추가
    setNewComment(""); // 입력 필드 초기화
  };

  return (
    <CommentWrapper>
      <CommentDivider>
        <Line />
        <DividerText>이 민원에 대해 의견을 남겨보세요!</DividerText>
        <Line />
      </CommentDivider>
      <IconContainer>
        <img src={CommentIcon} alt="comment" />
        <CommentCount>{`댓글 ${comments.length}개`}</CommentCount>
      </IconContainer>

      {comments.map((comment) => (
        <Comment key={comment.id}>
          <CommentContent className="content">
            <div className="username">{comment.username}</div>
            {comment.text}
          </CommentContent>
          <div className="date">{comment.date}</div>
        </Comment>
      ))}
      <CommentInput>
        <textarea
          placeholder="댓글을 작성해주세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} // 입력값 업데이트
        ></textarea>
        <button onClick={handleAddComment}>등록하기</button>
      </CommentInput>
    </CommentWrapper>
  );
};

export default CommentSection;
const CommentDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0; /* 위아래 여백 */
`;
const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ccc; /* 선 색상 */
`;
const DividerText = styled.span`
  margin: 0 10px; /* 텍스트와 선 사이의 간격 */
  font-size: 16px; /* 텍스트 크기 */
  color: #333; /* 텍스트 색상 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const CommentCount = styled.p``;

// 댓글 섹션
const CommentWrapper = styled.div`
  padding-top: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .date {
    font-size: 14px;
    color: #7f8c8d;
  }
`;
const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  .username {
    font-weight: 700;
    margin-bottom: 3px;
  }
  .content {
    font-size: 16px;
    color: #34495e;
  }
`;

// 댓글 입력창
const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  textarea {
    width: 100%;
    height: 80px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #bdc3c7;
    border-radius: 8px;
    margin-bottom: 10px;
    resize: none;
  }

  button {
    align-self: flex-end;
    padding: 8px 16px;
    font-size: 14px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    &:hover {
      background-color: #2980b9;
    }
  }
`;
