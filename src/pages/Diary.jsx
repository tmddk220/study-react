import { useParams } from "react-router-dom";

// URL Parameter : / 뒤에 아이템의 id를 명시
// (예) ~/product/id값
// 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용

const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
