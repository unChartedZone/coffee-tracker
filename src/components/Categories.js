import React from 'react';
import styled from 'styled-components';

const CategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  margin: 1rem 0 0 0;

  .category {
    border: 1px solid #653207bf;
    border-radius: 20px;
    background-color: #fef3c7;
    color: #b45309;
    padding: 0.6rem 1rem;
    margin-right: 1rem;
  }
`;

const Categories = ({ categories }) => {
  return (
    <CategoriesStyled>
      {categories?.map((category) => {
        return (
          <div className="category" key={category.title}>
            {category.title}
          </div>
        );
      })}
    </CategoriesStyled>
  );
};

export default Categories;
