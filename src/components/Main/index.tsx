import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>NextJS Boilerplate</S.Title>
    <S.Description>TypeScript, React, Next & Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Uma pessoa desenvolvedora sentada olhando para o computador"
    />
  </S.Wrapper>
);

export default Main;
