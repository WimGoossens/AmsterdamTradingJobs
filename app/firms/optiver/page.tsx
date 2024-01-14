import { ColorSchemeToggle } from '../../../components/ColorSchemeToggle/ColorSchemeToggle';
import { JobList } from '@/components/JobList/JobList';
import { FirmList } from '@/components/Firms/FirmList';
import { FirmInfo } from '@/components/Firms/FirmInfo';
import { FirmJobList } from '@/components/Firms/FirmJobList';
import { Footer } from '@/components/MainAppShell/Footer';

export default function Firms() {
  return (
    <>
      <FirmInfo
        company={'Optiver'}
        description={'Sample description.'}
        founded_in={'1986'}
        fte='1709'
        website='https://optiver.com/'
        linkedin='https://www.linkedin.com/company/optiver/'
        google_maps_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.684721237222!2d4.8672712764385215!3d52.339865472014466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a0420284037%3A0x1a54787559cefaf9!2sOptiver!5e0!3m2!1snl!2snl!4v1705150674400!5m2!1snl!2snl'}
      >
      </FirmInfo>
      <FirmJobList company='Optiver'/>
      <Footer />
    </>
  );
}
