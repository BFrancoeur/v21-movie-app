import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import '../css/style.css';
import '../images/movie.jpg';

const HomeComponent = styled.div
`
  width: 80%;
  max-width: 1200px;
  padding: 0;
  margin: 0 auto;
  border: 3px solid #555;
`;

const GallerySection = styled.section
`
width: 100%;
display: flex;
justify-content: space-evenly;
flex-direction: column;
padding: 3rem 0;
margin: 2.5rem 0;
border: 1px solid #555;
background-color: rgba(150, 250, 150, .3);
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

const GalleryRow = styled.div
`
flex: 1 0 100%;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 2rem;
border: 1 px solid #555;
`;

const MovieCard = styled.div
`
flex: 1 0 19%;
max-width: 19%;
padding: 1rem;
border: 1px solid #555;
content: "";
clear: both;
`;

const MovieHero = styled.div
`
position: relative;
width: 100%;
`;

const MovieImage = styled.img
`
width: 100%;
height: auto;
`;



class Home extends React.Component {

  render() {
    return (
        <HomeComponent>
            <Header />
            <GallerySection>
                <SectionHeader>
                    <SectionTitle>Movie Genre</SectionTitle>
                </SectionHeader>
                <GalleryRow>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h3 className="movie-title">Movie Title</h3>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h3 className="movie-title">Movie Title</h3>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h3 className="movie-title">Movie Title</h3>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h3 className="movie-title">Movie Title</h3>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h3 className="movie-title">Movie Title</h3>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                </GalleryRow>
            </GallerySection>
            <GallerySection>
                <SectionHeader>
                    <SectionTitle>Movie Genre</SectionTitle>
                </SectionHeader>
                <GalleryRow>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                </GalleryRow>
            </GallerySection>
            <GallerySection>
                <SectionHeader>
                    <SectionTitle>Movie Genre</SectionTitle>
                </SectionHeader>
                <GalleryRow>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                    <MovieCard>
                        <MovieHero>
                            <MovieImage src={require ('../images/movie.jpg')} alt="movie image" />
                        </MovieHero>
                        <h2 className="movie-title">Movie Title</h2>
                        <p className="movie-review">Review Stars</p>
                        <p className="movie-genre">Movie Genre</p>
                        <p className="Year">Movie Year</p>
                        <p className="lead-actor">Lead Actor</p>
                    </MovieCard>
                </GalleryRow>
            </GallerySection>
        </HomeComponent>
    )
  }
}

export default Home;