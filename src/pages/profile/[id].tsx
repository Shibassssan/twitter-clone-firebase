import { FC } from 'react';
import { Footer } from '~/src/components/Footer';
import { ProfileContainer } from '~/src/components/containers/Profile';

const Profile: FC = () => {
  return (
    <>
      <header></header>
      <main>
        <ProfileContainer />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
