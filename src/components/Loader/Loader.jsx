import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        visible={true}
        height={80}
        width={80}
        color={'var(--color-primary-blue)'}
        secondaryColor={'var(--color-primary-black)'}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth={1}
        strokeWidthSecondary={2}
      />
    </LoaderContainer>
  );
};
