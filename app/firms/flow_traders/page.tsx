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
        company={'Flow Traders'}
        description={'Sample description.'}
        founded_in={'2004'}
        fte='660'
        website='https://www.flowtraders.com/'
        linkedin='https://www.linkedin.com/company/flow-traders/'
        google_maps_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9528872990213!2d4.925296776440575!3d52.371274272022475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609095013a427%3A0xb605037f01c566f0!2sFlow%20Traders!5e0!3m2!1snl!2snl!4v1704631553403!5m2!1snl!2snl'}
      >
      </FirmInfo>
      <FirmJobList company='Flow Traders'/>
      <Footer />
    </>
  );
}
