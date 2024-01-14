import { Welcome } from '../../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { JobList } from '@/components/JobList/JobList';
import { FirmList } from '@/components/Firms/FirmList';
import { FirmListTitle } from '@/components/Firms/FirmListTitle';
import { Divider } from '@mantine/core';
import { Footer } from '@/components/MainAppShell/Footer';

export default function Firms() {
  return (
    <>
      {/* <Welcome /> */}
      <FirmListTitle />
      <FirmList />
      <Footer />
    </>
  );
}
