import styled from "styled-components";

const ErrorBox = styled.div`
  font-family: Assistant;
  height: 100vh;
  font-weight: 600;
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
