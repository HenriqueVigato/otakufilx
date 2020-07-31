import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin: 3px;

  transition: opacity .3s;
  &:hover,
  &:focus {    
    width: 400px;
    border: 5px solid;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

VideoCardContainer.Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
opacity: 0;
background-color: #000000a3;
${VideoCardContainer}:hover &{
  opacity: 2;
}
`;

VideoCardContainer.Title.Text = styled.div`
background-color: rgba(132, 132, 132, 0.8);
color: #FFFF00;
font-size: 16px;
font-weight: bold;
position: absolute;
top: 85%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`;
