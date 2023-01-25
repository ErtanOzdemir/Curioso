import styled from "styled-components";

const ErrorBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

export default function ErrorPage() {
  return (
    <>
      <ErrorBox>We couldn't find that page!</ErrorBox>
    </>
  );
}
