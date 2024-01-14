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
        company={'IMC'}
        description={'Sample description.'}
        founded_in={'1989'}
        fte='1121'
        website='https://www.imc.com/'
        linkedin='https://www.linkedin.com/company/imc-financial-markets/'
        google_maps_src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.83606916549!2d4.852891876438353!3d52.33711997201379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a049918657d%3A0x5eba898705a8b557!2sIMC%20Trading%20B.V.!5e0!3m2!1snl!2snl!4v1705150628125!5m2!1snl!2snl'}
      >
      </FirmInfo>
      <FirmJobList company='IMC'/>
      <Footer />
    </>
  );
}
