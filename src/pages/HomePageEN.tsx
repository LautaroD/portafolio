import React from 'react';
import { VStack, Heading, Container, ColorModeContext, useColorMode } from '@chakra-ui/react';
import { Footer, Header, Navbar, SkillSlider } from '../components';
import { useAppSelector } from '../redux/hooks/redux-hooks';
import ContactForm from '../components/ContactForm';
import { DotPulse } from '@uiball/loaders';
import Banner from '../components/Banner';

const Projects = React.lazy(() => import('../components/Projects'));

const HomePageEN = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const { projects } = useAppSelector((state) => state.projects);

  return (
    <VStack minH={'100vh'}>
      <Navbar />
      <Header />
      <Heading id="my-skills" pt={28} pb={6} color={colorMode === 'dark' ? "brand.clear" : "brand.primary800"}>
        My Skills
      </Heading>
      <SkillSlider />
      <Banner />

      <Heading id="projects" pt={24} color={colorMode === 'dark' ? "brand.clear" : "brand.primary800"}>My Projects</Heading>
      <React.Suspense
        fallback={<DotPulse size={40} speed={1.3} color="#615AFF" />}
      >
        <Projects projects={projects !== null ? projects : []} />
      </React.Suspense>

      <ContactForm />
      <Footer />
    </VStack>
  );
};

export default HomePageEN;
