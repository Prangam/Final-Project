import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import ButtonFinish from '../../components/buttonfinish';

const Introlecture2: FC = () => {
  return (
    <Container style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <h2>JavaScript Interactive Websites</h2>
      <br/>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/ybvkdiwI83c?si=4qJRC1twUSUW9lYZ" title="YouTube video" allowFullScreen>
        </iframe>
      </div>
      <ButtonFinish/>
    </Container>
  );
}

export default Introlecture2;