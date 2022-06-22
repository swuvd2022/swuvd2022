import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled, { css } from 'styled-components';
import CroppedImage from './CroppedImage';
import { useParams } from 'react-router-dom';
import { addComment, getComments } from 'apis';
import { Comment } from 'types/domain';
import usePagination from 'hooks/usePagination';
import Pagination from './Pagination';
import useInput from 'hooks/useInput';
import {
  pagination_page_count,
  pagination_count,
  pagination_page_count_mobile,
  pagination_count_mobile,
} from 'constants/index';
import useResponsive from 'hooks/useResponsive';

const GuestBook = () => {
  const { projectId: id } = useParams();
  const [name, setName] = useInput();
  const [message, setMessage] = useInput();
  const queryClient = useQueryClient();
  const { data: comments } = useQuery<Comment[]>(['comment', id], () => getComments(id));

  const isDesktop = useResponsive();
  const p_page_count = isDesktop ? pagination_page_count : pagination_page_count_mobile;
  const p_count = isDesktop ? pagination_count : pagination_count_mobile;
  const { mutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', id]);
      handleChange(Math.floor(comments?.length / p_count) + 1)();
    },
  });
  const lastIndex = Math.floor((comments?.length - 1) / p_count) + 1;
  const { currentPage, pageStartNumber, handleChange } = usePagination({
    count: 5,
  });

  return (
    <StyledRoot isDesktop={isDesktop}>
      <h2>Guestbook</h2>
      <StyledInputContainer>
        <CroppedImage
          src={require('assets/images/guestbook.png')}
          alt=''
          width='100%'
          ratio='36.42%'
        />
        <form
          onSubmit={e => {
            e.preventDefault();
            mutate({ id, name, message });
            if (!isDesktop) {
              window.scrollTo(0, document.body.scrollHeight);
            }
          }}
        >
          <StyledInput
            type='text'
            placeholder='이름'
            maxLength={10}
            value={name}
            onChange={setName}
            isDesktop={isDesktop}
            required
          />
          <StyledTextArea
            placeholder='축하의 말을 남겨주세요.'
            maxLength={150}
            value={message}
            onChange={setMessage}
            isDesktop={isDesktop}
            required
          />
          <StyledButton>등록</StyledButton>
        </form>
      </StyledInputContainer>
      <StyledComments>
        {comments?.slice((currentPage - 1) * p_count, currentPage * p_count).map(comment => (
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
          count={p_page_count}
          lastIndex={lastIndex}
        />
      </StyledComments>
    </StyledRoot>
  );
};

export default GuestBook;

const StyledRoot = styled.div<{ isDesktop: boolean }>`
  width: 100%;
  position: relative;
  padding-bottom: 46px;
  display: flex;
  ${({ isDesktop }) =>
    isDesktop
      ? css`
          flex-direction: row;
          padding-top: 123px;
        `
      : css`
          flex-direction: column;
          padding-top: 95px;
        `}
  gap: 34px;

  & > h2 {
    ${({ isDesktop }) =>
      isDesktop
        ? css`
            font-size: 23px;
            top: 45px;
          `
        : css`
            font-size: 18px;
          `}
    font-size: ${({ isDesktop }) => (isDesktop ? '23px' : '18px')};
    position: absolute;
    top: 45px;
    left: 0;
  }
`;

const StyledInputContainer = styled.div`
  padding: 28px 16px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.brandColor_1};
  flex-basis: 42.8%;

  & > form {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 13px;
  }
`;

const StyledInput = styled.input<{ isDesktop: boolean }>`
  border: 1px solid ${({ theme }) => theme.brandColor_2};
  color: ${({ theme }) => theme.brandColor_1};
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;

  ${({ isDesktop }) =>
    isDesktop
      ? css`
          height: 45px;
        `
      : css`
          height: 41px;
        `}
  ::placeholder {
    color: ${({ theme }) => theme.brandColor_1};
  }
`;
const StyledTextArea = styled.textarea<{ isDesktop: boolean }>`
  border: 1px solid ${({ theme }) => theme.brandColor_2};
  color: ${({ theme }) => theme.brandColor_1};
  border-radius: 8px;
  padding: 12px;
  resize: none;
  flex: 1;
  font-size: 14px;

  ${({ isDesktop }) =>
    isDesktop
      ? css`
          min-height: 461px;
          height: 100%;
        `
      : css`
          height: 120px;
        `}
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
  font-size: 14px;
`;

const StyledComments = styled.div`
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.brandColor_1};
  padding: 28px 20px 78px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  position: relative;
  flex-basis: 57.2%;
  font-size: 14px;
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
  min-height: 80px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.brandColor_2};
  padding: 10px;
`;
