import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import { Wrapper } from '../Home/Home.styled';
import { ContentWrapper } from './SignUp.styled';
import Header from '../../components/headersComp/Header/Header';

const SignUp = () => {
  return (
	  <Wrapper>
		  <Header/>
      <ContentWrapper>
        <Title text={'Sign Up'} margin={14} />
        <SubTitle
          text={
            'Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.'
          }
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default SignUp;
