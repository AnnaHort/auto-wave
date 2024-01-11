import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        visible={true}
        height={80}
        width={80}
        color="#3470ff"
        secondaryColor={'#121417'}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth={1}
        strokeWidthSecondary={2}
      />
    </LoaderContainer>
  );
};
