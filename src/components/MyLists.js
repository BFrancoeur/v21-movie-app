import React from 'react';
import styled from 'styled-components';

const listName = 'Favorite Adventure Movies';
const listType = 'Adventure';
const listDescription = 'Movies that are adventurous and leave me feeling great!'

const MyLists = styled.section
`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0;
    margin: 2.5rem 0;
    border: var(--border-default);
`;

const SectionHeader = styled.div
`
width: 100%;
flex: 1 0 100%;
width: 100%;
text-align: center;
padding: .5rem 0;
border 1px solid #555;
`;

const SectionTitle = styled.h2
`
font-size: 1.5rem;
font-weight: bold;
line-height: 2;
`;

const ListsRow = styled.div
`
flex: 1 0 100%;
width: 100%;
display: flex;
justify-content: space-between;
padding: 0 0 3rem;
flex-direction: row;
border: 1 px solid #555;
`;

const ListCard = styled.div
`
flex: 1 0 19%;
max-width: 19%;
padding: 0;
background-color: #eee;
border: 1px solid #555;
content: "";
clear: both;
`;

const CardHero = styled.div
`
position: relative;
width: 100%;
`;

const CardInfo = styled.div
`
padding: 1rem;
box-sizing: border-box;
`;


class Logo extends React.Component {

  render() {
    return (
        <MyLists>
            <SectionHeader>
                <SectionTitle>My Lists</SectionTitle>
            </SectionHeader>
            <ListsRow>
                <ListCard>
                    <h3 className="list-name">${listName}</h3>
                    <p>List Type: <span>${listType}</span></p>
                    <p className="list-description">${listDescription}</p>
                </ListCard>
            </ListsRow>
        </MyLists>
    )
  }
}

export default Logo;