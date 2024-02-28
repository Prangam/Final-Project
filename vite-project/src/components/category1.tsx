import { Card } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Post {
  category: string;
  description: string;
  name: string;
}

const baseURL = "https://4c3df3b6-b312-4e45-a3c7-ff03e2531966-00-28y59ks05cj8d.janeway.replit.dev/courses/1";

const now = 20;

const Category1: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <a href="/#/course1" style={{ textDecoration: 'none' }}>
        <Card style={{ textAlign: 'left', background: '#515A5A', color: 'white' }}>
          <Card.Body>
            <Card.Title>Course: {post.name}</Card.Title>
            <br />
            <ProgressBar variant="warning" now={now} label={`${now}%`} />
          </Card.Body>
        </Card>
      </a>
      <br/>
    </>
  )
}


export default Category1;