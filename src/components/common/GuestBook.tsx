import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import CroppedImage from './CroppedImage';
import { useParams } from 'react-router-dom';
import { addComment, getComments } from 'apis';
import { Comment } from 'types/domain';
import usePagination from 'hooks/usePagination';
import Pagination from './Pagination';
import useInput from 'hooks/useInput';
import { pagination_page_count, pagination_count } from 'constants/index';

const GuestBook = () => {
  const { projectId: id } = useParams();
  const [name, setName] = useInput();
  const [message, setMessage] = useInput();
  const queryClient = useQueryClient();
  const { data: comments } = useQuery<Comment[]>(['comment', id], () => getComments(id));
  const { mutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', id]);
      handleChange(Math.floor(comments?.length / pagination_count) + 1)();
    },
  });
  const lastIndex = Math.floor((comments?.length - 1) / pagination_count) + 1;
  const { currentPage, pageStartNumber, handleChange } = usePagination({
    count: 5,
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
        <form
          onSubmit={e => {
            e.preventDefault();
            mutate({ id, name, message });
          }}
        >
          <StyledInput
            type='text'
            placeholder='이름'
            maxLength={10}
            value={name}
            onChange={setName}
            required
          />
          <StyledTextArea
            placeholder='축하의 말을 남겨주세요.'
            maxLength={150}
            value={message}
            onChange={setMessage}
            required
          />
          <StyledButton>등록</StyledButton>
        </form>
      </StyledInputContainer>
      <StyledComments>
        {comments
          ?.slice((currentPage - 1) * pagination_count, currentPage * pagination_count)
          .map(comment => (
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
          count={pagination_page_count}
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

  & > form {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
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
  width: 100%;
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
