import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  background-color: #1296ec;
  line-height: 40px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  margin-left: 30px;
  position: relative;
  input {
    font-size: 12px;
    height: 50px;
    width: 350px;
    border-radius: 50px;
    line-height: 40px;
  }
  .fa-magnifying-glass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
  }
`;

const Ul1 = styled.ul`
  text-align: center;
  width: 80px;
  list-style: none;
  line-height: 15px;
  margin-right: 30px;
  margin-top: 15px;
`;

const Ul2 = styled.ul`
  text-align: center;
  width: 80px;
  list-style: none;
  font-size: 12px;
  line-height: 15px;
  margin-right: 30px;
  margin-top: 15px;
`;

const Margin1 = styled.div`
  margin-left: 100px;
`;

const Margin2 = styled.div`
  margin-left: 80px;
`;

const DropDown = styled.div`
  background-color: #1296ec;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  position: relative;
  width: 250px;
`;

const ListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: lightgray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 3px;
  margin-top: 15px;
  margin-left: 60px;
  position: absolute;
  z-index: 1000;
`;

export {
  HeaderContainer,
  SearchContainer,
  Ul1,
  Ul2,
  DropDown,
  ListContainer,
  Margin1,
  Margin2,
};
