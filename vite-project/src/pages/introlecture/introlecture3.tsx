import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import ButtonFinish from '../../components/buttonfinish';

const Introlecture3: FC = () => {
  return (
    <Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <h2>Build Machine Learning Models</h2>
      <br/>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/lA5MHygnFcg?si=o3RLlUTP1-xDV-GD" title="YouTube video" allowFullScreen>
        </iframe>
      </div>
      <ButtonFinish/>
    </Container>
  );
}

export default Introlecture3;