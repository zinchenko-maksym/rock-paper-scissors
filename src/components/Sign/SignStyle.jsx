import styled from 'styled-components';
import RockImage from '../../images/icon-rock.svg';
import PaperImage from '../../images/icon-paper.svg';
import ScissorsImage from '../../images/icon-scissors.svg';

export const Sign = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const Rock = styled.div`
  border: 10px solid #DD3A59;
  background-color: #fff;
  background-image: url(${RockImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
`;

export const Paper = styled.div`
  border: 10px solid #4968F4;
  background-color: #fff;
  background-image: url(${PaperImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
`;

export const Scissors = styled.div`
  border: 10px solid #EBA319;
  background-color: #fff;
  background-image: url(${ScissorsImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
`;
