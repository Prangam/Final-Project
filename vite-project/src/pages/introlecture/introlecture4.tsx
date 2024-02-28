import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import ButtonFinish from '../../components/buttonfinish';

const Introlecture4: FC = () => {
  return (
    <Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <h2>What Is R?</h2>
      <br/>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/tlakIID89Rk?si=gmXaHM5m29MqAAjt" title="YouTube video" allowFullScreen>
        </iframe>
      </div>
      <ButtonFinish/>
    </Container>
  );
}

export default Introlecture4;