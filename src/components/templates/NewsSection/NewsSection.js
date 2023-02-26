import React, { useEffect, useState } from 'react';
import { Button } from 'components/atoms/Button/Button.styles';
import { ArticleWrapper, ContentWrapper, ModalArticleWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import axios from 'axios';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';

export const query = `
  {
    allArticles {
      id
      title
      category
      content
      image {
        url
      }
    }
  }
`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState([]);
  const [error, setError] = useState('');
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleOpenStudentDetails = async (id) => {
    setSelectedArticle(articles.filter((article) => article.id === id)[0]);
    handleOpenModal();
  };

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError("Sorry we couldn't load articles for you");
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              {image ? <img src={image.url} alt="article" /> : null}
              <p>{content}</p>
            </ContentWrapper>
            <Button isBig={true} onClick={() => handleOpenStudentDetails(id)}>
              Read more
            </Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}

      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <ModalArticleWrapper>
          <TitleWrapper>
            <h3>{selectedArticle.title}</h3>
            <p>{selectedArticle.category}</p>
          </TitleWrapper>
          <ContentWrapper>
            {selectedArticle.image ? <img src={selectedArticle.image.url} alt="article" /> : null}
            <p>{selectedArticle.content}</p>
          </ContentWrapper>
        </ModalArticleWrapper>
      </Modal>
    </Wrapper>
  );
};

export default NewsSection;
