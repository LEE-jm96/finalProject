import styled from 'styled-components';

const Container = styled.div`
  font-family: 'NanumGothic';
`;
const TitleContainer = styled.h2`
  margin-left: 200px;
  margin-top: 50px;
  font-weight: 500;
`;

const TableContainer = styled.div`
  margin-left: 170px;
  margin-top: 30px;
  width: 480px;
  font-size: 13px;

  th {
    background-color: lightgray;
    width: 170px;
    text-align: center;
  }

  th:nth-child(1) {
    width: 100px;
  }
  th:nth-child(2) {
    width: 200px;
  }
  th:nth-child(3) {
    width: 200px;
  }
  .noData {
    width: 400px;
    font-size: 15px;
  }
`;

export { Container, TitleContainer, TableContainer };
