import { useQuery } from 'react-query';
import styled from 'styled-components';
import CroppedImage from './CroppedImage';
import { useParams } from 'react-router-dom';
import { getComments } from 'apis';
import { Comment } from 'types/domain';
import usePagination from 'hooks/usePagination';
import Pagination from './Pagination';

const GuestBook = () => {
  const { projectId: id } = useParams();
  const { data: comments } = useQuery<Comment[]>(['comment', id], () => getComments(id));
  const lastIndex = Math.floor(comments?.length / 5) + 1;
  const { currentPage, pageStartNumber, handleChange } = usePagination({
    count: 5,
    lastIndex,
  });

  return (
    <StyledRoot>
      <h2>Guestbook</h2>
      <StyledInputContainer>
        <CroppedImage
          src={require('assets/images/guestbook.png')}
          alt=''
          width='100%'
          height='161px'
        />
        <StyledInput type='text' placeholder='이름' />
        <StyledTextArea placeholder='축하의 말을 남겨주세요.' />
        <StyledButton>등록</StyledButton>
      </StyledInputContainer>
      <StyledComments>
        {comments?.slice((currentPage - 1) * 5, currentPage * 5).map(comment => (
          <StyledComment key={comment.id}>
            <StyledTop>
              <span>{comment.name}</span>
              <span>{comment.createdDate}</span>
            </StyledTop>
            <StyledBottom>{comment.message}</StyledBottom>
          </StyledComment>
        ))}
        <Pagination
          currentPage={currentPage}
          handleChange={handleChange}
          pageStartNumber={pageStartNumber}
          count={10}
          lastIndex={lastIndex}
        />
      </StyledComments>
    </StyledRoot>
  );
};

export default GuestBook;

const StyledRoot = styled.div`
  width: 100%;
  position: relative;
  padding-top: 123px;
  padding-bottom: 46px;
  display: flex;
  gap: 34px;

  & > h2 {
    position: absolute;
    top: 45px;
    left: 0;
  }
`;

const StyledInputContainer = styled.div`
  width: 478px;
  padding: 28px 16px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.brandColor_1};
`;

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.brandColor_2};
  color: ${({ theme }) => theme.brandColor_1};
  border-radius: 8px;
  padding: 12px;
  height: 45px;
  ::placeholder {
    color: ${({ theme }) => theme.brandColor_1};
  }
`;
const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.brandColor_2};
  color: ${({ theme }) => theme.brandColor_1};
  border-radius: 8px;
  padding: 12px;
  resize: none;
  height: 461px;
  ::placeholder {
    color: ${({ theme }) => theme.brandColor_1};
  }
`;

const StyledButton = styled.button`
  height: 49px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.brandColor_1};
  color: white;
`;

const StyledComments = styled.div`
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.brandColor_1};
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  position: relative;
`;

const StyledComment = styled.div`
  display: flex;
  gap: 11px;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.brandColor_1};
  padding-bottom: 20px;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledBottom = styled.div`
  height: 80px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.brandColor_2};
  padding: 10px;
`;
