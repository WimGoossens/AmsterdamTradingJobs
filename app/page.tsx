import { Welcome } from '../components/Welcome/Welcome';
import { JobList } from '@/components/JobList/JobList';
import { Footer } from '@/components/MainAppShell/Footer';
import ScrollToTop from '@/components/Welcome/ScrollToTop';
import Subscribe from '@/components/Welcome/Subscribe';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <JobList />
      <ScrollToTop />
      <Footer />
      <Subscribe/>
    </>
  );
}
