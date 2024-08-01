import { useSearchParams } from "react-router-dom";

// Query String : ? 뒤에 변수명과 값 명시
// (예) ~/search?q=검색어
// 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));
  return <div>Home</div>;
};

export default Home;
