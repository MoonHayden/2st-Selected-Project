import styled from 'styled-components';
// import variables from '../../styles/variables';

export const footerMenu = styled.div`
  font-weight: ${props => props.font};
  font-size: 25px;
`;

export const FooterInfo = styled.div`
  font-size: 15px;
  color: #767676;
  padding-top: 5px;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 30px 0px 30px 0px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-top: 1%;
  margin-left: 5%;
  border-top: 1px solid lightgray;
`;

export const SelectBox = styled.select`
  width: 300px;
  height: 50px;
  border-radius: 10px;
`;