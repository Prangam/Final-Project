import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import ButtonFinish from '../../components/buttonfinish';

const Introlecture1: FC = () => {
  return (
    <Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <h2>Getting Started with Python</h2>
      <br/>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/5uKTyEUgFa8?si=7PoZqloCdiBXtqqb" title="YouTube video" allowFullScreen>
        </iframe>
      </div>
      <ButtonFinish/>
    </Container>
  );
}

export default Introlecture1;