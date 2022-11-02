import { IconPlayerPlay } from '@tabler/icons';
import Button from '../../common/Button';
import { IProps } from './Hero.types';

// TODO: HEADING COMPONENT
const Hero = ({}: IProps) => {
  return (
    <section className="rel flex flex:col@all flex:row@tablet jc:start@all jc:end@tablet w:full gap-x:32 h:calc(100vh-96px-64px)">
      <div className="abs flex flex:col jc:start ai:start gap-y:32 pt:10% w:full max-w:lg px:16">
        <h1 className="font:bold font:40@all font:64@xs font:80@desktop mb:16">
          Track all your catch with <span className="color:indigo-50">Rybodex</span>
        </h1>
        <p className="font:18@all font:20@tablet color:gray-50@light color:gray-80@dark w:full@all w:3/4@tablet">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reprehenderit illo
          facere cum vel eligendi harum error aliquam illum, expedita rerum. Eos totam a excepturi
          quos enim, distinctio aliquam impedit!
        </p>

        <div className="flex flex:col@all flex:row@2xs jc:start ai:center gap:16 mt:32 w:full@all w:1/2@tablet">
          <Button className="w:full@all w:auto@2xs" type={'primary'} roundness={'round'}>
            Get Started
          </Button>

          <Button
            className="w:full@all w:auto@2xs flex gap:12"
            type={'outlined'}
            roundness={'round'}
          >
            Watch Demo
            <IconPlayerPlay size={20} className="color:indigo-50 fill:indigo-50" />
          </Button>
        </div>
      </div>
      {/* <div className="w:1/2@tablet bg:indigo-50/.25 round filter:blur(50px) p:32">asd</div> */}
    </section>
  );
};

export default Hero;
